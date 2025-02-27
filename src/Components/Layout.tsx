
import Footer from './Footer'
import Header from './Header'

const Layout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className='flex flex-col '>
            <Header />
            <main className="">
                {children}
            </main>
            <Footer/>
        </div>
    )
}

export default Layout