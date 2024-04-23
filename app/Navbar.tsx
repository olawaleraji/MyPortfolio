import React, { Key } from 'react'
import { Tabs, Tab, Card, CardBody } from '@nextui-org/react' // Import the Key type from React
import Hero from './Home.tsx/Hero'
import Contact from './Home.tsx/Contact/page'
import Stack from './Home.tsx/Stack'
import Project from './Home.tsx/Project'
import Footer from './Home.tsx/Footer'

export default function App () {
  const [selected, setSelected] = React.useState<Key>('photos' as Key) // Explicitly cast to Key type

  const handleSelectionChange = (key: Key) => {
    setSelected(key.toString()) // Convert Key to string if necessary
  }

  return (
    <div className=''>
      <div className='flex w-full flex-col'>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'flex-end',
            marginRight: '20px',
            marginBottom: '20px',
            marginTop: '20px'
          }}
        >
          <Tabs
            aria-label='Options'
            onSelectionChange={handleSelectionChange}
            color='primary'
            variant='bordered'
          >
            <Tab key='about' title='About' />
            <Tab key='stack' title='Tech Stack' />
            <Tab key='projects' title='Projects' />
            <Tab key='contact' title='Contact' />
          </Tabs>
        </div>
        <div className=''>
          <Card className='rounded-xl mx-8 my-6'>
            <CardBody className='bg-gray-700'>
              {selected === 'about' && (
                <div className=''>
                  <Hero />
                </div>
              )}
              {selected === 'stack' && <Stack />}
              {selected === 'projects' && <Project />}
              {selected === 'contact' && (
                <div className=''>
                  <Contact />
                </div>
              )}
            </CardBody>
          </Card>
        </div>
      </div>
      <Footer />
    </div>
  )
}
