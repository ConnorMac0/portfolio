import React from "react";
import {projects} from "../assets/projects.js"

const Gallery = () => {
    return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-4 p-2">
        {projects.map((project,index) => (
            <a key={index} href={project.link} target="_blank" className={`${
                index % 2 === 0 ? "row-span-2" : "row-span-1"
              }`}>
                <img src={project.image} alt="" className="w-full h-full object-cover"/>
            </a>
        ))}
    </div>
    )
}

export default Gallery;