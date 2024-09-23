const Controller = require("./controllers/controller");

const command = process.argv[2];

switch (command) {
  case "list":
    Controller.list();
    break;

  case "addCustomer":
    const [bankId, name, ktp, depositAmount] = process.argv.slice(3);
    Controller.addCustomer(+bankId, name, ktp, Number(depositAmount));
    break;

  case "deleteCustomer":
    {
      const [bankId, ktp] = process.argv.slice(3);
      Controller.deleteCustomer(+bankId, ktp);
    }

    break;

  case "detail":
    {
      const [bankId] = process.argv.slice(3);
      Controller.detail(+bankId);
    }

    break;

  case "addInterest":
    {
      const [bankId] = process.argv.slice(3);
      Controller.addInterest(+bankId);
    }

    break;

  default:
    break;
}

// entry script (index.js, app.js, main.js) ==> controller ==> model ==> controller ==> view
