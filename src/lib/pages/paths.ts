type LifePage = 'preventivatore' | 'yourOffer' | 'health' | 'beneficiaries'| 'personalData'| 'checkout';
type InjuryPage = 'select' | 'yourOffer' | 'contractor'| 'checkout';

const pagesPath = {
  life: {
    preventivatore: "preventivatore",
    yourOffer: "la-tua-offerta",
    health: "stato-di-salute",
    beneficiaries: "beneficiari",
    personalData: "dati-personali",
    checkout: "checkout",
  } satisfies Record<LifePage, string>,
  injury: {
    select: "seleziona",
    yourOffer: "la-tua-polizza-infortuni",
    contractor: "contraente",
    checkout: "checkout",
  } satisfies Record<InjuryPage, string>,
} as const;

export { pagesPath };