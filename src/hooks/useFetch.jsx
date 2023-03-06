import { useEffect, useState } from 'react'

export function useFetch(url) {
  const [data, setData] = useState()

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await fetch(url)
        const json = await res.json()
        return json
      } catch (error) {
        console.log(error)
      }
    }
    fetchData().then(json => setData(json))
  }, [url])

  return data
}
