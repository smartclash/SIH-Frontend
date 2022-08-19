import type { NextPage } from 'next'
import Tile from '../../components/Tile';
import ITile from '../../types/TileTypes';

const Tiles: ITile[] = [
    {
        heading: 'Events',
        primary: {
            link: '',
            text: 'Add Event'
        },
        secondary: {
            link: '',
            text: 'View Events'
        }
    },
    {
        heading: 'Institutions',
        primary: {
            link: '',
            text: 'Add Institution'
        },
        secondary: {
            link: '',
            text: 'View Institutions'
        }
    },
    {
        heading: 'Notifications',
        primary: {
            link: '',
            text: 'Add Notification'
        },
        secondary: {
            link: '',
            text: 'View Notifications'
        }
    },
    {
        heading: 'Blogs',
        primary: {
            link: '',
            text: 'Add Blog'
        },
        secondary: {
            link: '',
            text: 'View Blogs'
        }
    }
]

const Dashboard: NextPage = () => {
    return (
        <section className="hero has-background-white-bis is-fullheight-with-navbar">
            <div className="hero-body">
                <div className="container">
                    <div className="column is-half is-offset-3">
                        <div className="mb-6">
                            <p className="is-size-2">Welcome, Kiridharan</p>
                        </div>

                        {Tiles.map((tile, index) => (
                            <Tile {...tile} key={index} />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Dashboard;
