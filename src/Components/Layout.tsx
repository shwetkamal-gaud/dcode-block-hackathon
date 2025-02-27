

import Header from './Header'

const Layout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className='d-flex flex-column'>
            <Header />
            <main className="">
                {children}
            </main>

        </div>
    )
}

export default Layout