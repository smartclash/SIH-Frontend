import {NextPage} from 'next'
import Link from 'next/link'
import FormInstitutite from '@/interfaces/Institution/Form'

const ViewCard: NextPage<FormInstitutite> = props => (
    <>
        <div className='card mb-6 column'>
            <div className='column'>
                <p className='is-bold'>Institution Name: <b>{ props.name}</b></p>
            </div>
            <div className='column'>
                <p className='is-bold'>Institution Address: <b>{ props.address}</b></p>
            </div>
            <div className='column'>
                <Link href={props.website}>
                    <p className='is-bold'>Institution Website: <a>{ props.website}</a></p>
                </Link>
            </div>
        </div>
    </>
)

const InstitutionView: FormInstitutite[] = [
    {
        name: 'Kcg College Of Technology',
        address: 'Karapakkam , bus stop back side , with Lake View',
        website: 'https://www.youtube.com/c/HariBaskarofficial/videos',

    },
    {
        name: 'Hindistanda College Of Technology',
        address: 'Karapakkam , bus stop back side , with Lake View',
        website: 'https://www.youtube.com/c/HariBaskarofficial/videos',

    },
    {
        name: 'Kcg College Of Technology',
        address: 'Karapakkam , bus stop back side , with Lake View',
        website: 'https://www.youtube.com/c/HariBaskarofficial/videos',

    },
]
const ViewInstitution: NextPage = () => (
    <>
        <section className='hero has-background-white-bis is-fullheight-with-navbar'>
            <div className='column is-half is-offset-3'>
                <div className='mb-6'>
                    <p className='is-size-2 has-text-centered-desktop'><b>View Institutions</b></p>
                </div>

                {InstitutionView.map((tile, index) => (
                    <ViewCard {...tile} key={index} />
                ))}

            </div>
        </section>
    </>
)

export default ViewInstitution
