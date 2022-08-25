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
            <section className='hero is-medium'>
                <div className='hero-body is-justify-content-center'>
                    <p className='title'>
                        Bing Map
                    </p>
                </div>
            </section>

        </div>
    </>
)

const InstitutionView: FormInstitutite[] = [
    {
        name: 'Kcg College Of Technology',
        address: 'Karapakkam , bus stop back side , with Lake View',
        website: 'www.kcgcollege.com',

    },
]
const ViewInstitution: NextPage = () => {
    const isNdrfAdmin = true
    return (
        <>
            
                <section className='hero has-background-white-bis is-fullheight-with-navbar'>
                    <section className = 'section'>
                      <div className='column is-half is-offset-3'>
                       
                        <div className='mb-6'>
                            <p className='is-size-2 has-text-centered-desktop'><b>Institutions details</b></p>
                        </div>

                        {InstitutionView.map((tile, index) => (
                            <ViewCard {...tile} key={index} />
                        ))}
                        {
                            (isNdrfAdmin) ? (
                                <div className='card'>
                                    <div className='card-header'>
                                        <p className='card-header-title'>Add Admin</p>
                                    </div>
                                    <div className='card-content'>
                                        <form action=''>
                                            <div className='field'>
                                                <label htmlFor='title' className='label'>Name</label>
                                                <div className='control'>
                                                    <input type='text' className='input' id='title' />
                                                </div>
                                            </div>
                                            <div className='field'>
                                                <label htmlFor='title' className='label'>Email</label>
                                                <div className='control'>
                                                    <input type='text' className='input' id='title' />
                                                </div>
                                            </div>
                                            <div className='field'>
                                                <label htmlFor='title' className='label'>Phone</label>
                                                <div className='control'>
                                                    <input type='text' className='input' id='title' />
                                                </div>
                                            </div>
                                            <div className='field'>
                                                <label htmlFor='title' className='label'>Password</label>
                                                <div className='control'>
                                                    <input type='text' className='input' id='title' />
                                                </div>
                                            </div>
                                            <div className='field'>
                                                <div className='control pt-2'>
                                                    <input type='submit' value='Submit' className='button is-primary is-outlined is-fullwidth' />
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            ) : ''}
                        <br></br>

                        <div className='card'>
                            <div className='card-content'>
                                <div className='columns is-half'>
                                    <div className='column'>
                                        <Link href={'/'}>
                                            <a className='button is-primary is-outlined is-fullwidth'>
                                                View Admin
                                            </a>
                                        </Link>
                                    </div>
                                    <div className='column'>
                                        <Link href={'/'}>
                                            <a className='button is-fullwidth'>
                                                View Volunteers
                                            </a>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </section>

        </>
    )
}

export default ViewInstitution
