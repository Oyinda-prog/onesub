import React from 'react'

const Card = ({content,heading,title, as,w}) => {
  return (
    <>
    <div className='mt-5 shadow rounded p-4 ' style={{backgroundColor:"#F9FAFC"}}>
      <div className='text-center mt-5'>
        
        <img src={as} alt="alt" width={w} /> 
  
      </div>
        <h3 className='text-dark mb-4'>{title}</h3>
        <p className='fs-5' style={{fontWeight:600}}>{content}</p>
    </div>
    </>
  )
}

export default Card