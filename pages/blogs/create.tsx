import type {NextPage} from 'next'

import CreateBlog from '@/components/Blogs/CreateBlogs'

const BlogPage: NextPage = () => (
    <section className='hero has-background-white-bis is-fullheight-with-navbar'>
        <div className='hero-body'>

            <div className='container box'>
                <div className='mb-6'>
                    <p className='title is-1'>Add Blog</p>
                </div>
                <CreateBlog />
            </div>
        </div>
    </section>
)

export default BlogPage
