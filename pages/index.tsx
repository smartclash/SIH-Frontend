import type {NextPage} from 'next'
import Link from 'next/link'

const Home: NextPage = () => (
    <section className='hero is-fullheight-with-navbar'>
        <div className='hero-body'>
            <div>
                <p className='title'>
                    NDRF Connect
                </p>
                <p className='subtitle'>
                    Connect and engage, the modern way
                </p>
                <Link href='/login'>
                    <button className='button is-primary is-outlined'>
                        Login
                        <span className='ml-2'>&#10230;</span>
                    </button>
                </Link>
            </div>
        </div>
    </section>
)

export default Home
