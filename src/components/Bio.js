import React from 'react';

function Bio() {
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
                                <a className="nav-link active" href="index.html">About</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="portfolio.html" target="_blank" rel="noreferrer">Portfolio</a>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="container-fluid">
                    <div className="row">
                        <div className="col-12" style={{border: '1px solid grey'}}></div>
                    </div>
                </div>

                <div className="container-fluid">
                    <div className="row">
                        <div className="col-xl-8 col-l-8 col-md-8 col-sm-12" id="about">
                            <h3>About Me</h3>
                            <img src="./assets/images/Casey1.jpg" alt=""></img>
                            <p>
                                Casey Natale Maltese is a student in the University of Miami Coding Boot Camp.  She is  currently residing in Miami, Florida. Born in
                                Texas, Casey spent her childhood in Texas, New Jersey, and South Carolina. She played soccer and participated in dance as a youngster, but at the age of 11 she discovered what would utlimately change the course of her life: music. She began playing the clarinet in her school's sixth-grade band, and then switched to the French horn a few months later. This switch to the French horn opened a world of opportunities in which she eagerly took advantage, and ultimately led to
                                scholarships to study music performance at the Florida State University and the University of Miami. Upon completion of her education, Casey embarked on a career as an educator and freelance French horn player in South Florida.
                                </p>
                            <p>
                                In her spare time, Casey can be found training for or running in 5k, 10k, and half-marathon
                                races. She can also be found cooking, painting, occasionally SCUBA diving, listening to music, and doing anything creative. She is now exploring the world of web development in hopes of opening more creative and professional opportunities.
                                 </p>
                        </div>

                        <div className="col-xl-4 col-l-4 col-md-4 col-sm-12" id="contact">
                            <h3>Contact Info</h3>
                            <ul>
                                <li>
                                    <b>Email:</b> <a href="mailto:caseymaltese@gmail.com">caseymaltese@gmail.com</a>
                                </li>
                                <li>
                                    <b>Github:</b> <a href="https://github.com/caseofbase18" target="_blank" rel="noreferrer">@caseofbase18</a>
                                </li>
                                <li>
                                    <b>Resume:</b> <a href="./assets/images/ProResume1.1.pdf" target="_blank" rel="noreferrer">Click Here!</a>
                                </li>
                                <li>
                                    <b>LinkedIn:</b> <a
                                        href="https://www.linkedin.com/in/casey-natale-maltese" target="_blank" rel="noreferrer">Click Here!</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Bio;