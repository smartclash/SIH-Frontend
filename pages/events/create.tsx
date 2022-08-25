import type {NextPage} from 'next'

const EventPage: NextPage = () => (
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
                                            <select>
                                                <option>Disaster</option>
                                                <option>Contest</option>
                                                <option>Fundraising</option>
                                            </select>
                                        </div>
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

export default EventPage
