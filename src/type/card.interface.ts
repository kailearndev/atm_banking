export interface CardResponse {
  id: number
  theme: string
  cardNumber: number
  type: string
  cardHolder: string
  balance: number
  transactions: Transaction[]
  themeActiveLists: ThemeActiveLists[]
}

export interface Transaction {
  id: number
  cardNumber: number
  nameHolder: string
  cardId: number
  content: string
  type: string
  bankId: number
  amount: number
}
export interface ThemeActiveLists {
  id: number
 name: string,
 url: string
}

export const CardInitialValue: CardResponse =  {
  id: 0,
  theme: "",
  cardNumber: 0,
  type: "",
  cardHolder: "",
  balance: 0,
  transactions: [],
  themeActiveLists: []
}