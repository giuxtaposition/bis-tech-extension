type LifePage =
  | "preventivatore"
  | "yourOffer"
  | "health"
  | "beneficiaries"
  | "personalData"
  | "checkout";
type PersonalAccidentPage =
  | "select"
  | "yourOffer"
  | "policyHolder"
  | "checkout";

const pagesPath = {
  life: {
    preventivatore: "preventivatore",
    yourOffer: "la-tua-offerta",
    health: "stato-di-salute",
    beneficiaries: "beneficiari",
    personalData: "dati-personali",
    checkout: "checkout",
  } satisfies Record<LifePage, string>,
  personalAccident: {
    select: "seleziona",
    yourOffer: "la-tua-polizza-infortuni",
    policyHolder: "contraente",
    checkout: "checkout",
  } satisfies Record<PersonalAccidentPage, string>,
} as const;

export { pagesPath };
