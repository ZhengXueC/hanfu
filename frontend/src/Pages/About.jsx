import React from 'react'
import { useTranslation } from "react-i18next";
import  Hero  from '../assets/hero.png'
import PageHero from '../components/PageHero'

const About = () => {
    const{t} = useTranslation()
  return (
      <>
      
      <section className='flex gap-14 flex-col lg:flex-row justify-center items-center lg:h-[90vh]'>
          <div className="image ml-16 lg:w-1/2">
              <img
                  src={Hero}
                  alt="Hero"
                  className='lg:w-full w-[98%] m-auto mt-4'
                  width={'600px'}
              />
          </div>
          <div className="info mb-8 lg:mb-0 lg:h-[80vh] lg:w-1/2 flex flex-col justify-center items-center lg:items-start">
              <div className="header ml-6 flex flex-col justify-center items-start mb-6">
                <div className="text-4xl font-bold" color='#102a42'>{t('Our_Story')}</div>
                <div className="underLine bg-[#617d98] w-20 h-1 mt-2 ml-1"></div>
            </div>
              <p className='text-xl lg:w-[80%] w-[100%] ml-6 lg:ml-8 lg:m-0'>
              {t('The_HanfuTale_emerged')}
              </p>
          </div>
    </section>
      </>
  )
}

export default About