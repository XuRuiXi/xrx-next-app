'use client'

import { useState, useEffect } from "react";
import { useRouter } from 'next/navigation'
import dynamic from 'next/dynamic'

const mockData = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        title: 'Info',
        description: 'This is a info page'
      })
    }, 2000)
  })
}

const Info = () => {
  const [data, setData] = useState(null)
  const router = useRouter()

  const AsyncName = dynamic(() => import('./AsyncName'))

  useEffect(() => {
    mockData().then(data => setData(data))
  }, [])

  const back = () => {
    router.push('/')
  }

  return (
    <div>
      <h1>{data?.title}</h1>
      <AsyncName />
      <button onClick={back}>Back</button>
    </div>
  );
}

export default Info;