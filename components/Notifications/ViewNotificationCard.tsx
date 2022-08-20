import {NextPage} from 'next'
import Link from 'next/link'
import NotificationInterface from '@/interfaces/NotificationInterface'

// Const date = new Date()
// const a = date.toUTCString()
const ViewNotificationCard: NextPage<NotificationInterface> = props => (
    <>
        <div className='card m-2'>
            <header className='card-header is-flex is-justify-content-space-between'>

                <p className='card-header-title is-size-5'>
                    { props.Title }
                </p>

                <p className='card-header-title is-flex is-justify-content-flex-end'>
                    @{ props.Author }
                </p>
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

export default ViewNotificationCard
