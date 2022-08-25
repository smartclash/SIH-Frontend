import {NextPage} from 'next'
import Link from 'next/link'
import ViewEventInterface from '@/interfaces/events/ViewEventInterface'

const EventViewCard: NextPage<ViewEventInterface> = props => (
    <>
        <div className='card mb-6'>
            <header className='card-header'>
                <p className='card-header-title'>
                    { props.heading}
                </p>
                <button className='card-header-icon' aria-label='more options'>
                    <span className='icon'>
                        <i className='fas fa-angle-down' aria-hidden='true'></i>
                    </span>
                </button>
            </header>
            <div className='card-content'>
                <div className='content'>
                    { props.subheading}
                    <br />
                </div>
            </div>
            <footer className='card-footer'>
                <Link href={props.link}>
                    <a href='#' className='card-footer-item'>Location</a>
                </Link>
            </footer>
        </div>
    </>
)

export default EventViewCard
