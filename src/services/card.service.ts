import { apiService } from "@/lib/api.service"

const getInfoCard = async () => {
  const res = await apiService.get('bank/1')
  return res
  
}
const transfers = async (body: {
  cardNumber: number,
  nameHolder: string,
  content: string,
  type: string,
  amount: number,
  cardId: number,
  bankId: number
}) => {
  const res = await apiService.post('transaction', body)
  return res

}
export const  cardService = {
  getInfoCard,
  transfers
}