import {ReactNode} from 'react'

type Props = {
    children?: ReactNode;
}

const GuestLayout = (props: Props) => (
    <>
        {props.children}
    </>
)

export default GuestLayout
