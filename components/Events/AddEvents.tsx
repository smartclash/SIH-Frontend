import {NextPage} from 'next'

const AddEvents: NextPage = () => (
    <>
        <div className='field'>
            <label className='label'>Title</label>
            <div className='control'>
                <input className='input' type='text' placeholder='Text input'/>
            </div>
        </div>

        <div className='field'>
            <label className='label'>Sub Heading</label>
            <div className='control'>{/* has-icons-left has-icons-right' */}
                <input className='input' type='text' placeholder='Sub heading'/>
            </div>
        </div>

        <div className='field'>
            <label className='label'>Locations</label>
            <div className='control'>{/* has-icons-left has-icons-right' */}
                {/* Here We need to add Icon */}
                <input className='input' type='text' placeholder='Locations' ></input>
            </div>
        </div>

        <div className='field'>
            <label className='label'>Type</label>
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

        {/* <div className='field'>
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
        </div> */}

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

export default AddEvents
