import type {NextPage} from 'next'
import Tile from '@/components/Dashboard/Tile'
import TileInterface from '@/interfaces/TileInterface'

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
        heading: 'Volunteers',
        primary: {
            link: '/volunteers/create',
            text: 'Add Volunteers',
        },
        secondary: {
            link: '/volunteers/view',
            text: 'View Volunteers',
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

const Dashboard: NextPage = () => (
    <section className='hero has-background-white-bis is-fullheight-with-navbar'>
        <div className='hero-body'>
            <div className='container'>
                <div className='column is-half is-offset-3'>
                    <div className='mb-6'>
                        <p className='is-size-2'>Welcome, Kiridharan</p>
                    </div>

                    {Tiles.map((tile, index) => (
                        <Tile {...tile} key={index} />
                    ))}
                </div>
            </div>
        </div>
    </section>
)

export default Dashboard
