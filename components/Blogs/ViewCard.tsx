import {NextPage} from 'next'
import Link from 'next/link'
import BlogInterface from '@/interfaces/BlogInterface'

const BlogCard: NextPage<BlogInterface> = props => (
    <>
        <div className='card mb-6'>
            <header className='card-header is-flex is-justify-content-space-between'>
                <Link href={`/blogs/${props.Author}`}>
                    <p className='card-header-title is-size-5'>
                        { props.Title }
                    </p>
                </Link>
                <p className='card-header-title is-flex is-justify-content-flex-end'>
                    @{ props.Author }
                </p>
            </header>
            <Link href={`/blogs/${props.Author}`}>
                <div className='card-content'>
                    <div className='content '>
                        { (props.Content).slice(0, 150) }...
                        <br />
                    </div>
                </div>
            </Link>
        </div>
    </>
)

export default BlogCard
