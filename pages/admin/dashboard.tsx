import type {NextPage} from 'next'
import {GetServerSideProps} from 'next'
import Tile from '@/components/Dashboard/Tile'
import TileInterface from '@/interfaces/TileInterface'
import auth from '@/lib/auth'
import UserInterface from '@/interfaces/UserInterface'

const Tiles: TileInterface[] = [
    {
        heading: 'Events',
        primary: {
            link: '/events/create',
            text: 'Add Event',
        },
        secondary: {
            link: '/events/view',
            text: 'View Events',
        },
    },
    {
        heading: 'Institutions',
        primary: {
            link: '/institutions/create',
            text: 'Add Institution',
        },
        secondary: {
            link: '/institutions/view',
            text: 'View Institutions',
        },
    },
    {
        heading: 'Notifications',
        primary: {
            link: '/notifications/create',
            text: 'Add Notification',
        },
        secondary: {
            link: '/notifications/view',
            text: 'View Notifications',
        },
    },
    {
        heading: 'Blogs',
        primary: {
            link: '/blogs/create',
            text: 'Add Blog',
        },
        secondary: {
            link: '/blogs/view',
            text: 'View Blogs',
        },
    },
]

interface Props {
    user: UserInterface;
}

const Dashboard: NextPage<Props> = ({user}) => (
    <section className='hero has-background-white-bis is-fullheight-with-navbar'>
        <div className='hero-body'>
            <div className='container'>
                <div className='column is-half is-offset-3'>
                    <div className='mb-6'>
                        <p className='is-size-2'>Welcome, {user.name}</p>
                    </div>
                    {Tiles.map((tile, index) => (
                        <Tile {...tile} key={index} />
                    ))}
                </div>
            </div>
        </div>
    </section>
)

export const getServerSideProps: GetServerSideProps = auth

export default Dashboard
