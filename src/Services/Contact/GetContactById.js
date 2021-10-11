import api, { handleError } from '@/Services'

export default async data => {

  let contactId = data.contactId;
  console.log('contactId GetContactById', contactId)
  // const response = await api.get('/contact/', {contactId})
  const response = await api.get(`/contact/`+contactId)
  console.log('response', response)
  return response.data
}
