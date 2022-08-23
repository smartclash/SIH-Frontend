import {NextPage} from 'next'
import FormVolunteer from '@/interfaces/volunteer/Form'

const AddForm: NextPage<FormVolunteer> = props => (
    <>
        <div className='field'>
            <label className='label'>{ props.name}</label>
            <div className='control'>
                <input className='input' type='text' placeholder='Institution name'/>
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
        <div className='field'>
            <label className='label'>{props.password}</label>
            <div className='control'>
                <input className='input' type='password' placeholder='Password'/>
            </div>
        </div>

        <div className='field is-grouped'>
            <div className='control'>
                <button className='button is-primary'>Submit</button>
            </div>
        </div>
    </>
)

const Volunteers: FormVolunteer[] = [
    {
        name: 'Volunteers Name',
        phone: 'Phone Number',
        email: 'Email',
        password: 'Password',
    },
]

const AddVolunteers: NextPage = () => (
    <section className='hero has-background-white-bis is-fullheight-with-navbar'>
        <div className='hero-body '>

            <div className='container'>
                <div className='columns'>
                    <div className='column is-half is-offset-3'>
                        <div className='card'>
                            <div className='card-header'>
                                <p className='card-header-title'>Create Volunteers</p>
                            </div>
                            <div className='card-content'>
                                {Volunteers.map((tile, index) => (
                                    <AddForm {...tile} key={index} />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
)

export default AddVolunteers
