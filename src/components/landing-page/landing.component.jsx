import React from 'react'
import './landing.css'
import { Animator, ScrollPage, MoveOut } from "react-scroll-motion";
import {Link} from 'react-scroll'
const LandingPage = () => {
  return (
    <ScrollPage page={0}>
        <section className="showcase">
			<div className="video-container">
				<video autoPlay muted loop>
                    <source src="assets/videos/radio.mp4" type='video/mp4'/>
                </video>
			</div>
			<div className="content">
                <Animator animation={MoveOut(-500, 0)}>
                <h1 className="title">Lucy Ourique</h1>
                </Animator>
                <Animator animation={MoveOut(500, 0)}>
                <a href="#about" class="btn"><Link to="projects" spy={true} smooth={true}>View Projects</Link></a>
                </Animator>

			</div>
		</section>
    </ScrollPage>
  )
}

export default LandingPage