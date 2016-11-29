function AddressBook() {
  this.contacts = []
  this.initialComplete = false;
}

AddressBook.prototype.addContact = function(c) {
  this.contacts.push(c);
}

AddressBook.prototype.getContact = function(i) {
  return this.contacts[i];
}

AddressBook.prototype.deleteContact = function(i) {
  this.contacts.splice(i, 1);
}

AddressBook.prototype.getInitialContacts = function(cb) { // Fake async callback function
  setTimeout(() => {
    this.initialComplete = true;  // Set to true
    if(cb) {
      return cb();
    }
  }, 3);
}
