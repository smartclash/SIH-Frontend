import axios from 'axios'

const axiosInstance = axios.create({
    headers: {
        'X-Requested-With': 'XMLHttpRequest',
    },
    withCredentials: true,
})

export default axiosInstance
