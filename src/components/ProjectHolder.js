import React, { useState } from 'react';


function ProjectHolder(props) {

    return (
        <div className="row">
            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                {props.video && <iframe src={props.video}
                    width="350" height="300" className="video"></iframe>}
                {props.image && <img src={require(`../assets/images/${props.image}`)} className="img-thumbnail" style={{ height: '300px' }}></img>}
                <div className="text-block">
                    <h5><a href={props.deployed} target="_blank" rel="noreferrer">{props.name}</a>
                    </h5>
                    <p><a href={props.github} target="_blank" rel="noreferrer">GitHub Repo</a></p>
                </div>
            </div>
        </div>
    )
}

export default ProjectHolder;