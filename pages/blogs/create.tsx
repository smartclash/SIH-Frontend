import type {GetServerSideProps, NextPage} from 'next'
import auth from '@/lib/auth'
import UserInterface from '@/interfaces/UserInterface'

interface Props {
    user: UserInterface;
}

const BlogPage: NextPage<Props> = props => (
    <section className='hero has-background-white-bis is-fullheight-with-navbar'>
        <div className='hero-body'>
            <div className='container'>
                <div className='columns'>
                    <div className='column is-half is-offset-3'>
                        <div className='card'>
                            <div className='card-header'>
                                <p className='card-header-title'>Create Blog</p>
                            </div>
                            <div className='card-content'>
                                <form action=''>
                                    <div className='field'>
                                        <label htmlFor='title' className='label'>Title</label>
                                        <div className='control'>
                                            <input type='text' className='input' id='title' />
                                        </div>
                                    </div>
                                    <div className='field'>
                                        <label htmlFor='message' className='label'>Message</label>
                                        <div className='control'>
                                            <textarea className='textarea' id='message' style={{minHeight: '20em'}}></textarea>
                                        </div>
                                    </div>
                                    <div className='field'>
                                        <div className='control'>
                                            <input type='submit' value='Submit' className='button is-primary is-outlined is-fullwidth' />
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
)

export const getServerSideProps: GetServerSideProps = auth

export default BlogPage
