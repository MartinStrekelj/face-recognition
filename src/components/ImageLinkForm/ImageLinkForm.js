import React from "react";
import "./ImageLinkForm.css"

const ImageLinkForm = ({ onInputChange, onButtonSubmit }) =>{
    return (
        <div>
            <div className="">
                <p className="f3 ">
                    {"This Magic Brain will detect faces in your pictures. Give it a try!"}
                </p>
            </div>
            <div className="center">
                <div className="form center pa4 br3 shadow-5">
                    <input type="text" className="f4 pa2 w-70 center" onChange={onInputChange}/>
                    <button className="w-30 grow f4 link ph3 dib ba black bg-light-green pointer" onClick={onButtonSubmit}>Detect</button>
                </div>
            </div>
        </div>
    );
}

export default ImageLinkForm;