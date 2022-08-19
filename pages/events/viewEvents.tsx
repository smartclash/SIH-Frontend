import type {NextPage} from 'next'

import EventViewCard from '@/components/Events/EventCard'
import ViewEventInterface from '@/interfaces/ViewEventInterface'

const ViewEents: ViewEventInterface[] = [
    {
        heading: 'Disaster Relief',
        subheading: 'Funding at your fingertips',
        description: 'Lets Fund for Disaster Relief . Please Contribute to help us in this cause',
        locations: 'chennai , India',
        link: '',
    },
    {
        heading: 'Flood at karapakkam',
        subheading: 'Flood in KCG college voluntary needed',
        description: 'Lets save PPL in this flood , please help us in this cause , we need your help',
        locations: 'karapakkam , India',
        link: '',
    },
    {
        heading: 'Contest for NCC',
        subheading: 'Best NCC institute in India',
        description: 'Find the best NCC institute in India , participate in this contest',
        locations: 'chennai , India',
        link: '',
    },
]

const EventViewPage: NextPage = () => (
    <section className='hero has-background-white-bis is-fullheight-with-navbar box'>
        <div className='hero-body'>
            <div className='container'>
                <div className='column is-half is-offset-3'>
                    <div className='mb-6'>
                        <p className='is-size-2'>Welcome, Kiridharan</p>
                    </div>

                    {ViewEents.map(event => (
                        <EventViewCard key={event.heading} {...event} />
                    ))}

                </div>
            </div>
        </div>
    </section>

)

export default EventViewPage
