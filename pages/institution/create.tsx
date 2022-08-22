import {NextPage} from 'next'
import FormInstitutite from '@/interfaces/Institution/Form'

const AddForm: NextPage<FormInstitutite> = props => (
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
                <input className='input' type='text' placeholder='Search Insitution'/>
            </div>
        </div>
        <div className='field'>
            <label className='label'>{props.website}</label>
            <div className='control'>
                <input className='input' type='text' placeholder='website Link'/>
            </div>
        </div>
        <div className='field is-grouped'>
            <div className='control'>
                <button className='button is-primary'>Submit</button>
            </div>
        </div>
    </>
)

const Institution: FormInstitutite[] = [
    {
        name: 'Institution Name',
        address: 'Address Of Institution',
        website: 'Website Institution',
    },
]

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
                                {Institution.map((tile, index) => (
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

export default AddInstitutions
