import api, { handleError } from '@/Services'

export default async userId => {

  const response = await api.get('/contact')
  return response.data
}
