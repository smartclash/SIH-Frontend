import {NextPage} from 'next'
import InstitutionInterface from '@/interfaces/InstitutionInterface'
import AddForm from '@/components/Forms/AddForm'

const Institution: InstitutionInterface[] = [
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
                <div className='mb-6'>
                    <p className='is-size-2 has-text-centered-desktop'><b>Add Institutions</b></p>
                </div>
                <div className='column is-half is-offset-3 box mb-6'>

                    {Institution.map((tile, index) => (
                        <AddForm {...tile} key={index} />
                    ))}
                </div>
            </div>
        </div>
    </section>
)

export default AddInstitutions
