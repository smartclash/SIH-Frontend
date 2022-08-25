import type {NextPage} from 'next'
import timelineinterface from '@/interfaces/timeline/TimelineInterface'
import ViewEventInterface from '@/interfaces/events/ViewEventInterface'

const ViewEents: ViewEventInterface[] = [
    {
        heading: 'Disaster Relief',
        subheading: 'Funding at your fingertips',
        description: 'npm, Inc. is a company founded in 2014, and was acquired by GitHub in 2020. npm is a critical part of the JavaScript community and helps support one of the largest developer ecosystems in the world. npm is lots of things. npm is the package manager for Node.js. It was created in 2009 as an open source project to help JavaScript developers easily share packaged modules of code.',
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

const TimeLine: timelineinterface[] = [
    {title: 'Disaster Relief', message: 'Funding at your fingertips', date: '2020-01-01'},
    {title: 'Flood at karapakkam', message: 'Flood in KCG college voluntary needed', date: '2020-01-01'},
    {title: 'Contest for NCC', message: 'Best NCC institute in India', date: '2020-01-01'},

]
const timelineViewCard: NextPage<timelineinterface> = props => (
    <>
        <div className='card mb-6'>
            <div className='card-content'>
                <div className='content'>
                    <p>
                        title : { ViewEents[0].subheading}
                    </p>
                    <p>
                        message : { ViewEents[0].description}
                    </p>
                    <p>
                        Start At: { ViewEents[0].description}
                    </p>
                </div>
            </div>
        </div>

    </>
)

const EventViewPage: NextPage = () => (
    <section className='hero has-background-white-bis is-fullheight-with-navbar'>
        <div className='hero-body'>
            <div className='container'>
                <div className='column is-half is-offset-3'>
                    <div className='mb-6'>
                        <p className='is-size-2'>Events Details</p>
                    </div>

                    <div className='card mb-6'>
                        <header className='card-header'>
                            <p className='card-header-title'>
                                { ViewEents[0].heading}
                            </p>
                            <button className='card-header-icon' aria-label='more options'>
                                <span className='icon'>
                                    <i className='fas fa-angle-down' aria-hidden='true'></i>
                                </span>
                            </button>
                        </header>
                        <div className='card-content'>
                            <div className='content'>
                                <p>
                                    subheading : { ViewEents[0].subheading}
                                </p>
                                <p>
                                    description : { ViewEents[0].description}
                                </p>
                            </div>
                        </div>

                    </div>
                    <div className='mb-6'>
                        <p className='is-size-2'>TimeLine</p>
                    </div>

                    {ViewEents.map(event => (
                        <timelineViewCard key={event.heading} {...event} />
                    ))}

                </div>
            </div>
        </div>
    </section>
)

export default EventViewPage
