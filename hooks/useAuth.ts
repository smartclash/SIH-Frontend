/* eslint-disable @typescript-eslint/no-unsafe-return */

import useSWR from 'swr'
import {useRouter} from 'next/router'
import axios from '@/lib/axios'

const useAuth = () => {
    const router = useRouter()
    const {data: user, error, mutate} = useSWR('user', async () => axios
        .get('')
        .then(response => response.data)
        .catch(async error_ => router.push('/')),
    )

    const csrf = async () => axios.get('sanctum/csrf-cookie')

    const login = async (setErrors: CallableFunction, phone: number, password: string) => {
        await csrf()

        return axios
            .post('login', {
                phone, password,
            })
            .then(async () => mutate())
            .catch(error_ => setErrors(error_))
    }

    const logout = async () => {
        if (!error) {
            await axios.post('logout').then(async () => mutate())
            return router.push('/')
        }

        return router.push('/login')
    }

    return {
        user,
        csrf,
        login,
        logout,
    }
}

export default useAuth
