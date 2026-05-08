import { fakerIT as faker } from "@faker-js/faker";

class FakeDataService {
  private static cities = [
    "Roma",
    "Milano",
    "Napoli",
    "Torino",
    "Palermo",
    "Genova",
    "Bologna",
    "Firenze",
    "Bari",
    "Catania",
    "Venezia",
    "Verona",
    "Messina",
    "Padova",
    "Trieste",
    "Taranto",
    "Brescia",
    "Parma",
    "Prato",
    "Modena",
    "Reggio",
    "Perugia",
    "Ravenna",
    "Livorno",
    "Cagliari",
    "Foggia",
    "Rimini",
    "Salerno",
    "Ferrara",
    "Sassari",
    "Latina",
    "Giugliano",
    "Monza",
    "Siracusa",
    "Pescara",
    "Bergamo",
    "Forlì",
    "Trento",
    "Vicenza",
    "Terni",
    "Bolzano",
    "Novara",
    "Piacenza",
    "Ancona",
    "Andria",
    "Arezzo",
    "Udine",
    "Cesena",
    "Lecce",
  ];

  public static birthdate(maxAge: number = 70) {
    const date = faker.date.birthdate({
      max: maxAge,
      min: 18,
      mode: "age",
    });

    const year = date.getUTCFullYear();
    const month = String(date.getUTCMonth() + 1).padStart(2, "0");
    const day = String(date.getUTCDate()).padStart(2, "0");

    return `${day}/${month}/${year}`;
  }

  public static firstName() {
    return faker.person.firstName();
  }

  public static lastName() {
    return faker.person.lastName();
  }

  public static email() {
    return faker.internet.email({ provider: "vitesicure.it" });
  }

  public static phone() {
    return (
      "3" +
      faker.string.numeric({ length: 1, exclude: "0" }) +
      faker.string.numeric({ length: 8 })
    );
  }

  public static street() {
    return faker.location.street();
  }

  public static city() {
    return faker.helpers.arrayElement(this.cities);
  }
}

export default FakeDataService;
