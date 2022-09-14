import React from 'react'
import css from '../assets/css.png'
import javascript from '../assets/javascript.png'
import react from '../assets/react.png'
import github from '../assets/github.png'
import tailwind from '../assets/tailwind.png'
import html from '../assets/html.png'
import ruby from '../assets/ruby.png'
import sql from '../assets/sql.png'
import postgress from '../assets/postgress.png'
import rubyrails from '../assets/rubyrails.png'


const Experience = () => {

  const experience=[
  {
    id:1,
    src:html,
    title: 'HTML',
    style:'shadow-orange-500'
  },
  {
    id:2,
    src:css,
    title: 'CSS',
    style:'shadow-blue-500'
  },
  {
    id:3,
    src:javascript,
    title: 'JS',
    style:'shadow-yellow-500'
  },
  {
    id:4,
    src:react,
    title: 'REACT',
    style:'shadow-blue-600'
  },
  {
    id:5,
    src:github,
    title: 'GITHUB',
    style:'shadow-gray-400'
  },
  {
    id:6,
    src:tailwind,
    title: 'TAILWIND',
    style:'shadow-sky-400'
  },
  {
    id:7,
    src:ruby,
    title: 'RUBY',
    style:'shadow-red-400'
  },
  {
    id:8,
    src:postgress,
    title: 'PostgreSQL',
    style:'shadow-sky-400'
  },  
  {
    id:9,
    src:rubyrails,
    title: 'Ruby on Rails',
    style:'shadow-red-400'
  }, 
  {
    id:10,
    src:sql,
    title: 'SQL',
    style:'shadow-blue-400'
  }


  ]
  return (
    <div name="experience"className='bg-gradient-to-b from-gray-800 to-black w-full h-screen'>
        <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full text-white'>
            <div>
            <p className='text-4xl font-bold border-b-4 border-gray-500 p-2 inline '>Experience</p>
            <p className='py-6'>These are the techonologies i've worked with</p>
            </div>

            <div className=" w-full grid grid-cols-3 sm:grid-cols-4 gap-8 text-center py-8 px-12 sm:px-8">
              {
                experience.map(({ id,title,src,style})=>(
                  <div key={id}
                  className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}> 
                  <img src={src} alt="" className="w-20 mx-auto" />
                  <p className="mt-4">{title}</p>
              </div>
                ))
              }

            </div>
        </div>
    </div>
  )
}

export default Experience