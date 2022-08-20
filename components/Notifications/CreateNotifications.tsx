import {NextPage} from 'next'

const CreateNotifications: NextPage = () => (
    <>
        <h2 className='subtitle'>Title</h2>
        <input className='input is-link mb-5' type='text' placeholder='This will be your blog title' />
        <div className='field'>
            <h3 className='subtitle'>Main Content</h3>
            <div className='control'>
                <textarea className='textarea' placeholder='Blog your thought' style={{minHeight: '20em'}}></textarea>
            </div>
        </div>

        <div className='field is-grouped'>
            <div className='control'>
                <button className='button is-link'>Submit</button>
            </div>
            <div className='control'>
                <button className='button is-link is-light'>Cancel</button>
            </div>
        </div>
    </>
)

export default CreateNotifications
