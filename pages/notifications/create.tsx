import type {GetServerSideProps, NextPage} from 'next'
import {useState} from 'react'
import UserInterface from '@/interfaces/UserInterface'
import auth from '@/lib/auth'

const Create = () => {
    const [L1Selected, setL1Selected] = useState(true)
    // Use this to send the date and time to show how long the nofication will be active
    const date = new Date()
    const a = date.toUTCString()

    return (
        <>
            <div className='card-content'>
                <form action=''>
                    <div className='field'>
                        <label htmlFor='title' className='label'>Title</label>
                        <div className='control'>
                            <input type='text' className='input' id='title' />
                        </div>
                    </div>
                    <div className='field'>
                        <div className='field mb-5'>
                            <label className='label'>Notification Spread Level</label>
                            <div className='control'>
                                <div className='select is-fullwidth'>
                                    <select onChange={event => {
                                        console.log(event.target.value)
                                        if (event.target.value === 'L1') {
                                            setL1Selected(false)
                                            console.log(L1Selected)
                                        } else {
                                            setL1Selected(true)
                                        }
                                    }}>
                                        <option value='L3'>L3 - Just sends notification</option>
                                        <option value='L2'>L2 - Sends email and SMS</option>
                                        <option value='L1'>L1 - Makes a voicecall and plays the message</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        {
                            (L1Selected) ? (
                                <></>
                            ) : (
                                <div className='field mb-5'>
                                    <label className='label has-text-danger'>⚠️ This notification make a emergency call to everyone ⚠️</label>
                                </div>
                            )
                        }
                    </div>
                    <div className='field'>
                        <label className='label'>Message</label>
                        <div className='control'>
                            <textarea className='textarea' placeholder='Express your thought' rows={10}></textarea>
                        </div>
                    </div>
                    <div className='field'>
                        <div className='control'>
                            <input type='submit' value='Submit' className='button is-primary is-outlined is-fullwidth' />
                        </div>
                    </div>
                </form>
            </div>
        </>
    )
}

interface Props {
    user: UserInterface;
}

const NotificationsPage: NextPage<Props> = props => (
    <section className='hero has-background-white-bis is-fullheight-with-navbar'>
        <div className='hero-body'>
            <div className='container'>
                <div className='columns'>
                    <div className='column is-half is-offset-3'>
                        <div className='card'>
                            <div className='card-header'>
                                <p className='card-header-title'>Create Notifications</p>
                            </div>
                            <Create />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
)

export const getServerSideProps: GetServerSideProps = auth

export default NotificationsPage
