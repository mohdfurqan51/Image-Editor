import React, { useEffect, useState } from "react"
import SidebarItem from "./SideBarItem"
import Slider from "./Slider"
import DEFAULT_OPTIONS from "./DefaultOptions"
import Navbar from "./Navbar"
import Filters from "./Filters"

const Home = () => {
  const [selectedOptionIndex, setSelectedOptionIndex] = useState(0);
  const [options, setOptions] = useState(DEFAULT_OPTIONS);
  const selectedOption = options[selectedOptionIndex];
  const [filterName, setFilterName] = useState("");
  

  const [currentUser, setCurrentUser] = useState(JSON.parse(sessionStorage.getItem("user")))

  const [filterArray, setFilterArray] = useState([]);
  const [loading, setLoading] = useState(false);
  
  const getUserFilter = () => {
    setLoading(true)
    fetch("http://localhost:5000/filter/getbyuser/" + currentUser._id)
      .then((res) => res.json())
      .then((data) => {
        console.log(data)
        setFilterArray(data)
        setLoading(false)
      })
  }

  function handleSliderChange({ target }) {
    setOptions((prevOptions) => {
      return prevOptions.map((option, index) => {
        if (index !== selectedOptionIndex) return option
        return { ...option, value: target.value }
      })
    })
  }

  function getImageStyle() {
    const filters = options.map((option) => {
      return `${option.property}(${option.value}${option.unit})`
    })

    return { filter: filters.join(" ") }
  }

  const saveCustomFilter = () => {

    console.log(options);

    fetch("http://localhost:5000/filter/add", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: filterName,
        image: "",
        values: options,
        createdBy: currentUser._id, 
        createdAt: new Date(),
      }),
    }).then(res => {
      console.log(res)
      getUserFilter()
    })
  }

  return (
    <div>
      <Navbar />
      <div className="editor-container editor-background">
        <input className="form-control" onChange={e => setFilterName(e.target.value)} />
        
        <button className="btn btn-primary" onClick={saveCustomFilter}>
          Save Filter
        </button>
        <div className="main-image mt-5" style={getImageStyle()} />
        
        <div className="sidebar">
        
          {options.map((option, index) => {
            return (
              <SidebarItem
                key={index}
                name={option.name}
                active={index === selectedOptionIndex}
                handleClick={() => setSelectedOptionIndex(index)}
              />
              
            )
          })}
        </div>

        
        <Filters loading={loading} getUserFilter={getUserFilter} userid={currentUser._id} setOptions={setOptions} filterArray={filterArray} setFilterArray = {setFilterArray}/>
     

        <Slider
          min={selectedOption.range.min}
          max={selectedOption.range.max}
          value={selectedOption.value}
          handleChange={handleSliderChange}
        />
      </div>
    </div>
  )
}

export default Home
