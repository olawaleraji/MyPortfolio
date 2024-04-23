import React from 'react'
import Link from 'next/link'

type Props = {}

const Stack = (props: Props) => {
  return (
    <div className='m-4'>
      <div className='grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:mb-4 mb-8'>
        <Link
          className='group rounded-xl overflow-hidden'
          href='https://route-rover-ruby.vercel.app/'
        >
          <div className='relative pt-[50%] sm:pt-[70%] rounded-xl overflow-hidden'>
            <img
              className='size-full absolute top-0 start-0 object-contain group-hover:scale-105 transition-transform duration-500 ease-in-out rounded-xl'
              src='./bwoi/RouteRover.png'
              alt='Image Description'
            />
            <span className='absolute top-0 right-0 rounded-tr-xl rounded-bl-xl text-xs font-medium bg-gray-800 text-white py-1.5 px-3 dark:bg-gray-900'>
              Sponsored
            </span>
          </div>

          <div className='mt-3 lg:-mt-6  px-4'>
            <h3 className='text-xl font-semibold text-gray-300 group-hover:text-gray-400'>
              RouteRover
              {/* &apos; */}
            </h3>
            <p className='mt-3 text-gray-400'>
              RouteRover is a user-friendly web app that facilitates global car
              and motorbike rentals. It offers a seamless experience for both
              renters and merchants, enabling easy vehicle listings and rentals
              worldwide.
            </p>
          </div>
        </Link>

        <Link
          className='group rounded-xl overflow-hidden'
          href='https://workofart.vercel.app/'
        >
          <div className='relative pt-[50%] sm:pt-[70%] rounded-xl overflow-hidden'>
            <img
              className='size-full absolute top-0 start-0 object-contain group-hover:scale-105 transition-transform duration-500 ease-in-out rounded-xl'
              src='./bwoi/Babylist.png'
              alt='Image Description'
            />
            <span className='absolute top-0 right-0 rounded-tr-xl rounded-bl-xl text-xs font-medium bg-gray-800 text-white py-1.5 px-3 dark:bg-gray-900'>
              Sponsored
            </span>
          </div>

          <div className='mt-3 lg:-mt-6  px-4'>
            <h3 className='text-xl font-semibold text-gray-300 group-hover:text-gray-400'>
              Babylist
            </h3>
            <p className='mt-3 text-gray-400'>
              Babylist is a convenient web app designed for shopping for
              toddlers and newborns. It provides a seamless online shopping
              experience, allowing users to browse and purchase essential items
              for their little ones with ease.
            </p>
          </div>
        </Link>

        <Link
          className='group rounded-xl overflow-hidden'
          href='https://happie-hq.vercel.app/'
        >
          <div className='relative pt-[50%] sm:pt-[70%] rounded-xl overflow-hidden'>
            <img
              className='size-full absolute top-0 start-0 object-contain group-hover:scale-105 transition-transform duration-500 ease-in-out rounded-xl'
              src='./bwoi/Happie.png'
              alt='Image Description'
            />
            <span className='absolute top-0 right-0 rounded-tr-xl rounded-bl-xl text-xs font-medium bg-gray-800 text-white py-1.5 px-3 dark:bg-gray-900'>
              Sponsored
            </span>
          </div>

          <div className='mt-3 lg:-mt-6  px-4'>
            <h3 className='text-xl font-semibold text-gray-300 group-hover:text-gray-400'>
              Happie
            </h3>
            <p className='mt-3 text-gray-400'>
              Happie is a web app simplifying shipping for individuals and
              e-commerce businesses, offering seamless local and international
              shipping solutions.
            </p>
          </div>
        </Link>
      </div>
    </div>
  )
}

export default Stack
