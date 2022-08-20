import type {NextPage} from 'next'
import Tile from '@/components/Dashboard/Tile'
import TileInterface from '@/interfaces/TileInterface'
import UserLayout from '@/layouts/UserLayout'

const Tiles: TileInterface[] = [
    {
        heading: 'Events',
        primary: {
            link: '',
            text: 'Add Event',
        },
        secondary: {
            link: '',
            text: 'View Events',
        },
    },
    {
        heading: 'Volunteers',
        primary: {
            link: '',
            text: 'Add Volunteers',
        },
        secondary: {
            link: '',
            text: 'View Volunteers',
        },
    },
    {
        heading: 'Notifications',
        primary: {
            link: '',
            text: 'Add Notification',
        },
        secondary: {
            link: '',
            text: 'View Notifications',
        },
    },
    {
        heading: 'Blogs',
        primary: {
            link: '',
            text: 'Add Blog',
        },
        secondary: {
            link: '',
            text: 'View Blogs',
        },
    },
]

const Dashboard: NextPage = () => (
    <UserLayout>
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
    </UserLayout>
)

export default Dashboard
