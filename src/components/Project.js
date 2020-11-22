import React, { Component } from "react";

import Header from "./Header";
import Bio from "./Bio";
import Portfolio from "./Portfolio";
import Footer from "./Footer";

class Project extends Component {

    render() {
        return (
            <div className= "container fluid">
                <Header />
                <Bio />
                <Portfolio />
                <Footer />
            </div>
        )
    }
}


export default Project;