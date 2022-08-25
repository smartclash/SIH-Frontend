import {GetServerSideProps} from 'next'
import axios from '@/lib/axios'
import UserInterface from '@/interfaces/UserInterface'

const auth: GetServerSideProps = async context => {
    try {
        const {data: user} = await axios.get<UserInterface>('api/user', {
            headers: {
                cookie: context.req.cookies as unknown as string,
            },
        })

        return {props: {user}}
    } catch {
        context.res.setHeader('Location', '/login')
        context.res.statusCode = 302

        return {props: {user: null}}
    }
}

export default auth
