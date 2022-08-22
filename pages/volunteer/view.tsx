import {NextPage} from 'next'
import Link from 'next/link'
import FormVolunteer from '@/interfaces/volunteer/Form'

const ViewCard: NextPage<FormVolunteer> = props => (
    <>
        <div className='card mb-6 column'>
            <div className='column'>
                <p className='is-bold'>Volunteer Name: <b>{ props.name}</b></p>
            </div>
            <div className='column'>
                <p className='is-bold'>Volunteer email: <b>{ props.email}</b></p>
            </div>
            <div className='column'>
                <p className='is-bold'>Phone Number:+91 <b>{ props.phone}</b></p>
            </div>
        </div>
    </>
)

const InstitutionView: FormVolunteer[] = [
    {
        name: 'Kcg College Of Technology',
        phone: '9941090444',
        email: 'kcgcollege@kcgcollege.com',
        password: 'ffsf',
    },
    {
        name: 'Kcg College Of Technology',
        phone: '9941090444',
        email: 'kcgcollege@kcgcollege.com',
        password: 'ffsf',
    },
    {
        name: 'Kcg College Of Technology',
        phone: '9941090444',
        email: 'kcgcollege@kcgcollege.com',
        password: 'ffsf',
    },
]
const ViewVolunteer: NextPage = () => (
    <>
        <section className='hero has-background-white-bis is-fullheight-with-navbar'>
            <div className='mb-6'>
                <p className='is-size-2 has-text-centered-desktop'><b>view Institutions</b></p>
            </div>
            <div className='hero-body '>
                < div className='container'>
                    {InstitutionView.map((tile, index) => (
                        <ViewCard {...tile} key={index} />
                    ))}
                </div>
            </div>
        </section>
    </>
)

export default ViewVolunteer
