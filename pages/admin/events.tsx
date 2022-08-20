import type {NextPage} from 'next'
import AddEvents from '@/components/Events/AddEvents'
import UserLayout from '@/layouts/UserLayout'

const EventPage: NextPage = () => (
    <UserLayout>
        <AddEvents />
    </UserLayout>
)

export default EventPage
