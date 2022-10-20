import axios from 'axios'

const getPlanes = async () => {
   const planes = await axios.get('/api/planes') //http://localhost:8000/api/planes(GET)
   return planes.data
}

const getPlane = async id => {
   const planes = await axios.get(`/api/planes/${id}`) //http://localhost:8000/api/plane/634a9b8ca9ccb31fb56c0fc3(GET)
   return planes.data
}

export const planesService = {
   getPlanes,
   getPlane,
}
