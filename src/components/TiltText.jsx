// eslint-disable-next-line no-unused-vars
import React from 'react';

const TiltText = (props) => {
    return (
        <div id='tiltdev' ref={props.abc} className='text-white mt-60'>
            <h1 className='text-[4.3vw] leading-[4vw] font-[font5]'>
                I AM <span className='text-black'>DARK MODE</span>™
            </h1>
            <h1 className='text-[8vw] font-[font1] leading-[7vw]'>DESIGNER</h1>
            <h1 className='text-[4.3vw] font-[font5] leading-[4vw]'>TO HIRE</h1>
        </div>
    );
}

export default TiltText;

