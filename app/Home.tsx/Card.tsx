import React from 'react'
import Link from 'next/link'

type Props = {}

const Card = (props: Props) => {
  return (
    <div className='max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto'>
      <div className='max-w-2xl mx-auto text-center mb-10 lg:mb-14'>
        <h2 className='text-2xl font-bold md:text-4xl md:leading-tight text-gray-200'>
          Static Single-Page Web App
        </h2>
        <p className='mt-1 text-gray-400'>
          ake a tour of my previous single-page wonders crafted with Next.js,
          React, TypeScript, and Tailwind CSS
        </p>
      </div>

      <div className='grid sm:grid-cols-2 lg:grid-cols-4 gap-6'>
        <Link
          className='group flex flex-col h-full border border-gray-600 hover:border-transparent hover:shadow-lg transition-all duration-300 rounded-xl p-5 dark:border-gray-700 dark:hover:border-transparent dark:hover:shadow-black/[.4] dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600'
          href='https://movie-appsy.vercel.app/'
        >
          <div className='aspect-w-16 aspect-h-11'>
            <img
              className='w-full object-cover rounded-xl'
              src='./bwoi/TopMovie.png'
              alt='Image Description'
            />
          </div>
          <div className='my-6'>
            <h3 className='text-xl font-semibold text-gray-200 dark:text-gray-300 dark:group-hover:text-white'>
              Top Movie
            </h3>
            <p className='mt-5 text-gray-300'>
              Top Movie is a sleek UI web app that leverages APIs to display an
              array of top-rated movies, providing users with a seamless
              browsing experience.
            </p>
          </div>
          <div className='mt-auto flex items-center gap-x-3'>
            <div>
              <h5 className='text-sm text-gray-400'>By PROJECT SURVIVOR</h5>
            </div>
          </div>
        </Link>
        <Link
          className='group flex flex-col h-full border border-gray-600 hover:border-transparent hover:shadow-lg transition-all duration-300 rounded-xl p-5 dark:border-gray-700 dark:hover:border-transparent dark:hover:shadow-black/[.4] dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600'
          href='https://home-decor-sandy.vercel.app/'
        >
          <div className='aspect-w-16 aspect-h-11'>
            <img
              className='w-full object-cover rounded-xl'
              src='./bwoi/Ceramic.png'
              alt='Image Description'
            />
          </div>
          <div className='my-6'>
            <h3 className='text-xl font-semibold text-gray-200 dark:text-gray-300 dark:group-hover:text-white'>
              Ceramic
            </h3>
            <p className='mt-5 text-gray-300 dark:text-gray-400'>
              Ceramic is a forward-thinking web app dedicated to showcasing the
              future of ceramic tiles, offering users insights into innovative
              designs and advancements in the industry.
            </p>
          </div>
          <div className='mt-auto flex items-center gap-x-3'>
            <div>
              <h5 className='text-sm text-gray-400 dark:text-gray-200'>
                By PROJECT SURVIVOR
              </h5>
            </div>
          </div>
        </Link>

        <Link
          className='group flex flex-col h-full border border-gray-600 hover:border-transparent hover:shadow-lg transition-all duration-300 rounded-xl p-5 dark:border-gray-700 dark:hover:border-transparent dark:hover:shadow-black/[.4] dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600'
          href='https://construe.vercel.app/'
        >
          <div className='aspect-w-16 aspect-h-11'>
            <img
              className='w-full object-cover rounded-xl'
              src='./bwoi/Construe.png'
              alt='Image Description'
            />
          </div>
          <div className='my-6'>
            <h3 className='text-xl font-semibold text-gray-200 dark:text-gray-300 dark:group-hover:text-white'>
              Construe
            </h3>
            <p className='mt-5 text-gray-300 dark:text-gray-400'>
              Construe is a comprehensive web app focused on the construction
              process, providing users with valuable information about
              contractors and the intricate stages involved in building
              remarkable homes and industrial structures.
            </p>
          </div>
          <div className='mt-auto flex items-center gap-x-3'>
            <div>
              <h5 className='text-sm text-gray-400 dark:text-gray-200'>
                By PROJECT SURVIVOR
              </h5>
            </div>
          </div>
        </Link>

        <Link
          className='group flex flex-col h-full border border-gray-600 hover:border-transparent hover:shadow-lg transition-all duration-300 rounded-xl p-5 dark:border-gray-700 dark:hover:border-transparent dark:hover:shadow-black/[.4] dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600'
          href='https://buty-ng.vercel.app/'
        >
          <div className='aspect-w-16 aspect-h-11'>
            <img
              className='w-full object-cover rounded-xl'
              src='./bwoi/Buty.png'
              alt='Image Description'
            />
          </div>
          <div className='my-6'>
            <h3 className='text-xl font-semibold text-gray-200 dark:text-gray-300 dark:group-hover:text-white'>
              Buty
            </h3>
            <p className='mt-5 text-gray-300 dark:text-gray-400'>
              Buty is your go-to platform for transforming your dream property
              into reality. With valuable resources and expert guidance, we make
              the process of building your ideal home or commercial space
              seamless and effortless.
            </p>
          </div>
          <div className='mt-auto flex items-center gap-x-3'>
            <div>
              <h5 className='text-sm text-gray-400 dark:text-gray-200'>
                By PROJECT SURVIVOR
              </h5>
            </div>
          </div>
        </Link>
      </div>
    </div>
  )
}

export default Card
