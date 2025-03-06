import Image from 'next/image'
import React from 'react'


const Card = ({content,heading,title, as,w}) => {
  return (
    <>
    <div className='mt-5 shadow rounded p-4 ' style={{backgroundColor:"#F9FAFC"}}>
      <div className='text-center mt-5'>
        
        {/* <img src={as} alt="alt" width={w} />  */}
        <Image 
                    src={as} 
                    alt="logo" width={70} height={70} className='mb-5'/>
                   
  
      </div>
        <h3 className='text-dark mb-4'>{title}</h3>
        <p className='fs-5' style={{fontWeight:600}}>{content}</p>
    </div>
    </>
  )
}

export default Card