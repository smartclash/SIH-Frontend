import {NextPage} from 'next'
import Link from 'next/link'
import BlogInterface from '@/interfaces/BlogInterface'

const FullView: NextPage<BlogInterface> = props => (
    <>
        <div className='card mb-6'>
            <header className='card-header is-flex is-justify-content-space-between'>
                <p className='card-header-title is-size-5'>
                    { props.Title }
                </p>
                <p className='card-header-title is-flex is-justify-content-flex-end'>
                    @{ props.Author }
                </p>
            </header>
            <div className='card-content'>
                <div className='content '>
                    { (props.Content)}
                    <br />
                </div>
            </div>
        </div>
    </>
)

export default FullView
