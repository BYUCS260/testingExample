describe( "AddressBook", function() {

  var ab, c;

  beforeEach(function() {   // beforeEach() runs before *each* testcase it()
    ab = new AddressBook(),
    c  = new Contact();
  });

  it("should be able to add Contact", function() {
    ab.addContact(c);
    expect(ab.getContact(0)).toBe(c);
  });

  it("should be able to delete a Contact", function() {
    var ab = new AddressBook(),
        c  = new Contact();
    ab.addContact(c);
    ab.deleteContact(0);
    expect(ab.deleteContact(0)).not.toBeDefined();
  });
});

describe("Async Address Book", function() {	
  var ab = new AddressBook();

  beforeEach(function(done) {
    ab.getInitialContacts(function() {    // getInitialContacts() is an *async* function
      done();                             // *done() signals* to the test framework that the async func call is done
    });
  });

  it("should grab an initial blank contact", function(done) {
    expect(ab.initialComplete).toBe(true);
    var c = new Contact();
    expect(ab.getContact(0)).toEqual(c);
    done();
  });
});

describe("Promisify Address Book", function() {
  var ab = new AddressBook();

  it("should grab an initial contact named after you", function(done) {
    var c = new Contact("Jordan");
    ab.promiseIC().then(function(result) {
      expect(result).toEqual(c);
      done();
    })
  });
})
