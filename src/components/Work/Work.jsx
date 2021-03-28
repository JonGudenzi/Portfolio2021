import React, {useState} from "react";
import "./Work.css";
// import homeImg from "../../assets/img/sunny.jpeg";


function Work (props){

const {workData} = props
return(
    <div >
        {workData.map((data, index)=>{
        return(
            
            <div key={index} className="workItem">
                
                    <p>{data.desc}</p>  
                    <a href={data.github}
                        target={data.github}>
                        <div className="title">
                            <h3>{data.title}</h3>
                            <p>{data.language}</p>
                        </div>
                    </a>
                    <div className="githubLink">
                        <a href={data.github}
                            target={data.github}>
                            <p className="githubText">Github Repo</p>
                        </a>
                    </div>
                </div>
        )
    })}
                
        </div>
)
}

export default Work;