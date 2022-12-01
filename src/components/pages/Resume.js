import React from "react";
import ResumePdf from '../../assets/resume/Jake Schlei Resume.pdf'


function Resume() {
    return (
        <div className="skills-page">
        <div className="d-flex justify-content-center m-5">
            <a className="resume-link" href={ResumePdf} download>
            Click to download resume!
            </a>
        </div>
        <div>
            <h3 className="d-flex justify-content-center m-5">Skills</h3>
            <div className="d-flex justify-content-around m-5">
                <img className="skills" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" alt=""/>
                <img className="skills" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" />
                <img className="skills" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" alt=""/>
                <img className="skills" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" alt=""/>
                <img className="skills" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" alt=""/>
                <img className="skills" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/graphql/graphql-plain.svg" alt=""/>
                <img className="skills" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" alt=""/>
                <img className="skills" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jquery/jquery-original.svg" alt=""/>
                <img className="skills" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" alt=""/>
                <img className="skills" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" alt=""/>
                <img className="skills" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/handlebars/handlebars-original.svg" alt=""/>
            </div>

 
        </div>
        </div>
    )
};


export default Resume;