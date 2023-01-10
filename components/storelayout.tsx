import Layout from 'next'
import { PropsWithChildren } from 'react';
import HorizontalSeparator from './horizontalseparator';
import Navigation from './navigation';
const StoreLayout: React.FC<PropsWithChildren> = ({ children }) => {
    return (
        <div className='py-5 w-screen h-screen text-2xl'>
            <div className="flex h-full flex-row">
                <div className='w-[10vw] flex flex-row'>
                    <Navigation />
                </div>
                <HorizontalSeparator />
                <main className='w-[90vw]'>{children}</main>
            </div>
        </div>
    )
}

export default StoreLayout;