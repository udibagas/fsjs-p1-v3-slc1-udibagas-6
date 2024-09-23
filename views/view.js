class View {
  static printError(error) {
    console.log(error.message);
  }

  static showBanks(banks) {
    console.log(banks);
  }

  static showCustomers(customers) {
    customers = customers.map((el) => {
      return {
        Customer: el.name,
        ID: el.ktp, // getter
        "Deposit Amount": el.depositAmountInRupiah, // getter
      };
    });

    console.table(customers);
  }

  static successAddCustomer(newCustomer) {
    console.log(`Customer ${newCustomer.name} added successfully`);
  }

  static successDeleteCustomer(customer) {
    console.log(`Customer ${customer.name} deleted successfully`);
  }
}

module.exports = View;
