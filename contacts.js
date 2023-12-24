const fs = require("fs/promises");
const { nanoid } = require("nanoid");
const path = require("path");

const contactsPath = path.join(__dirname, "db", "contacts.json");

async function listContacts() {
  const contacts = await fs.readFile(contactsPath, "utf-8");
  return JSON.parse(contacts);
}

async function getContactById(contactId) {
  const contacts = await listContacts();
  const contact = contacts.find((el) => el.id === contactId);
  return contact || null;
}

async function removeContact(contactId) {
  const contacts = await listContacts();
  // const removesContact
}

async function addContact(newContact) {
  const contacts = await listContacts();
  const addedContact = {
    id: nanoid(),
    ...newContact,
  };
  contacts.push(addedContact);
  await fs.writeFile(contactsPath, JSON.stringify(contacts, null, 2));
  return addedContact;
}

module.exports = {
  listContacts,
  getContactById,
  removeContact,
  addContact,
};
