import type {NextPage} from 'next'
import Image from 'next/image'
import Script from 'next/script'
import Head from 'next/head'
import NDRFLogo from '../assets/National_Disaster_Response_Force_Logo.png'
import NDRFLogo_small from '../assets/NDRF-Academy-scaled.jpg'
import styles from '../styles/Login.module.scss'

const Login: NextPage = () => (
    <>
        <Head>
            <link
                rel='stylesheet'
                href='https://fonts.googleapis.com/css2?family=Barlow:ital,wght@0,700;1,700&family=Poppins:wght@100;200;300;400;500&display=swap'
            />
        </Head>
        <Script
            src='https://www.google-analytics.com/analytics.js'
            strategy='beforeInteractive'
        />
        <Script src='https://code.iconify.design/2/2.2.1/iconify.min.js' />
        <section className='is-fullheight'>
            <div className='hero-head'>
                <header className='navbar m-4 is-fullwidth'>
                    <div className='container'>
                        <div className='navbar-brand'>
                            <a className='navbar-item'>
                                <Image
                                    src={NDRFLogo_small}
                                    height='900px'
                                    width='800px'
                                    alt='National Disaster Response Force Logo'
                                />
                            </a>
                            <span className='navbar-burger' data-target='navbarMenuHeroC'>
                                <span></span>
                                <span></span>
                                <span></span>
                            </span>
                        </div>

                        <div id='navbarMenuHeroC' className='navbar-menu'>
                            <div className='navbar-end'>
                                <a className='navbar-item '>
                                    <span
                                        className='iconify'
                                        data-icon='ant-design:global-outlined'
                                    ></span>
                                </a>
                                <a className='navbar-item'>|</a>
                                <a
                                    className='navbar-item has-text-grey-dark has-text-weight-medium'
                                    style={{fontFamily: 'poppins'}}
                                >
                                    Support
                                </a>
                            </div>
                        </div>
                    </div>
                </header>
            </div>

            <div className={styles.body_container}>
                <nav className={styles.Main_logo_container}>
                    <div className='hero-body column'>
                        <div
                            className='container has-text-centered is-justify-content-space-around '
                            // Style={{ height: "700px" }}
                        >
                            <div className=''>
                                <Image
                                    src={NDRFLogo}
                                    width='500rem'
                                    height='500rem'
                                    alt='National Disaster Response Force Logo'
                                />
                            </div>
                        </div>
                    </div>
                </nav>
                <nav className='styles.Login_box'>
                    <div className='card' style={{borderRadius: '1.25rem'}}>
                        <div className='card-content m-4 pb-6'>
                            <div className='field m-4'>
                                <label className='label has-text-left is-size-2'>Login</label>
                            </div>
                            <div className='field m-4'>
                                <label className='label has-text-left has-text-grey has-text-weight-normal'>
                                    Don’t have an account{' '}
                                    <a style={{color: '#FA541C'}}>Get started</a>
                                </label>
                            </div>

                            <div className='field m-4'>
                                <label className='label has-text-left'>Email</label>
                                <div className='control'>
                                    <input
                                        className='input is-medium'
                                        type='text'
                                        placeholder='e.g alexsmith@gmail.com'
                                    />
                                </div>
                            </div>

                            <div className='field m-4'>
                                <label className='label has-text-left'>Password</label>
                                <div className='control'>
                                    <input
                                        className='input is-medium'
                                        type='email'
                                        placeholder='e.g. alex123'
                                    />
                                </div>
                            </div>

                            <div
                                className='field m-4'
                                style={{
                                    fontFamily: 'Poppins',
                                    fontWeight: '500',
                                    textDecoration: 'underline',
                                }}
                            >
                                <label className='label has-text-right has-text-weight-light is-size-7'>
                                    Forget password?
                                </label>
                            </div>

                            <div className='field m-4'>
                                <div className='control'>
                                    <button
                                        className='button is-fullwidth'
                                        style={{
                                            fontFamily: 'Poppins',
                                            background: '#FA541C',
                                            color: 'white',
                                            fontWeight: 'bold',
                                        }}
                                    >
                                        Login
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </nav>
            </div>

            <div className='hero-foot'>
                <div className='container is-centered'>
                    <div className='tabs is-centered m-6'>

                        <ul>
                            <li>
                            </li>
                            <li>© 2022. All rights reserved</li>
                        </ul>

                    </div>
                </div>
            </div>
        </section>
    </>
)

export default Login
