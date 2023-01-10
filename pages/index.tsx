import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div>
      <h1 className=''>Hi!</h1>
      <Link href={'/mystore'}>Go to your store</Link>
    </div>
  )
}
