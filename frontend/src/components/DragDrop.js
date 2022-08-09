import React from "react"
import { useNavigate } from "react-router-dom";
import "./css/dragdrop.css"
import "./ImageEditor"

const DragDrop = () => {

  const navigate = useNavigate();

  const uploadImage = (e) => {
    const file = e.target.files[0]
    // setSelThumbnail(file.name)
    const fd = new FormData()
    fd.append("myfile", file)
    fetch("http://localhost:5000/util/uploadfile", {
      method: "POST",
      body: fd,
    }).then((res) => {
      console.log(res.status)
      if (res.status === 200) {
        console.log("uploaded")
        res.json().then((data) => {
          console.log(data)
          // setMainImg(data.url)
          navigate('/imageditor');
          sessionStorage.setItem("mainImg", data.url)

        })
      }
    })
  }
  return (
    <div className="background">
    <div className="drag-resize">
    <div className="upload">
      <div className="upload-files">
        <header>
          <p>
            <i className="fa fa-cloud-upload" aria-hidden="true"></i>
            <span className="up">up</span>
            <span className="load">load</span>
          </p>
        </header>
        
                <input className="" hidden id="uploader" type="file" onChange={(e) => uploadImage(e)} />
        <div className="body" id="drop" onDrop={e => {
          console.log(e.target.files[0].name)
          e.preventDefault();
        }}
        onDrag={e => e.preventDefault()}
        onDragOver={e => e.preventDefault()}
        onDragLeave={e => e.preventDefault()}
        >
          <i className="fa fa-file-text-o pointer-none" aria-hidden="true"></i>
          <p className="pointer-none">
            <b>Drag and drop</b> files here <br /> or{" "}

            <label htmlFor="uploader" onDrop={(e) => {
                    e.preventDefault()
                    console.log(e.type);}}>
                    <b>Select File</b>
                </label>
            to begin the upload   
          </p>
          <input type="file" multiple="multiple" />
        </div>
        <footer>
          <div className="divider">
            <span>FILES</span>
          </div>
          <div className="list-files"></div>
          <button className="importar">UPDATE FILES</button>
        </footer>
      </div>
    </div>
    </div>
    </div>
  )
}

export default DragDrop
