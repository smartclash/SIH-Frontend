import axios from 'axios'

const axiosInstance = axios.create({
    // eslint-disable-next-line @typescript-eslint/naming-convention
    baseURL: 'http://localhost:8000/api/',
    headers: {
        'X-Requested-With': 'XMLHttpRequest',
    },
    withCredentials: true,
})

export default axiosInstance
