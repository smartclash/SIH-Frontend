import type {NextPage} from 'next'

import BlogpageCard from '@/components/Blogs/ViewBlogCard'
import BlogInterface from '@/interfaces/BlogInterface'

const ViewBlogs: BlogInterface[] = [
    {
        Title: 'Blockchain',
        Content: 'Blockchains are an emerging digital technology that combines cryptography, data management, networking, and incentive mechanisms to support the checking, execution, and recording of transactions between parties. Blockchains are an emerging digital technology that combines cryptography, data management, networking, and incentive mechanisms to support the checking, execution, and recording of transactions between parties.',
        Author: 'John Doe',
    },
    {
        Title: 'Docker overview',
        Content: 'Docker is an open platform for developing , shipping and running applicatons.Docker enables you to separe your application from your infrastructure so you can delivery software quickly.With docker you can manage you infrastructure with the same like your applications. Docker is an open platform for developing , shipping and running applicatons.Docker enables you to separe your application from your infrastructure so you can delivery software quickly.With docker you can manage you infrastructure with the same like your applications',
        Author: 'Alex Doe',
    },
    {
        Title: 'What is Flutter? What it can do ?',
        Content: 'Flutter is Google’s UI toolkit which build for natively development , building beautiful, reposive complined application for moblie , web and desktop. In simple word build with quote “ BUILD ONCE RUN AT EVERYWHERE. Flutter is Google’s UI toolkit which build for natively development , building beautiful, reposive complined application for moblie , web and desktop. In simple word build with quote “ BUILD ONCE RUN AT EVERYWHERE',
        Author: 'Quentin Doe',
    },

]

const BlogPageView: NextPage = () => (
    <section className='hero has-background-white-bis is-fullheight-with-navbar box'>
        <div className='hero-body'>
            <div className='container'>
                <div className='mb-6'>
                    <p className='is-size-2'>Recent blogs</p>
                </div>
                <div className=''>

                    {ViewBlogs.map(event => (
                        <BlogpageCard key={event.Title} {...event} />
                    ))}

                </div>
            </div>
        </div>
    </section>

)

export default BlogPageView
