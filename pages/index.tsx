import React from 'react';
import Link from 'next/link';

export default function Home() {
    return (
        <div>
            <h1 className="">Hi!</h1>
            <Link href="/mystore">Go to your store</Link>
        </div>
    );
}
