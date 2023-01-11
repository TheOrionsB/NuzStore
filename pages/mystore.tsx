import React from 'react';
import StoreContentSubLayout from '../components/layouts/mystore/storecontentsublayout';
import StoreLayout from '../components/layouts/mystore/storelayout';

function MyStore() {
    return (
        <StoreLayout>
            <StoreContentSubLayout />
        </StoreLayout>
    );
}

export default MyStore;
