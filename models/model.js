const { Bank, LocalBank, NationalBank, Customer } = require("./class");
const fs = require("fs").promises;

// ! Semua data yang keluar dari model harus berupa instance
class Model {
  static async saveJSON(banks) {
    const string = JSON.stringify(banks, null, 2);
    await fs.writeFile("./data.json", string);
  }

  static async readBank() {
    const data = await fs.readFile("./data.json", "utf-8");
    const parsedData = JSON.parse(data);
    const banks = Bank.createBanks(parsedData);
    return banks;
  }

  static async createCustomer(bankId, name, ktp, depositAmount) {
    const banks = await this.readBank();
    const bankIndex = banks.findIndex((el) => el.id === bankId);

    if (bankIndex == -1) {
      throw new Error(`Bank with id ${bankId} is not found`);
    }

    if (banks[bankIndex].customers.length == banks[bankIndex].limit) {
      throw new Error(`You can not add more customer to this bank`);
    }

    const newCustomer = new Customer(name, ktp, depositAmount);
    banks[bankIndex].customers.push(newCustomer);
    await this.saveJSON(banks);
    return newCustomer;
  }

  static async deleteCustomerByKtp(bankId, ktp) {
    const banks = await this.readBank();
    const bankIndex = banks.findIndex((el) => el.id === bankId);

    if (bankIndex == -1) {
      throw new Error(`Bank with id ${bankId} is not found`);
    }

    const customerIndex = banks[bankIndex].customers.findIndex(
      (el) => el.ktp == ktp
    );

    if (customerIndex == -1) {
      throw new Error(`Customer with ktp ${ktp} is not found`);
    }

    const deletedCustomer = banks[bankIndex].customers.splice(customerIndex, 1);
    await this.saveJSON(banks);
    return deletedCustomer[0];
  }

  static async readCustomerByBankId(bankId) {
    const banks = await this.readBank();
    const bankIndex = banks.findIndex((el) => el.id === bankId);

    if (bankIndex == -1) {
      throw new Error(`Bank with id ${bankId} is not found`);
    }

    return banks[bankIndex].customers;
  }

  static async addInterest(bankId) {
    const banks = await this.readBank();
    const bankIndex = banks.findIndex((el) => el.id === bankId);

    if (bankIndex == -1) {
      throw new Error(`Bank with id ${bankId} is not found`);
    }

    banks[bankIndex].customers.forEach((c) => {
      c.addInterest();
    });

    await this.saveJSON(banks);
    return banks[bankIndex].customers;
  }
}

module.exports = Model;
