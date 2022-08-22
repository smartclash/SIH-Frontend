import type {NextPage} from 'next'

import Create from '@/components/Notifications/CreateNotifications'

const NotificationsPage: NextPage = () => (
    <section className='hero has-background-white-bis is-fullheight-with-navbar'>
        <div className='hero-body'>
            <div className='container'>
                <div className='columns'>
                    <div className='column is-half is-offset-3'>
                        <div className='card'>
                            <div className='card-header'>
                                <p className='card-header-title'>Create Notifications</p>
                            </div>
                            <Create />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
)

export default NotificationsPage
