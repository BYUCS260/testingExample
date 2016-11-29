function Contact(givenName, phoneNum, address ) {
  this.name = givenName || "John Doe";
  this.number = phoneNum || "999-9999";
  this.address = address || "1111 Campus Drive";
}

Contact.prototype.getName = function() {
  return this.name;
}

Contact.prototype.getNumber = function() {
  return this.number;
}

Contact.prototype.getAddress = function() {
  return this.address;
}