import React from "react";

const Footer = () => {
    return (
    <div className="flex justify-around gap-2 p-10 md:p-20 text-2xl md:text-3xl md:mx-[30%]">
        <a href="https://github.com/ConnorMac0"><i className="fa-brands fa-github"></i></a>
        <a href="https://www.linkedin.com/in/connor-maclachlan/"><i className="fa-brands fa-linkedin"></i></a>
        <a href={`mailto:connormac000@gmail.com`}><i className="fa-solid fa-envelope"></i></a>
    </div>
    )
}

export default Footer;