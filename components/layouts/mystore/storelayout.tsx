import React from 'react';
import LoadingBar from '../../loadingbar';
import Navigation from '../../navigation';
import StoreContentSubLayout from './storecontentsublayout';

function StoreLayout() {
    return (
        <div className="py-5 w-screen h-screen text-2xl bg-slate-800">
            <div className="flex h-full flex-row divide-x-2 divide-gray-600">
                <div className="w-[15%] sidebarbp:w-[10%] flex flex-row items-center justify-center">
                    <Navigation />
                </div>
                <main className="w-[85%] sidebarbp:w-[90%] z-10">
                    <StoreContentSubLayout />
                </main>
            </div>
            <div className="overflow-y-hidden h-full w-5/6 left-[50%] translate-x-[-50%] rounded-full bg-gradient-to-l from-indigo-600 to-purple-400 blur-3xl fixed -bottom-[102%]" />
            <LoadingBar />
        </div>
    );
}
export default StoreLayout;
