import React, { useState } from 'react';
import ProjectHolder from "./ProjectHolder";

function Portfolio() {
    const [projects] = useState([
        {
            video: "https://drive.google.com/file/d/1n4jslTaLJ_KU4TN7BTYjn4Qatf4nxQTL/preview",
            name: "National Park Finder",
            github: "https://github.com/caseofbase18/NationalParkFinder",
            deployed: "https://caitlinritawhite.github.io/NationalParkFinder/"
        },
        {
            image: "note_taker_home.png",
            name: "National Park Finder",
            github: "https://github.com/caseofbase18/NationalParkFinder",
            deployed: "https://caitlinritawhite.github.io/NationalParkFinder/"
        }
    ])

    return (
        <div>
            <div className="container-fluid">
                <div className="row">
                    {/* <div className="col-xl-4 col-lg-4 col-md-12 col-sm-12">
                        <h2>Casey Natale Maltese</h2>
                    </div> */}

                    <div className="col-3"></div>
                    
                    <div className="col-xl-5 col-lg-5 col-md-12 col-sm-12">
                        <ul className="nav justify-content-center">
                            <li className="nav-item">
                                <a className="nav-link active" href="index.html" target="_blank" rel="noreferrer">About</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="portfolio.html">Portfolio</a>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="container-fluid">
                    <div className="row">
                        <div className="col-12" style={{border:'1px solid grey'}}></div>
                    </div>
                </div>

                <div className="container-fluid">
                    <div className="row">
                        <div className="col-xl-9 col-lg-9 col-md-12 col-sm-12" id="portfolio">
                            <h3>Portfolio</h3>

                            {projects.map(project => (
                                <ProjectHolder name={project.name} github={project.github} video={project.video} image= {project.image} deployed={project.deployed}/>
                            ))}
                        </div>

                        {/* <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                            <iframe src="./assets/images/GumShoe Presentation.mp4"
                                width="350" height="300" className="video"></iframe>
                            <div className="text-block">
                                <h5><a href="https://evening-badlands-50066.herokuapp.com/" target="_blank" rel="noreferrer">GumShoe</a>
                                </h5>
                                <p><a href="https://github.com/caseofbase18/GumShoe" target="_blank" rel="noreferrer">GitHub Repo</a></p>
                            </div>
                        </div> */}
                    </div>
                </div>
            </div>

            {/* <div className="row">
                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                    <img src="./assets/images/vegburg1.png" alt="jsquiz" className="img-thumbnail" style={{height:'300px'}}></img>
                    <div className="text-block">
                        <h5><a href="https://afternoon-caverns-35629.herokuapp.com/" target="_blank" rel="noreferrer">Eat-Da-Burger!</a></h5>
                        <p><a href="https://github.com/caseofbase18/burger" target="_blank" rel="noreferrer">GitHub Repo</a></p>
                    </div>
                </div>
            </div> */}

            {/* <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                <img src="./assets/images/workdayplanner.png" alt="planner" className="img-thumbnail" style={{height:'300px'}}></img>
                <div className="text-block">
                    <h5><a href="https://caseofbase18.github.io/work_day_scheduler/" target="_blank" rel="noreferrer">Workday Planner</a>
                    </h5>
                    <p><a href="https://github.com/caseofbase18/work_day_scheduler" target="_blank" rel="noreferrer">GitHub Repo</a></p>
                </div>
            </div> */}

            {/* <div className="row">
                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                    <img src="./assets/images/note_taker_home.png" alt="" class="img-thumbnail" style={{height:'300px'}}></img>
                    <div className="text-block">
                        <h5><a href="https://gentle-inlet-29060.herokuapp.com/" target="_blank" rel="noreferrer">Note Taker</a>
                        </h5>
                        <p><a href="https://github.com/caseofbase18/note_taker" target="_blank" rel="noreferrer">GitHub Repo</a></p>
                    </div>
                </div>

                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                    <img src="./assets/images/randompwgenerator.png" alt="pwgenerator" className="img-thumbnail"
                        style={{height:'300px'}}></img>
                    <div className="text-block">
                        <h5><a href="https://caseofbase18.github.io/password_generator/" target="_blank" rel="noreferrer">Random Password
                                        Generator</a></h5>
                        <p><a href="https://github.com/caseofbase18/password_generator" target="_blank" rel="noreferrer">GitHub Repo</a></p>
                    </div>
                </div>
                <div className="col-6"></div>
            </div> */}

            {/* <div className="col-3"></div> */}
        </div>
    );
}

export default Portfolio;