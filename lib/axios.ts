import axiosInstance from 'axios'

const axios = axiosInstance.create({
    baseURL: 'http://localhost:8000/api/',
    headers: {
        'X-Requested-With': 'XMLHttpRequest',
    },
    withCredentials: true,
})

export default axios
