import React, {Fragment}from 'react';
import "./loader.css"

const Loader = (props) => {

    return (
        <div className="loader">
            <div className="circle"></div>
            <div className="circle"></div>
            <div className="circle"></div>
        </div>
    )
}
// Export the component as the default object
export default Loader;
