import Layout from 'next'
import { PropsWithChildren } from 'react';
import HorizontalSeparator from '../../horizontalseparator';
import LoadingBar from '../../loadingbar';
import Navigation from '../../navigation';
import StoreContentSubLayout from './storecontentsublayout';
const StoreLayout: React.FC<PropsWithChildren> = ({ children }) => {
    return (
        <div className='py-5 w-screen h-screen text-2xl bg-slate-800'>
            <div className="flex h-full flex-row divide-x-2 divide-gray-600">
                <div className='w-[10vw] flex flex-row'>
                    <Navigation />
                </div>
                <main className='w-[90vw] z-10'><StoreContentSubLayout/></main>
            </div>
            <div className='overflow-y-hidden h-full w-5/6 left-[50%] translate-x-[-50%] rounded-full bg-gradient-to-l from-indigo-600 to-purple-400 blur-3xl fixed -bottom-[102%]'></div>
            <LoadingBar/>
        </div>
    )
}

export default StoreLayout;