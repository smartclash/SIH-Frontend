import type {GetServerSideProps, NextPage} from 'next'
import Tile from '@/components/Dashboard/Tile'
import TileInterface from '@/interfaces/TileInterface'
import auth from '@/lib/auth'
import UserInterface from '@/interfaces/UserInterface'

const Tiles: TileInterface[] = [
    {
        heading: 'Events',
        primary: {
            link: '/events/view',
            text: 'View Events',
        },
    },
    {
        heading: 'Notifications',
        primary: {
            link: '/notifications/view',
            text: 'View Notifications',
        },
    },
    {
        heading: 'Blogs',
        primary: {
            link: '/blogs/create',
            text: 'Create Blog',
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

const Dashboard: NextPage<Props> = props => (
    <section className='hero has-background-white-bis is-fullheight-with-navbar'>
        <div className='hero-body'>
            <div className='container'>
                <div className='column is-half is-offset-3'>
                    <div className='mb-6'>
                        <p className='is-size-2'>Welcome, {props.user.name}</p>
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
