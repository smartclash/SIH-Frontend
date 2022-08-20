import {NextPage} from 'next'
import InstitutionInterface from '@/interfaces/InstitutionInterface'

const AddForm: NextPage<InstitutionInterface> = props => (
    <>
        <div className='field'>
            <label className='label'>{ props.name}</label>
            <div className='control'>
                <input className='input' type='text' placeholder='Institution name'/>
            </div>
        </div>
        <div className='field'>
            <label className='label'>{ props.address}</label>
            <div className='control'>
                <textarea className='textarea' placeholder='Institution Address'></textarea>
            </div>
        </div>
        <div className='field'>
            <label className='label'>{ props.state}</label>
            <div className='control'>
                <input className='input' type='text' placeholder='State'/>
            </div>
        </div>
        <div className='field'>
            <label className='label'>{ props.city}</label>
            <div className='control'>
                <input className='input' type='text' placeholder='City'/>
            </div>
        </div>
        <div className='field'>
            <label className='label'>{props.zip}</label>
            <div className='control'>
                <input className='input' type='text' pattern='[0-9]*' placeholder='Zip Code'/>
            </div>
        </div>
        <div className='field'>
            <label className='label'>{props.website}</label>
            <div className='control'>
                <input className='input' type='text' placeholder='website Link'/>
            </div>
        </div>
        <div className='field'>
            <label className='label'>{props.email}</label>
            <div className='control'>
                <input className='input' type='email' placeholder='Email ID'/>
            </div>
        </div>
        <div className='field'>
            <label className='label'>{props.phone}</label>
            <div className='control'>
                <input className='input' type='tel' placeholder='Phone Number'/>
            </div>
        </div>
        {/* <button class="button is-success">Success</button> */}
        <div className='field is-grouped'>
            <div className='control'>
                <button className='button is-success'>Submit</button>
            </div>
            {/* <div className='control'>
                <button className='button is-link is-light'>Cancel</button>
            </div> */}
        </div>
    </>
)

export default AddForm
