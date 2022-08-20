import {NextPage} from 'next'
import ViewCard from '@/components/Forms/ViewForm'
import InstitutionInterface from '@/interfaces/InstitutionInterface'

const InstitutionView: InstitutionInterface[] = [
    {
        name: 'Kcg College Of Technology',
        address: 'Karapakkam , bus stop back side , with Lake View',
        city: 'Chennai',
        state: 'Tamilnadu',
        zip: '600096',
        phone: '9941090444',
        email: 'kcgcollege@kcgcollege.com',
        website: 'https://www.youtube.com/c/HariBaskarofficial/videos',

    },
    {
        name: 'Hindistanda College Of Technology',
        address: 'Karapakkam , bus stop back side , with Lake View',
        city: 'Chennai',
        state: 'Tamilnadu',
        zip: '600096',
        phone: '9941090444',
        email: 'hn=indu@@kcgcollege.com',
        website: 'https://www.youtube.com/c/HariBaskarofficial/videos',

    },
    {
        name: 'Kcg College Of Technology',
        address: 'Karapakkam , bus stop back side , with Lake View',
        city: 'Chennai',
        state: 'Tamilnadu',
        zip: '600096',
        phone: '9941090444',
        email: 'kcgcollege@kcgcollege.com',
        website: 'https://www.youtube.com/c/HariBaskarofficial/videos',

    },
]
const ViewInstitution: NextPage = () => (
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

export default ViewInstitution
