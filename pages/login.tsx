import type {NextPage} from 'next'
import Image from 'next/image'
import NDRFLogo from '../assets/National_Disaster_Response_Force_Logo.png'
import styles from '../styles/Login.module.scss'

const Login: NextPage = () => (
    <section className='section is-fullheight-with-navbar'>
        <div className={styles.body_container}>
            <div className={styles.Main_logo_container}>
                <div className='hero-body column'>
                    <div className='container has-text-centered is-justify-content-space-around'>
                        <Image src={NDRFLogo} alt='National Disaster Response Force Logo' />
                    </div>
                </div>
            </div>
            <div className={styles.Login_box + ' card'}>
                <div className='card-content pb-6'>
                    <div className='mt-5 ml-4 mr-4'>
                        <p className='is-size-2 pb-4'>Login</p>

                        <div className='field'>
                            <label className='label'>Phone</label>
                            <div className='control'>
                                <input className='input is-medium' type='tel' placeholder='e.g alexsmith@gmail.com' />
                            </div>
                        </div>

                        <div className='field'>
                            <label className='label'>Password</label>
                            <div className='control'>
                                <input className='input is-medium' type='password' />
                            </div>
                        </div>

                        <div className='field'>
                            <div className='control'>
                                <button className='button is-fullwidth has-text-weight-bold is-primary is-outlined'>
                                    Login
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
)

export default Login
