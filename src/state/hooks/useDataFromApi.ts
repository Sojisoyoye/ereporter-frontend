import { useEffect, useState } from 'react'

import api from '../../api/api';

const useDataFromApi = (path: string) => {
  const [data, setData] = useState([])

  useEffect(
    () => {
      const request = async () => {
        try {
          const response = await api.get(`/${path}`)

          setData(response.data.data)
        } catch (err) {
          console.log(err.message)
        }

      }

      request()
    },
    [path]
  )

  return {
    data
  }
}

export default useDataFromApi