import type {NextPage} from 'next'
import BlogpageCard from '@/components/Blogs/FullView'
import BlogInterface from '@/interfaces/Blogs/BlogInterface'

const ViewBlogs: BlogInterface[] = [
    {
        Title: 'Blockchain',
        Content: `Flutter is Google’s UI toolkit which build for natively development , building beautiful, reposive complined application for moblie , web and desktop. In simple word build with quote “ BUILD ONCE RUN AT EVERYWHERE”

        Flutter Advantages:
        
        Fast development : Flutter’s hot reload helps developer to build quickly and easily experimental.
        
        Expressive & beautiful UIs : Fluter’s build-in beatiful Material Design and Cupertino(iOS-flavor) widgets , rich and motion Apis , smooth natural scrolling and platform awareness.
        
        Keep in flutter build by google so it’s performance is less when it comes to iOS device because of platform competition
        
        
        
        Native Performance : Flutter’s widget incorporate all critical platform difference like scrolling style , default icons & fonts so that it can provide natively performance.
        
        For engineering managers and businesses, Flutter allows the unification of app developers into a single mobile, web, and desktop app team, building branded apps for multiple platforms out of a single codebase. Flutter speeds feature development and synchronizes release schedules across the entire customer base.
        
        
        
        What programming Language used?
        
        Dart its Language
        
        
        
        
        
        Dart is client-optimized Language for fast apps on any platform. This was developed by google in 2011.Dart is fast on all platforms because its Complied to ARM & x64 machine code for moblie , desktop , and backend. Or complied to Javascript for web.
        
        
        
        Dart is Syntax are simpler and similar to javascript so it will easy for people coming from javascript background.The Dart language is type safe; it uses static type checking to ensure that a variable’s value always matches the variable’s static type. Sometimes, this is referred to as sound typing. Although types are mandatory, type annotations are optional because of type inference. The Dart typing system is also flexible, allowing the use of a dynamic type combined with runtime checks, which can be useful during experimentation or for code that needs to be especially dynamic.
        
        
        
        You try Dart Herr : dart online complier
        
        
        
        What is Widget?
        
        you’ll be wondering what is Widget because I used it above !!! I get it flutter apps are build using widget.Flutter widgets are built using a modern framework that takes inspiration from React. The central idea is that you build your UI out of widgets. Widgets describe what their view should look like given their current configuration and state. When a widget’s state changes, the widget rebuilds its description, which the framework diffs against the previous description in order to determine the minimal changes needed in the underlying render tree to transition from one state to the next.
        
        
        
        Basic widgets
        
        Flutter comes with a suite of powerful basic widgets, of which the following are commonly used:
        
        
        
        TextThe Text widget lets you create a run of styled text within your application.Row, ColumnThese flex widgets let you create flexible layouts in both the horizontal (Row) and vertical (Column) directions. The design of these objects is based on the web’s flexbox layout model.StackInstead of being linearly oriented (either horizontally or vertically), a Stack widget lets you place widgets on top of each other in paint order. You can then use the Positioned widget on children of a Stack to position them relative to the top, right, bottom, or left edge of the stack. Stacks are based on the web’s absolute positioning layout model.ContainerThe Container widget lets you create a rectangular visual element. A container can be decorated with a BoxDecoration, such as a background, a border, or a shadow. A Container can also have margins, padding, and constraints applied to its size. In addition, a Container can be transformed in three dimensional space using a matrix.
        
        
        
        Advantages
        
        Same Ui and Business Logic in ALL Platform
        
        Reduce Code Development Time
        
        Increased Time-to-Marked Speed
        
        Similar to Native App Preformance
        
        Custom ,Animated Ui of Any Complex Available
        
        Simple Platform-specific logic Implementation
        
        Own Rendering Engine
        
        The Potential Ability to Go Beyond mobile.
        
        So Why Try Flutter?
        
        Let’s briefly go through the most outstanding advantages of the framework:
        
        
        
        the app UI and logic don’t change depending on the platform
        
        faster code development
        
        increased time-to-market speed
        
        close to native app performance
        
        enormous UI customization potential
        
        separate rendering engine
        
        no reliance on platform-specific UI components
        
        suitable for any target platform
        
        minimizes the risks and losses for your business
        
        What kinds of apps can I build with Flutter?
        
        Flutter is designed to support mobile apps that run on both Android and iOS, as well as interactive apps that you want to run on your web pages or on the desktop. (Note that desktop support is in beta, but a snapshot of the beta is available on the stable channel.)
        
        
        
        Apps that need to deliver highly branded designs are particularly well suited for Flutter. However, you can also create pixel-perfect experiences that match the Android and iOS design languages with Flutter.
        
        
        
        Flutter’s package ecosystem supports a wide variety of hardware (such as camera, GPS, network, and storage) and services (such as payments, cloud storage, authentication, and ads).`,
        Author: 'John Doe',
    },
]

const FullPageBlog: NextPage = () => (
    <>
        <div className='container'>
            <div className='column is-half is-offset-3'>
                <div className='mb-6'>
                    <p className='is-size-2 mt-4'>Recent blogs</p>
                </div>
                <div className=''>
                    {ViewBlogs.map(event => (
                        <BlogpageCard key={event.Title} {...event} />
                    ))}

                </div>
            </div>
        </div>
    </>
)

export default FullPageBlog
