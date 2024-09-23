const Model = require("../models/model");
const View = require("../views/view");

class Controller {
  static async list() {
    try {
      const banks = await Model.readBank();
      View.showBanks(banks);
    } catch (error) {
      View.printError(error);
    }
  }

  static async addCustomer(bankId, name, ktp, depositAmount) {
    try {
      const newCustomer = await Model.createCustomer(
        bankId,
        name,
        ktp,
        depositAmount
      );
      View.successAddCustomer(newCustomer);
    } catch (error) {
      View.printError(error);
    }
  }

  static async deleteCustomer(bankId, ktp) {
    try {
      const deletedCustomer = await Model.deleteCustomerByKtp(bankId, ktp);
      View.successDeleteCustomer(deletedCustomer);
    } catch (error) {
      View.printError(error);
    }
  }

  static async detail(bankId) {
    try {
      const customers = await Model.readCustomerByBankId(bankId);
      View.showCustomers(customers);
    } catch (error) {
      View.printError(error);
    }
  }

  static async addInterest(bankId) {
    try {
      const customers = await Model.addInterest(bankId);
      View.showCustomers(customers);
    } catch (error) {
      View.printError(error);
    }
  }
}

module.exports = Controller;
