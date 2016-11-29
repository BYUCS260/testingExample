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
    var first = new Contact();
    this.contacts = [first];
    if(cb) {
      return cb();
    }
  }, 3);
}

AddressBook.prototype.promiseIC = function() {
  return new Promise(function(resolve, reject) {
    setTimeout(() => {
      var first = new Contact("Jordan");
      this.contacts = [first];
      console.log(this.contacts);
      resolve(first);
    }, 3);
  })
}
