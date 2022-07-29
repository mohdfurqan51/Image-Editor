import React, {useState} from 'react'
import "./css/filters.css"

const Filters = () => {

    const img = "https://images.unsplash.com/photo-1495615080073-6b89c9839ce0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8c3F1YXJlfGVufDB8fDB8fA%3D%3D&w=1000&q=80";
    
        
    

  return (
    <div className='container filter'>

        <div className='row mt-4 mb-4'>
            <div className="col-md-2">
            <img className='img-fluid filterSize' src={img} alt="" />
            </div>

            <div className="col-md-2">
            <img className='img-fluid filterSize' src={img} alt="" />
            </div>

            <div className="col-md-2">
            <img className='img-fluid filterSize' src={img} alt="" />
            </div>

            <div className="col-md-2">
            <img className='img-fluid filterSize' src={img} alt="" />
            </div>

            <div className="col-md-2">
            <img className='img-fluid filterSize' src={img} alt="" />
            </div>

            <div className="col-md-2">
            <img className='img-fluid filterSize' src={img} alt="" />
            </div>

           
        </div>
    </div>
  )
}

export default Filters