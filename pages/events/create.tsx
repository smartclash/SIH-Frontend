import type {NextPage} from 'next'
import AddEvents from '@/components/Events/AddEvents'
import UserLayout from '@/layouts/UserLayout'

const EventPage: NextPage = () => (
    <UserLayout>
        <section className='hero has-background-white-bis is-fullheight-with-navbar'>
            <div className='hero-body'>
                <div className='container box'>
                    <div className='mb-6'>
                        <p className='is-size-2'>Welcome, Admin</p>
                    </div>
                    <AddEvents />
                </div>
            </div>
        </section>
    </UserLayout>
)

export default EventPage
