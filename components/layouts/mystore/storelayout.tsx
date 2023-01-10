import Layout from 'next'
import { PropsWithChildren } from 'react';
import HorizontalSeparator from '../../horizontalseparator';
import Navigation from '../../navigation';
import StoreContentSubLayout from './storecontentsublayout';
const StoreLayout: React.FC<PropsWithChildren> = ({ children }) => {
    return (
        <div className='py-5 w-screen h-screen text-2xl bg-slate-800'>
            <div className="flex h-full flex-row">
                <div className='w-[10vw] flex flex-row'>
                    <Navigation />
                </div>
                <HorizontalSeparator />
                <main className='w-[90vw]'><StoreContentSubLayout/></main>
            </div>
        </div>
    )
}

export default StoreLayout;