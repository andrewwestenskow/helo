import {useState, useEffect} from 'react'
import axios from 'axios'

function useAxios(url, method = 'get', body = null, initialData = []) {
  const [data, setData] = useState(initialData)

  useEffect(() => {
    axios(url, {
      method,
      body
    }).then(res => setData(res.data))
    .catch(err => console.log(err))
  }, [body, method, url]);

  return data
}

export default useAxios