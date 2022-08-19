import type {NextPage} from 'next'

const Navbar: NextPage = () => (
    <nav className='navbar'>
        <div className='container'>
            <div className='navbar-brand'>
                <a href='#' className='navbar-item is-size-4'>SIH App</a>
            </div>
            <div className='navbar-menu'>
                <div className='navbar-end'>
                    <a href='#' className='navbar-item'>Dashboard</a>
                    <a href='#' className='navbar-item'>Events</a>
                    <div className='navbar-item'>
                        <a className='button is-danger is-outlined'>Logout</a>
                    </div>
                </div>
            </div>
        </div>
    </nav>
)

export default Navbar
