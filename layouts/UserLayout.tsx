import {ReactNode} from 'react'
import Navbar from '@/components/User/Navbar'
import Footer from '@/components/User/Footer'

type Props = {
    children?: ReactNode;
}

const UserLayout = (props: Props) => (
    <>
        <Navbar />
        {props.children}
        <Footer />
    </>
)

export default UserLayout
