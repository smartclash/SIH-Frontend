import type {NextPage} from 'next'
import Link from 'next/link'
import styles from '../../styles/Notifications.module.scss'
// Import ViewNotificationCard from '@/components/Notifications/ViewCard'
import NotificationInterface from '@/interfaces/Notifications/NotificationInterface'

const ViewNotificationCard: NextPage<NotificationInterface> = props => (
    <>
        <div className='card m-2'>
            <header className='card-header is-flex is-justify-content-space-between'>

                <p className='card-header-title is-size-5'>
                    { props.Title }
                </p>
                <Link href={''}>
                    <p className='card-header-title is-flex is-justify-content-flex-end'>
                        @{ props.Author }
                    </p>
                </Link>
            </header>

            <div className='card-content' style={{padding: '1rem'}}>
                <div className='content '>
                    {(props.Message)}
                    <br />
                </div>
            </div>

        </div>
        <div className='is-flex is-flex-direction-row-reverse mr-4'>
            <h1 className='is-size-7'>{props.TimeStamp} seconds ago</h1>
        </div>
    </>
)

const Viewnotification: NotificationInterface[] = [
    {
        Title: 'Ndrf Annualmeet',
        Level: 'L2',
        Message: 'Ndrf Annualmeet is a annual meet for the Ndrf',
        Author: 'John Doe-Ndrf',
        TimeStamp: 'Sat, 20 Aug 2022 12:53:27 GMT',
    },
    {
        Title: 'Ncc Food festival',
        Level: 'L3',
        Message: 'Ncc Food festival is happing in the ncc campus at guwahati',
        Author: 'Kcg collge of technology',
        TimeStamp: 'Sat, 20 Aug 2022 12:54:50 GMT',
    },
    {
        Title: 'Nss Flood Relief camp',
        Level: 'L3',
        Message: 'Nss Flood Relief camp is happing in the ncc campus at Mumbai',
        Author: 'PDEU collge',
        TimeStamp: 'Sat, 20 Aug 2022 12:55:07 GMT',
    },
    {
        Title: 'Nss Flood Relief camp',
        Level: 'L2',
        Message: 'Nss Flood Relief camp is happing in the ncc campus at Mumbai',
        Author: 'A D Patel Institute of Technology',
        TimeStamp: 'Sat, 20 Aug 2022 12:56:01 GMT',
    },
    {
        Title: 'Nss Flood Relief camp',
        Level: 'L3',
        Message: 'Nss Flood Relief camp is happing in the ncc campus at Mumbai',
        Author: 'Centurion University of Technology and Management',
        TimeStamp: 'Sat, 20 Aug 2022 12:58:11 GMT',
    },
    {
        Title: 'Nss Flood Relief camp',
        Level: 'L3',
        Message: 'Nss Flood Relief camp is happing in the ncc campus at Mumbai',
        Author: 'Amal Jyothi College of Engineering',
        TimeStamp: 'Sat, 20 Aug 2022 12:59:25 GMT',
    },
    {
        Title: 'Nss Flood Relief camp',
        Level: 'L2',
        Message: 'Nss Flood Relief camp is happing in the ncc campus at Mumbai',
        Author: 'B. S. Abdur Rahman Crescent Institute of Science & Technology',
        TimeStamp: 'Sat, 20 Aug 2022 13:15:27 GMT',
    },

]

const NotificationPageView: NextPage = () => (
    <section className='hero has-background-white-bis is-fullheight-with-navbar box'>
        <div className='hero-body'>
            <div className='container'>
                <div className={styles.mainbar}>
                    <div className='mb-6'>
                        <p className='is-size-2'>Recent Notifications</p>
                    </div>
                    <div className = {styles.search_filter_bar}>
                        <div className='level-item'>
                            <div className='field has-addons'>
                                <p className='control'>
                                    <input className='input' type='text' placeholder='Find a post' />
                                </p>
                                <p className='control'>
                                    <button className='button'>
                                        Search
                                    </button>
                                </p>
                            </div>
                        </div>

                        <div className='select mr-2'>
                            <select>
                                <option value=''>Filter</option>
                                <option value='All Notifications'>All Notifications</option>
                                <option value='NDRF Admins'>NDRF Admins</option>
                                <option value='Institutions'>Institutions</option>
                            </select>
                        </div>

                    </div>
                </div>
                <div className=''>
                    {
                    // To reverse the array because the notifications show the recent in the top
                    // But it show error when i refersh the page
                    // Viewnotification.reverse().map((notification, index) => (
                        Viewnotification.map(event => (
                            <ViewNotificationCard key={event.Title} {...event} />
                        ))
                    }
                </div>
            </div>
        </div>
    </section>

)

export default NotificationPageView
