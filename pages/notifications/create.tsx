import type {NextPage} from 'next'

import Create from '@/components/Notifications/CreateNotifications'

const NotificationsPage: NextPage = () => (
    <section className='hero has-background-white-bis is-fullheight-with-navbar'>
        <div className='hero-body'>
            <div className='container box'>
                <div className='mb-6'>
                    <p className='title is-1'>Create Notifications</p>
                </div>
                <Create />
            </div>
        </div>
    </section>
)

export default NotificationsPage
