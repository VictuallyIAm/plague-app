import { collection, onSnapshot, orderBy, query } from 'firebase/firestore'
import { useEffect, useState } from 'react'
import { db } from '../../firebase.config'

const useCollection = (collectionName) => {
  const [data, setData] = useState([])

  const getCollection = () => {
    try {
      const docRef = collection(db, collectionName)
      const q = query(docRef, orderBy('createdAt'))
      onSnapshot(q, (snapshot) => {
        const allData = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }))

        setData(allData)
      })
    } catch (error) {
      console.log('12')
    }
  }

  useEffect(() => {
    getCollection()
  }, [])

  return { data }
}

export default useCollection
