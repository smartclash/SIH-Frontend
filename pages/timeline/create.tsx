import {NextPage} from 'next'
import TimeLineCard from '@/components/Timeline/TimelineCard'
import TimelineInterface from '@/interfaces/timeline/TimelineInterface'

const Timeline: TimelineInterface[] = [
    {
        title: 'Starting',
        message: 'Innogrations',
        start: '11:00 am',
    },
]

const TimeLineCreate: NextPage<TimelineInterface> = props => (
    <>
        <section className='hero has-background-white-bis is-fullheight-with-navbar'>
            <div className='hero-body '>
                <div className='container'>
                    <div className='columns'>
                        <div className='column is-half is-offset-3'>
                            <div className='card'>
                                <div className='card-header'>
                                    <p className='card-header-title'>Create TimeLine</p>
                                </div>
                                <div className='card-content'>
                                    {Timeline.map((tile, index) => (
                                        <TimeLineCard {...tile} key={index} />
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>
)

export default TimeLineCreate
