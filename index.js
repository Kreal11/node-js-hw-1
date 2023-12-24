const { listContacts, getContactById, addContact } = require("./contacts");

const argv = require("yargs").argv;

async function invokeAction({ action, id, name, email, phone }) {
  switch (action) {
    case "list":
      const contacts = await listContacts();
      return console.table(contacts);

    case "get":
      const contact = await getContactById(id);
      return console.log(contact);

    case "add":
      const newContact = await addContact({ name, email, phone });
      return console.log(newContact);

    case "remove":
      // ... id
      break;

    default:
      console.warn("\x1B[31m Unknown action type!");
  }
}

invokeAction(argv);
