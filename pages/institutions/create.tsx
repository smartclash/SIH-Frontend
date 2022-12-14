import {GetServerSideProps, NextPage} from 'next'
import FormInstitutite from '@/interfaces/Institution/Form'
import auth from '@/lib/auth'
import UserInterface from '@/interfaces/UserInterface'

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
        <div className='field pt-2'>
            <div className='control'>
                <input type='submit' value='Submit' className='button is-primary is-outlined is-fullwidth' />
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

interface Props {
    user: UserInterface;
}

const AddInstitutions: NextPage<Props> = props => (
    <section className='hero has-background-white-bis is-fullheight-with-navbar'>
        <div className='hero-body'>
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

export const getServerSideProps: GetServerSideProps = auth

export default AddInstitutions
