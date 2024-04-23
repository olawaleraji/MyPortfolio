import React from 'react'
import Bwoi from '@/public/bwoiyo.jpg'
import Link from 'next/link'

type Props = {}

const Hero = (props: Props) => {
  return (
    <section className='py-12'>
      <div className='max-w-screen-2xl mx-auto text-gray-600 gap-x-12 items-center justify-between overflow-hidden md:flex md:px-8'>
        <div className='flex-none space-y-5 px-4 sm:max-w-lg md:px-0 lg:max-w-xl'>
          <h1 className='text-sm text-indigo-600 font-medium'>
            Over 20 successful deals
          </h1>
          <h2 className='text-2xl text-gray-200 font-extrabold md:text-4xl'>
            Hi👋🏽, <br />
            My Name is
            <br />
            Toheeb Olawale RAJI
            <br />I build Front-End for the Web
          </h2>
          <p className='text-gray-400'>
            As a frontend developer deeply rooted in the React.js and Next.js
            ecosystems, I wield the power of cutting-edge technologies to craft
            seamless digital experiences. With a blend of creativity and
            technical prowess, I transform complex concepts into elegant
            solutions. My dedication to innovation drives me to explore new
            possibilities and push the boundaries of web development. Let&apos;s
            collaborate to turn your ideas into captivating user experiences!
          </p>
          <div className='items-center gap-x-3 space-y-3 sm:flex sm:space-y-0'>
            <Link
              href='/Home.tsx/Contact'
              className='block py-2 px-4 text-center text-white font-medium bg-indigo-600 duration-150 hover:bg-indigo-500 active:bg-indigo-700 rounded-lg shadow-lg hover:shadow-none'
            >
              Get In Touch
            </Link>
          </div>
        </div>
        <div className='flex-none mt-14 md:mt-0 md:max-w-xl'>
          <img
            src={Bwoi.src}
            className='lg:rounded-tl-[108px] h-[24rem] w-[30rem] lg:w-[36rem] rounded-xl'
            alt=''
          />
        </div>
      </div>
    </section>
  )
}

export default Hero
