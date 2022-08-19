import {NextPage} from 'next'

const AddEvents: NextPage = () => (
    <section className='section'>

        <div className='field'>
            <label className='label'>Title</label>
            <div className='control'>
                <input className='input' type='text' placeholder='Text input'/>
            </div>
        </div>

        <div className='field'>
            <label className='label'>Sub Heading</label>
            <div className='control'>{/* has-icons-left has-icons-right' */}
                <input className='input' type='text' placeholder='Sub heading' value=''/>
                <span className='icon is-small is-left'>
                    <i className='fas fa-user'></i>
                </span>
                <span className='icon is-small is-right'>
                    <i className='fas fa-check'></i>
                </span>
            </div>
        </div>

        <div className='field'>
            <label className='label'>Email</label>
            <div className='control'>{/* has-icons-left has-icons-right' */}
                <input className='input' type='email' placeholder='Email input' value=''/>
                <span className='icon is-small is-left'>
                    <i className='fas fa-envelope'></i>
                </span>
                <span className='icon is-small is-right'>
                    <i className='fas fa-exclamation-triangle'></i>
                </span>
            </div>
        </div>

        <div className='field'>
            <label className='label'>Subject</label>
            <div className='control'>
                <div className='select'>
                    <select>
                        <option>Disaster</option>
                        <option>Training</option>
                        <option>Events</option>
                    </select>
                </div>
            </div>
        </div>

        <div className='field'>
            <label className='label'>Message</label>
            <div className='control'>
                <textarea className='textarea' placeholder='Textarea'></textarea>
            </div>
        </div>

        <div className='field'>
            <div className='control'>
                <label className='checkbox'>
                    <input type='checkbox'/>
                    I agree to the
                    <a href='#'>terms and conditions</a>
                </label>
            </div>
        </div>

        <div className='field'>
            <div className='control'>
                <label className='radio'>
                    <input type='radio' name='question'/>
                    Yes
                </label>
                <label className='radio'>
                    <input type='radio' name='question'/>
                    No
                </label>
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
    </section>
)

export default AddEvents
