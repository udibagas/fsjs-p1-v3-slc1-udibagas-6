class Bank {
  constructor(id, name, type, limit, customers = []) {
    this.id = id;
    this.name = name;
    this.type = type;
    this.limit = limit;
    this.customers = customers;
  }

  toJSON() {
    return {
      id: this.id,
      name: this.name,
      type: this.type,
      customers: this.customers,
    };
  }

  static createBanks(rawData) {
    return rawData.map((el) => {
      const customers = el.customers.map((c) => {
        return new Customer(c.name, c.ktp, c.depositAmount);
      });

      if (el.type === "LocalBank") {
        return new LocalBank(el.id, el.name, customers);
      }

      if (el.type === "NationalBank") {
        return new NationalBank(el.id, el.name, customers);
      }
    });
  }
}

class LocalBank extends Bank {
  constructor(id, name, customers = []) {
    super(id, name, "LocalBank", 3, customers);
  }
}

class NationalBank extends Bank {
  constructor(id, name, customers = []) {
    super(id, name, "NationalBank", 5, customers);
  }
}

class Customer {
  #ktp;
  #depositAmount;

  constructor(name, ktp, depositAmount) {
    this.name = name;
    this.#ktp = ktp;
    this.#depositAmount = depositAmount;
  }

  get ktp() {
    return this.#ktp;
  }

  get depositAmount() {
    return this.#depositAmount;
  }

  set depositAmount(value) {
    this.#depositAmount = value;
  }

  get depositAmountInRupiah() {
    return this.#depositAmount.toLocaleString("id-ID", {
      style: "currency",
      currency: "IDR",
    });
  }

  toJSON() {
    return {
      name: this.name,
      ktp: this.#ktp,
      depositAmount: this.#depositAmount,
    };
  }

  addInterest() {
    this.depositAmount += this.depositAmount * 0.1;
  }
}

module.exports = { Bank, LocalBank, NationalBank, Customer };
