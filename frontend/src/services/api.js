import axios from 'axios'

const API_URL = '/url'

export async function shortenURL(longURL) {
  try {
    const response = await axios.post(API_URL, {
      url: longURL
    })
    return response.data
  } catch (error) {
    if (error.response?.data?.error) {
      throw new Error(error.response.data.error)
    }
    throw new Error('Failed to shorten URL')
  }
}
