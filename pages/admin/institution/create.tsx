import {NextPage} from 'next'
import AddForm from '@/components/Forms/AddForm'
import FormInterface from '@/interfaces/FormInterface'

const Institution: FormInterface[] = [
    {
        name: 'Institution Name',
        address: 'Address Of Institution',
        city: 'City',
        state: 'State of Institution',
        zip: 'Zip of Institution',
        phone: 'Phone Number',
        email: 'Email',
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
