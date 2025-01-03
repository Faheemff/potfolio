// eslint-disable-next-line no-unused-vars
import React from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'


const Page1Bottom = () => {
    useGSAP(()=> {
        gsap.to('#banner img', {
            duration:2,
            repeat:-1,
            rotate:360,
            ease:'linear',
        }) 
    })
    return (
        <div className='text-white p-32 flex items-center justify-between absolute bottom-0 w-full left-0'>
            <div>
                <h2 className='text-4xl font-[font3]'>
                    BRAND DESIGN | WEBSITE DESIGN
                </h2>
                <h3 className='text-4xl font-[font2] text-gray-400'>
                    BESPOKE FREELANCE
                </h3>
            </div>
            <div id='banner'>
                <img className='mb-10 h-60px]' src="https://static.wixstatic.com/media/f1c650_ed71078001ef401889b71537cca76dc4~mv2.png/v1/fill/w_72,h_72,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/cssda-wotd-white.png" />
                <img className='h-[60px]' src="https://static.wixstatic.com/media/f1c650_64de2af00f41462e8aecc3d04537f9b4~mv2.png/v1/fill/w_72,h_72,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/EN_legend_large.png" />
            </div>
        </div>
    )
}

export default Page1Bottom
