// eslint-disable-next-line no-unused-vars
import React, { useRef } from 'react'
import TiltText from '../components/TiltText'
import Page1Bottom from '../components/Page1Bottom'
import { useState } from 'react';
import { useGSAP } from '@gsap/react'
import gsap from 'gsap/src';

const Page = () => {
  const tiltRef = useRef(null);
  const [xVal, setXVal] = useState(0)
  const [yVal, setYVal] = useState(0);


  const mouseMove = (dets)=> {
    // console.log(tiltRef.current.getBoundingClientRect())
    setXVal((dets.clientX - tiltRef.current.getBoundingClientRect().x - tiltRef.current.getBoundingClientRect().width / 2) / 60);
    setYVal(-(dets.clientY - tiltRef.current.getBoundingClientRect().y - tiltRef.current.getBoundingClientRect().height / 2) / 20);


    tiltRef.current.style.transform = `rotateX(${yVal}deg) rotateY(${xVal}deg)`;
  };

  useGSAP(()=> {
    gsap.to(tiltRef.current, {
      transform : `rotateX(${yVal}deg) rotateY(${xVal}deg)`,
      duration:3
    })
  },[xVal, yVal])

  return (
    <div onMouseMove={(dets)=> {
      mouseMove(dets);
    }} className='h-screen p-7 bg-white'>
      <div id='page1-in' className='shadow-xl p-24 shadow-gray-900 h-full w-full bg-cover rounded-[50px] bg-[url(https://static.wixstatic.com/media/f1c650_678c0ceab5194893872c60fa3be4bcdc~mv2.jpg/v1/fill/w_2644,h_1228,fp_0.69_0.64,q_90,usm_0.66_1.00_0.01,enc_auto/ANZO.jpg)]'>
        <img className='h-[150px]' src="https://static.wixstatic.com/media/f1c650_35a00b1fe6ce403eb237970ec8d34f79~mv2.png/v1/fill/w_280,h_280,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Frame%2053.png" alt="" />
        <TiltText abc={tiltRef} />
        <Page1Bottom />
      </div>
    </div>
  )
}

export default Page
