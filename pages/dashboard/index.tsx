import type { NextPage } from 'next'
import TileCustom from '../../components/tileCustom';
const Dashboard: NextPage = () => {
    return (

            

<section className="hero has-background-white-bis is-fullheight-with-navbar">
    <div className="hero-body">
        <div className="container">
            <div className="column is-half is-offset-3">
                <div className="mb-6">
                    <p className="is-size-2">Welcome, Kiridharan</p>
                </div>
                <TileCustom heading="Events" button1="Add Events" button2="View Events" />
                <TileCustom heading="Notifications" button1="Add Notifications" button2="View Notifications" />
                <TileCustom heading="Institutions" button1="Add Institutions" button2="View Institutions" />
                <TileCustom heading="Blog" button1="Add Blog" button2="View Blog" />
                <TileCustom heading="Timeline" button1="Add Timeline" button2="View Timeline" />
               
            </div>
        </div>
    </div>
</section>
 
    );
}


export default Dashboard;