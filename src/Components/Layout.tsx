
import Footer from './Footer'
import Header from './Header'

const Layout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className='flex flex-col bg-gradient-to-b from-black via-[#1d151f] via-[#1c151d] via-[#2e2324] to-[#201d20]'>
            <Header />
            <main className="">
                {children}
            </main>
            <Footer/>
        </div>
    )
}

export default Layout