import type {GetServerSideProps, NextPage} from 'next'
import {useState} from 'react'
import UserInterface from '@/interfaces/UserInterface'
import auth from '@/lib/auth'

interface Props {
    user: UserInterface;
}

const EventPage: NextPage<Props> = props => {
    const [isfundrising, setisfundrising] = useState(false)
    return (
        <section className='hero has-background-white-bis is-fullheight-with-navbar'>
            <div className='hero-body'>
                <div className='container'>
                    <div className='columns'>
                        <div className='column is-half is-offset-3'>
                            <div className='card'>
                                <div className='card-header'>
                                    <p className='card-header-title'>Create Event</p>
                                </div>
                                <div className='card-content'>
                                    <div className='field'>
                                        <label className='label'>Title</label>
                                        <div className='control'>
                                            <input className='input' type='text' />
                                        </div>
                                    </div>

                                    <div className='field'>
                                        <label className='label'>Sub Title</label>
                                        <div className='control'>
                                            <input className='input' type='text' />
                                        </div>
                                    </div>

                                    <div className='field'>
                                        <label className='label'>Location</label>
                                        <div className='control'>
                                            <input className='input' type='text' />
                                        </div>
                                    </div>

                                    <div className='field'>
                                        <label className='label'>Type</label>
                                        <div className='control is-expanded'>
                                            <div className='select is-fullwidth'>
                                                <select onChange={event => {
                                                    if (event.target.value === 'Fundrising') {
                                                        console.log('fundrising')
                                                        setisfundrising(true)
                                                    } else {
                                                        setisfundrising(false)
                                                    }
                                                }}>
                                                    <option >Disaster</option>
                                                    <option >Contest</option>
                                                    <option value = 'Fundrising'>Fundraising</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                    {
                                        (isfundrising) ? (

                                            <div className='field'>
                                                <label className='label'>Target Amount</label>
                                                <div className='control'>
                                                    <input className='input' type='text' />
                                                </div>
                                            </div>
                                        ) : (
                                            <></>
                                        )
                                    }
                                    <div className='field'>
                                        <label className='label'>Start Time</label>
                                        <div className='control'>
                                            <input className='input' type='time' />
                                        </div>
                                    </div>
                                    <div className='field'>
                                        <label className='label'>End Time</label>
                                        <div className='control'>
                                            <input className='input' type='time' />
                                        </div>
                                    </div>
                                    <div className='field'>
                                        <label className='label'>Message</label>
                                        <div className='control'>
                                            <textarea className='textarea'></textarea>
                                        </div>
                                    </div>
                                    <div className='field'>
                                        <div className='control'>
                                            <input type='submit' value='Submit' className='button is-primary is-outlined is-fullwidth' />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export const getServerSideProps: GetServerSideProps = auth

export default EventPage
