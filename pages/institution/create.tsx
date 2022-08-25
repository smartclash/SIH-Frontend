import {NextPage} from 'next'


const AddInstitutions: NextPage = () => (
    <section className='hero has-background-white-bis is-fullheight-with-navbar'>
        <div className='hero-body '>

            <div className='container'>
                <div className='columns'>
                    <div className='column is-half is-offset-3'>
                        <div className='card'>
                            <div className='card-header'>
                                <p className='card-header-title'>Create Institutions</p>
                            </div>
                            <div className='card-content'>
                                <div className='field'>
                                    <label className='label'>Institution Name</label>
                                    <div className='control'>
                                        <input className='input' type='text' placeholder='Institution name'/>
                                    </div>
                                </div>
                                <div className='field'>
                                    <label className='label'>Address</label>
                                    <div className='control'>
                                        <input className='input' type='text' placeholder='Search Insitution'/>
                                    </div>
                                </div>
                                <div className='field'>
                                    <label className='label'>Website</label>
                                    <div className='control'>
                                        <input className='input' type='text' placeholder='website Link'/>
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

export default AddInstitutions
