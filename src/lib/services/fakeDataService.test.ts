import FakeDataService from "./fakeDataService";

describe("FakeDataService tests", () => {
  it("firstName should return a random name", () => {
    const name = FakeDataService.firstName();
    expect(name).toBeTypeOf("string");
    expect(name).not.toEqual(FakeDataService.firstName());
  });

  it("lastName should return a random name", () => {
    const name = FakeDataService.lastName();
    expect(name).toBeTypeOf("string");
    expect(name).not.toEqual(FakeDataService.lastName());
  });

  it("birthdate should return a random birthdate", () => {
    const birthdate = FakeDataService.birthdate();

    expect(birthdate).toMatch(/\d{1,2}\/\d{2}\/\d{4}/);
    expect(birthdate).not.toEqual(FakeDataService.birthdate());
  });

  it("email should return a random email with vitesicure.it as provider", () => {
    const email = FakeDataService.email();
    expect(email).toMatch(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/);
    expect(email).toMatch(/vitesicure.it$/);
    expect(email).not.toEqual(FakeDataService.email());
  });

  it('phone should return a random phone number starting with "3"', () => {
    const phone = FakeDataService.phone();
    expect(phone).toMatch(/^(\+39)?\d{10}$/);
    expect(phone).toMatch(/^3/);
    expect(phone).not.toEqual(FakeDataService.phone());
  });

  it('phone should return a random phone number without "0" as second phone digit', () => {
    for(let i = 0; i < 1000; i++) {
      const phone = FakeDataService.phone();
      expect(phone).toMatch(/^(\+39)?\d{10}$/);
      expect(phone[1]).not.toEqual("0");
    }
  });

  it("street should return a random street name", () => {
    const street = FakeDataService.street();
    expect(street).toBeTypeOf("string");
    expect(street).not.toEqual(FakeDataService.street());
  });

  it("city should return a random city name", () => {
    const city = FakeDataService.city();
    expect(city).toBeTypeOf("string");
    expect(city).not.toEqual(FakeDataService.city());
  });
});
