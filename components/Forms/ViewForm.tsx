import {NextPage} from 'next'
import Link from 'next/link'
import InstitutionInterface from '@/interfaces/InstitutionInterface'

const ViewCard: NextPage<InstitutionInterface> = props => (
    <>
        <div className='card mb-6 column'>
            <div className='column'>
                <p className='is-bold'>Institution Name: <b>{ props.name}</b></p>
            </div>
            <div className='column'>
                <p className='is-bold'>Institution Address: <b>{ props.address}</b></p>
            </div>
            <div className='column'>
                <p className='is-bold'>Institution City: <b>{ props.city}</b></p>
            </div>
            <div className='column'>
                <p className='is-bold'>Institution State: <b>{ props.state}</b></p>
            </div>
            <div className='column'>
                <p className='is-bold'>Institution Zip: <b>{ props.zip}</b></p>
            </div>
            <div className='column'>
                <p className='is-bold'>Phone Number:+91 <b>{ props.phone}</b></p>
            </div>
            <div className='column'>
                <Link href={props.website}>
                    <p className='is-bold'>Institution Name: <a>{ props.website}</a></p>
                </Link>
            </div>
        </div>
    </>
)

export default ViewCard
