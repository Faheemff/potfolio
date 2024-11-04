// eslint-disable-next-line no-unused-vars
import React from 'react'
import TiltText from '../components/TiltText'
import Page1Bottom from '../components/Page1Bottom'

const Page = () => {
  return (
    <div className='h-screen p-7 bg-white'>
      <div className='shadow-xl p-24 shadow-gray-900 h-full w-full bg-cover rounded-[50px] bg-[url(https://static.wixstatic.com/media/f1c650_678c0ceab5194893872c60fa3be4bcdc~mv2.jpg/v1/fill/w_2644,h_1228,fp_0.69_0.64,q_90,usm_0.66_1.00_0.01,enc_auto/ANZO.jpg)]'>
        <img className='h-[150px]' src="https://static.wixstatic.com/media/f1c650_35a00b1fe6ce403eb237970ec8d34f79~mv2.png/v1/fill/w_280,h_280,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Frame%2053.png" alt="" />
        <TiltText />
        <Page1Bottom />
      </div>
    </div>
  )
}

export default Page
