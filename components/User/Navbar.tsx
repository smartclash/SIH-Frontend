import type {NextPage} from 'next'
import Link from 'next/link'

const Navbar: NextPage = () => (
    <nav className='navbar'>
        <div className='container'>
            <div className='navbar-brand'>
                <a href='#' className='navbar-item is-size-4'>SIH App</a>
            </div>
            <div className='navbar-menu'>
                <div className='navbar-end'>
                    <Link href='/admin/dashboard'>
                        <a className='navbar-item'>Dashboard</a>
                    </Link>
                    <Link href='/events/view'>
                        <a className='navbar-item'>Events</a>
                    </Link>
                    <Link href='/blogs/view'>
                        <a className='navbar-item'>Blogs</a>
                    </Link>
                    <Link href='/notifications/view'>
                        <a className='navbar-item'>Notifications</a>
                    </Link>
                    <div className='navbar-item'>
                        <Link href='/login'>
                            <a className='button is-danger is-outlined'>Logout</a>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    </nav>
)

export default Navbar
