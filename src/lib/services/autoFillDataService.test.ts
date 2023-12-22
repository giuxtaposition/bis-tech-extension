import { Product } from "../../types";
import AutoFillDataService, { LifePage } from "./autoFillDataService";

describe("autoFillDataService", () => {
  describe.each([[Product.SquareLife], [Product.NetLife]])(
    "Product: %s",
    (product) => {
      describe(`Page: ${LifePage.Calculator}`, () => {
        it("should return birthdate in correct format", () => {
          const data = AutoFillDataService.getAutoFillData(
            product,
            LifePage.Calculator,
          );
          expect(data.birthdate.value).toMatch(/\d{1,2}\/\d{2}\/\d{4}/);
        });

        it("should return random date for birthdate", () => {
          const data1 = AutoFillDataService.getAutoFillData(
            product,
            LifePage.Calculator,
          );
          const data2 = AutoFillDataService.getAutoFillData(
            product,
            LifePage.Calculator,
          );

          expect(data1.birthdate.value).not.toEqual(data2.birthdate.value);
        });
      });

      describe(`Page: ${LifePage.YourOffer}`, () => {
        it("should return data in correct format", () => {
          const data = AutoFillDataService.getAutoFillData(
            product,
            LifePage.YourOffer,
          );
          expect(data.name.value).toBeTypeOf("string");
          expect(data.surname.value).toBeTypeOf("string");
          expect(data.email.value).toMatch(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/);
          expect(data.phone.value).toMatch(/^(\+39)?\d{10}$/);
        });

        it("should return random value for data", () => {
          const data1 = AutoFillDataService.getAutoFillData(
            product,
            LifePage.YourOffer,
          );
          const data2 = AutoFillDataService.getAutoFillData(
            product,
            LifePage.YourOffer,
          );

          expect(data1.name.value).not.toEqual(data2.name.value);
          expect(data1.surname.value).not.toEqual(data2.surname.value);
          expect(data1.email.value).not.toEqual(data2.email.value);
          expect(data1.phone.value).not.toEqual(data2.phone.value);
        });
      });

      describe(`Page: ${LifePage.PersonalData}`, () => {
        it("should return data in correct format", () => {
          const data = AutoFillDataService.getAutoFillData(
            product,
            LifePage.PersonalData,
          );
          expect(data.gender.value).toBeTypeOf("string");
          expect(data.birthCity.value).toBeTypeOf("string");
          expect(data.job.value).toBeTypeOf("string");
          expect(data.maritalStatus.value).toBeTypeOf("string");
          expect(data.familyUnitType.value).toBeTypeOf("string");
          expect(data.street.value).toBeTypeOf("string");
          expect(data.streetNumber.value).toBeTypeOf("string");
          expect(data.postalCode.value).toBeTypeOf("string");
          expect(data.city.value).toBeTypeOf("string");
          expect(data.province.value).toBeTypeOf("string");
          expect(data.state.value).toBe("Italia");
        });

        it("should return random value for data", () => {
          const data1 = AutoFillDataService.getAutoFillData(
            product,
            LifePage.PersonalData,
          );
          const data2 = AutoFillDataService.getAutoFillData(
            product,
            LifePage.PersonalData,
          );

          expect(data1.birthCity.value).not.toEqual(data2.birthCity.value);
          expect(data1.street.value).not.toEqual(data2.street.value);
        });
      });
    },
  );
});
