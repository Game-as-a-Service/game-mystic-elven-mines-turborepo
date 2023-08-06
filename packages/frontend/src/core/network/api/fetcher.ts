type fetcherType = { url: string; body?: any; type: 'GET' | 'POST' }
type IConfig = RequestInit

export const fetcher = async ({ url, body, type }: fetcherType) => {
  console.log('body', body)
  try {
    const token = 'your_token' // 请替换为您的实际 token
    const config: IConfig = {
      method: type,
      headers: {
        'Content-Type': 'application/json',
        //   Authorization: `Bearer ${token}`,
      },
    }
    config.body = JSON.stringify(body)
    const response = await fetch(url, config)

    const res = await interceptor(response)
    console.log('res', res)
    return res
  } catch (error) {
    console.error('API Request Error:', error)
  }
}

const interceptor = (response: any) => {
  if (!response.ok) console.error(response)
  if (response.ok) return response.json()
}
