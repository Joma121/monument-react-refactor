import React from 'react';

import About from "../about"
import Gallery from "../gallery"
import Contact from "../contact"
import Archive from "./archive"

class Landing extends React.Component {


    render () {
        return (
            <>
            <Archive />
            <About/>
            <Gallery/>
            <Contact/>
            </>
        )
    }
}
export default Landing