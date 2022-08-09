import React from "react"
import "./css/dragdrop.css"
import "./ImageEditor"

const DragDrop = () => {
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
        <div className="body" id="drop" onDrop={e => {
          console.log(e.target.files[0].name)
        }}>
          <i className="fa fa-file-text-o pointer-none" aria-hidden="true"></i>
          <p className="pointer-none">
            <b>Drag and drop</b> files here <br /> or{" "}
            <a href="" id="triggerFile">
              browse
            </a>{" "}
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
