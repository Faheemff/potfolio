// eslint-disable-next-line no-unused-vars
import React from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

const Page2 = () => {
    gsap.registerPlugin(ScrollTrigger);

    useGSAP(()=> {
        gsap.from('.rotateText', {
            transform: 'rotateX(-80deg)',
            duration:2,
            // delay:1,
            stagger:1,
            opacity:0,
            scrollTrigger: {
                trigger: '.rotateText',
                start: 'top 30%',
                end: 'top -30%',
                toggleActions: 'play none none none',
                // markers: true,
                // scrub: true
            }
        })
    })


  return (
    <div id='section2' className='bg-white p-10 text-center text-black'>
      <h3 className='text-gray-500 text-4xl font-[font2]'>©  anzo.studio 2024 | designed and developed</h3>
      <div className='mt-40'>
        <h1 className='rotateText text-[42vw] font-[font4] leading-[35vw]'>IMPACTUL</h1>
      </div>
      <div>
        <h1 className='rotateText text-[42vw] font-[font4] leading-[35vw]'>DESIGN</h1>
      </div>
      <div>
        <h1 className='rotateText text-[42vw] font-[font4] leading-[35vw]'>IS THE</h1>
      </div>
      <div>
        <h1 className='rotateText text-[42vw] font-[font4] leading-[35vw]'>DESIGN</h1>
      </div>
      <div>
        <h1 className='rotateText text-[42vw] font-[font4] leading-[35vw]'>THAT</h1>
      </div>
      <div>
        <h1 className='rotateText text-[42vw] font-[font4] leading-[35vw]'>WORK</h1>
      </div>
    </div>
  )
}

export default Page2
