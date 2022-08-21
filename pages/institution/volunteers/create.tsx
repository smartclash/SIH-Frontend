import {NextPage} from 'next'
import AddForm from '@/components/Forms/AddForm'
import FormInterface from '@/interfaces/FormInterface'

const Volunteers: FormInterface[] = [
    {
        name: 'Volunteers Name',
        address: 'Address Of Volunteers',
        city: 'City',
        state: 'State of Volunteers',
        zip: 'Zip of Volunteers',
        phone: 'Phone Number',
        email: 'Email',
        website: 'Website Volunteers',
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
                                <p className='card-header-title'>Create Event</p>
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
