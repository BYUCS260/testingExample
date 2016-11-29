describe("Contacts", function() {
  var c;
  
  it("Should have defaults for name, number, and address", function() {
    c = new Contact();
    expect(c.getName()).toBe("John Doe");
    expect(c.getNumber()).toBe("999-9999");
    expect(c.getAddress()).toBe("1111 Campus Drive");
  })

  it("Should create a contact when given just a name", function() {
    c = new Contact("Jordan");
    expect(c.getName()).toBe("Jordan");
    expect(c.getNumber()).toBe("999-9999");
    expect(c.getAddress()).toBe("1111 Campus Drive");
  })

  it("Should create a contact with all fields given", function() {
    c = new Contact("Zachary","555-5555", "Wyview Park");
    expect(c.getName()).toBe("Zachary");
    expect(c.getNumber()).toBe("555-5555");
    expect(c.getAddress()).toBe("Wyview Park");
  })
})