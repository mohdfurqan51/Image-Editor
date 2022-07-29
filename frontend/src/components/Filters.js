import React, { useEffect, useState } from "react"
import "./css/filters.css"

const Filters = ({ userid, setOptions, filterArray, setFilterArray, getUserFilter, loading }) => {
  const img =
    "https://images.unsplash.com/photo-1495615080073-6b89c9839ce0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8c3F1YXJlfGVufDB8fDB8fA%3D%3D&w=1000&q=80"
  
  

  

  useEffect(() => {
    getUserFilter()
  }, [])

  const showFilters = () => {
    if (!loading)
      return filterArray.map((filter) => (
        <div className="col-md-2" onClick={e => setOptions([...filter.values]) }>
          <img className="img-fluid filterSize d-block m-auto" src={img} alt="" />
          <p className="text-center">{filter.name}</p>
        </div>
      ))
  }

  return (
    <div className="container filter">
      <div className="row mt-4 mb-4">{showFilters()}</div>
    </div>
  )
}

export default Filters
