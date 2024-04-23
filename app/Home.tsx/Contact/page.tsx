'use client'
import React, { useRef, useState } from 'react'
import emailjs from '@emailjs/browser'
import Link from 'next/link'

type Props = {}

type FormData = {
  from_firstname: string
  from_lastname: string
  reply_to: string
  reply_two: string
  message: string
  to_name: string // Add the "to_name" property here
}

const ContactFile = (props: Props) => {
  const [formData, setFormData] = useState({
    from_firstname: '',
    from_lastname: '',
    reply_to: '',
    reply_two: '',
    message: '',
    to_name: ''
  })
  const { from_firstname, from_lastname, reply_to, reply_two, message } =
    formData

  const form = useRef<HTMLFormElement | null>(null)

  const onChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value
    })
  }

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const emailData = {
      from_firstname,
      from_lastname,
      reply_to,
      reply_two,
      message,
      to_name: 'Olawale Raji'
    }

    const YOUR_SERVICE_ID = 'service_rb8mrlq'
    const YOUR_TEMPLATE_ID = 'template_licfxi1'
    const YOUR_PUBLIC_KEY = '-sfBJKfao4Mv-t_e8'

    // Sending the mail
    emailjs
      .send(YOUR_SERVICE_ID, YOUR_TEMPLATE_ID, emailData, YOUR_PUBLIC_KEY)
      .then(
        () => {
          console.log('Email Sent')
        },
        (error: any) => {
          console.log(JSON.stringify(error))
        }
      )

    console.log(emailData)

    setFormData({
      from_firstname: '',
      from_lastname: '',
      reply_to: '',
      reply_two: '',
      message: '',
      to_name: ''
    })
  }

  return (
    <div className=''>
      <div className='max-w-2xl p-8 lg:max-w-5xl mx-auto'>
        <div className='text-left'>
          <h1 className='text-3xl font-bold text-gray-200 sm:text-4xl dark:text-white'>
            Contact us
          </h1>
          <p className='mt-1 text-gray-400 dark:text-gray-400'>
            I&apos;d love to talk about how I can help you.
          </p>
        </div>

        <div className='mt-12 grid items-center lg:grid-cols-2 gap-6 lg:gap-16'>
          <div className='divide-y divide-opacity-10 divide-12 divide-gray-400 dark:divide-gray-800'>
            <div className='flex gap-x-7 py-6'>
              <svg
                className='flex-shrink-0 w-6 h-6 mt-1.5 text-gray-400 dark:text-gray-200'
                xmlns='http://www.w3.org/2000/svg'
                width='16'
                height='16'
                fill='currentColor'
                viewBox='0 0 16 16'
              >
                <path d='M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z' />
                <path d='M5.255 5.786a.237.237 0 0 0 .241.247h.825c.138 0 .248-.113.266-.25.09-.656.54-1.134 1.342-1.134.686 0 1.314.343 1.314 1.168 0 .635-.374.927-.965 1.371-.673.489-1.206 1.06-1.168 1.987l.003.217a.25.25 0 0 0 .25.246h.811a.25.25 0 0 0 .25-.25v-.105c0-.718.273-.927 1.01-1.486.609-.463 1.244-.977 1.244-2.056 0-1.511-1.276-2.241-2.673-2.241-1.267 0-2.655.59-2.75 2.286zm1.557 5.763c0 .533.425.927 1.01.927.609 0 1.028-.394 1.028-.927 0-.552-.42-.94-1.029-.94-.584 0-1.009.388-1.009.94z' />
              </svg>
              <div>
                <h3 className='font-semibold text-gray-300 dark:text-gray-200'>
                  Reach Out With Mail
                </h3>
                <p className='mt-1 text-sm text-gray-400'>
                  olawaleraji188@gmail.com
                </p>
              </div>
            </div>

            <div className='flex gap-x-7 py-6'>
              <svg
                className='flex-shrink-0 w-6 h-6 mt-1.5 text-gray-400 dark:text-gray-200'
                xmlns='http://www.w3.org/2000/svg'
                width='16'
                height='16'
                fill='currentColor'
                viewBox='0 0 16 16'
              >
                <path d='M14 1a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H4.414A2 2 0 0 0 3 11.586l-2 2V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12.793a.5.5 0 0 0 .854.353l2.853-2.853A1 1 0 0 1 4.414 12H14a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z' />
                <path d='M5 6a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm4 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm4 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0z' />
              </svg>
              <div>
                <h3 className='font-semibold text-gray-300 dark:text-gray-200'>
                  Phone.
                </h3>
                <p className='mt-1 text-sm text-gray-400'>
                  +2348081241340 & +2349014919603
                </p>
              </div>
            </div>

            <div className=' flex gap-x-7 py-6'>
              <svg
                className='flex-shrink-0 w-6 h-6 mt-1.5 text-gray-400 dark:text-gray-200'
                xmlns='http://www.w3.org/2000/svg'
                width='16'
                height='16'
                fill='currentColor'
                viewBox='0 0 16 16'
              >
                <path d='M6 9a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1h-3A.5.5 0 0 1 6 9zM3.854 4.146a.5.5 0 1 0-.708.708L4.793 6.5 3.146 8.146a.5.5 0 1 0 .708.708l2-2a.5.5 0 0 0 0-.708l-2-2z' />
                <path d='M2 1a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2H2zm12 1a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1h12z' />
              </svg>
              <div>
                <h3 className='font-semibold text-gray-300 dark:text-gray-200'>
                  Location
                </h3>
                <p className='mt-1 text-sm text-gray-400'>
                  Lagos, Lagos State, Nigeria.
                </p>
              </div>
            </div>

            <div className='flex gap-x-7 py-6'>
              <svg
                className='flex-shrink-0 w-6 h-6 mt-1.5 text-gray-400 dark:text-gray-200'
                xmlns='http://www.w3.org/2000/svg'
                width='16'
                height='16'
                fill='currentColor'
                viewBox='0 0 16 16'
              >
                <path d='M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z' />
              </svg>
              <div>
                <h3 className='font-semibold text-gray-300 mb-4 dark:text-gray-200'>
                  Socials
                </h3>
                <div className='flex flex-col items-center'>
                  <div className='flex items-center space-x-4'>
                    <div className='flex items-center'>
                      <Link
                        href='https://twitter.com/savagedotjsx'
                        className='text-gray-300 transition-colors duration-300 hover:text-deep-purple-accent-400'
                      >
                        <svg
                          data-testid='geist-icon'
                          height='16'
                          strokeLinejoin='round'
                          viewBox='0 0 16 16'
                          width='16'
                          style={{ color: 'currentColor' }} // Convert style string to object
                        >
                          <path
                            fillRule='evenodd'
                            clipRule='evenodd'
                            d='M0.5 0.5H5.75L9.48421 5.71053L14 0.5H16L10.3895 6.97368L16.5 15.5H11.25L7.51579 10.2895L3 15.5H1L6.61053 9.02632L0.5 0.5ZM12.0204 14L3.42043 2H4.97957L13.5796 14H12.0204Z'
                            fill='currentColor'
                          ></path>
                        </svg>
                      </Link>
                    </div>
                    <div className='flex items-center'>
                      <Link
                        href='https://github.com/savagegraphics'
                        className='text-gray-300 transition-colors duration-300 hover:text-deep-purple-accent-400'
                      >
                        <svg
                          data-testid='geist-icon'
                          height='16'
                          stroke-linejoin='round'
                          viewBox='0 0 16 16'
                          width='16'
                          style={{ color: 'currentColor' }}
                        >
                          <g clip-path='url(#clip0_872_3147)'>
                            <path
                              fill-rule='evenodd'
                              clip-rule='evenodd'
                              d='M8 0C3.58 0 0 3.57879 0 7.99729C0 11.5361 2.29 14.5251 5.47 15.5847C5.87 15.6547 6.02 15.4148 6.02 15.2049C6.02 15.0149 6.01 14.3851 6.01 13.7154C4 14.0852 3.48 13.2255 3.32 12.7757C3.23 12.5458 2.84 11.836 2.5 11.6461C2.22 11.4961 1.82 11.1262 2.49 11.1162C3.12 11.1062 3.57 11.696 3.72 11.936C4.44 13.1455 5.59 12.8057 6.05 12.5957C6.12 12.0759 6.33 11.726 6.56 11.5261C4.78 11.3262 2.92 10.6364 2.92 7.57743C2.92 6.70773 3.23 5.98797 3.74 5.42816C3.66 5.22823 3.38 4.40851 3.82 3.30888C3.82 3.30888 4.49 3.09895 6.02 4.1286C6.66 3.94866 7.34 3.85869 8.02 3.85869C8.7 3.85869 9.38 3.94866 10.02 4.1286C11.55 3.08895 12.22 3.30888 12.22 3.30888C12.66 4.40851 12.38 5.22823 12.3 5.42816C12.81 5.98797 13.12 6.69773 13.12 7.57743C13.12 10.6464 11.25 11.3262 9.47 11.5261C9.76 11.776 10.01 12.2558 10.01 13.0056C10.01 14.0752 10 14.9349 10 15.2049C10 15.4148 10.15 15.6647 10.55 15.5847C12.1381 15.0488 13.5182 14.0284 14.4958 12.6673C15.4735 11.3062 15.9996 9.67293 16 7.99729C16 3.57879 12.42 0 8 0Z'
                              fill='currentColor'
                            ></path>
                          </g>
                          <defs>
                            <clipPath id='clip0_872_3147'>
                              <rect width='16' height='16' fill='white'></rect>
                            </clipPath>
                          </defs>
                        </svg>
                      </Link>
                    </div>
                    <div className='flex items-center'>
                      <Link
                        href='https://www.linkedin.com/in/toheeb-raji-b3a615235/'
                        className='text-gray-300 transition-colors duration-300 hover:text-deep-purple-accent-400'
                      >
                        <svg
                          data-testid='geist-icon'
                          height='16'
                          stroke-linejoin='round'
                          viewBox='0 0 16 16'
                          width='16'
                          style={{ color: 'currentColor' }}
                        >
                          <path
                            id='Subtract'
                            fill-rule='evenodd'
                            clip-rule='evenodd'
                            d='M2 0C0.895431 0 0 0.895431 0 2V14C0 15.1046 0.895431 16 2 16H14C15.1046 16 16 15.1046 16 14V2C16 0.895431 15.1046 0 14 0H2ZM5 6.75V13H3V6.75H5ZM5 4.50008C5 5.05554 4.61409 5.5 3.99408 5.5H3.98249C3.38582 5.5 3 5.05554 3 4.50008C3 3.93213 3.39765 3.5 4.00584 3.5C4.61409 3.5 4.98845 3.93213 5 4.50008ZM8.5 13H6.5C6.5 13 6.53178 7.43224 6.50007 6.75H8.5V7.78371C8.5 7.78371 9 6.75 10.5 6.75C12 6.75 13 7.59782 13 9.83107V13H11V10.1103C11 10.1103 11 8.46616 9.7361 8.46616C8.4722 8.46616 8.5 9.93972 8.5 9.93972V13Z'
                            fill='currentColor'
                          ></path>
                        </svg>
                      </Link>
                    </div>
                    <div className='flex items-center'>
                      <Link
                        href='/'
                        className='text-gray-300 transition-colors duration-300 hover:text-deep-purple-accent-400'
                      >
                        <svg
                          data-testid='geist-icon'
                          height='16'
                          stroke-linejoin='round'
                          viewBox='0 0 16 16'
                          width='16'
                          style={{ color: 'currentColor' }}
                        >
                          <path
                            fill-rule='evenodd'
                            clip-rule='evenodd'
                            d='M9.00319 15.9377C12.948 15.4442 16 12.0785 16 8C16 3.58172 12.4183 0 8 0C3.58172 0 0 3.58172 0 8C0 11.8172 2.67341 15.0099 6.25 15.808V10.4303H4.5V8H6.25V6.93969C6.25 4.22193 7.28461 2.96364 9.95128 2.96364C10.4559 2.96364 11.3277 3.06264 11.6854 3.16164V5.37163C11.497 5.35247 11.168 5.34289 10.7625 5.34289C9.45307 5.34289 9 5.8379 9 7.12812V8H11.5577L11.1106 10.4303H9.00319V15.9377Z'
                            fill='currentColor'
                          ></path>
                        </svg>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='form-body flex flex-col border border-gray-300 rounded-xl p-4 sm:p-6 lg:p-8'>
            <h2 className='mb-8 text-xl font-semibold text-gray-200 dark:text-gray-200'>
              Fill in the form
            </h2>

            <form className='form' onSubmit={onSubmit}>
              <div className='grid gap-4'>
                <div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
                  <div>
                    <label
                      htmlFor='hs-firstname-contacts-1'
                      className='sr-only'
                    >
                      First Name
                    </label>
                    <input
                      type='text'
                      name='from_firstname'
                      value={from_firstname}
                      onChange={onChange}
                      id='from_firstname'
                      className='py-3 px-4 block w-full border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400'
                      placeholder='First Name'
                    />
                  </div>

                  <div>
                    <label htmlFor='hs-lastname-contacts-1' className='sr-only'>
                      Last Name
                    </label>
                    <input
                      type='text'
                      name='from_lastname'
                      value={from_lastname}
                      onChange={onChange}
                      id='from_lastname'
                      className='py-3 px-4 block w-full border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400'
                      placeholder='Last Name'
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor='email' className='sr-only'>
                    Email
                  </label>
                  <input
                    type='email'
                    name='reply_to'
                    value={reply_to}
                    onChange={onChange}
                    id='reply_to'
                    autoComplete='email'
                    className='py-3 px-4 block w-full border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400'
                    placeholder='Email'
                  />
                </div>

                <div>
                  <label htmlFor='number' className='sr-only'>
                    Phone Number
                  </label>
                  <input
                    type='number'
                    name='reply_two'
                    value={reply_two}
                    onChange={onChange}
                    id='reply_two'
                    className='py-3 px-4 block w-full border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400'
                    placeholder='Phone Number'
                  />
                </div>

                <div>
                  <label htmlFor='hs-about-contacts-1' className='sr-only'>
                    Details
                  </label>
                  <textarea
                    name='message'
                    value={message}
                    onChange={onChange}
                    id='message'
                    rows={4}
                    className='py-3 px-4 block w-full border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400'
                    placeholder='Details'
                  ></textarea>
                </div>
              </div>

              <div className='mt-4 grid'>
                <button
                  type='submit'
                  id='button'
                  className='inline-flex justify-center items-center gap-x-3 text-center bg-blue-600 hover:bg-blue-700 border border-transparent text-sm lg:text-base text-white font-medium rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 focus:ring-offset-white transition py-3 px-4 dark:focus:ring-offset-gray-800'
                >
                  Send inquiry
                </button>
              </div>

              <div className='mt-3 text-center'>
                <p className='text-sm text-gray-300'>
                  I&apos;ll get back to you in 1-2 business days.
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContactFile
