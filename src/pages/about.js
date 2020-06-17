import React from "react"

function About (){
    return (
        <section id="main-info" class="clearfix">

        <h1 className="logo">
            <p>About me</p>
            </h1>
            <img id="profilePic" rel="profilepic" src="./public/assets/images/ProfilePic.png" alt="Ryan Antonelli"/>
            <div className="aboutMe">
                <p>
                   
                </p>
                <br />
                <p id="thingsAboutMe">Here are some details about me:
                    <ul>
                        <li>
                            I am married with a son who is 3 years old.
                        </li>
                        <li>
                            I am a third-generation resident of Davis, CA.
                        </li>
                        <li>
                            I am a classically trained singer.
                        </li>
                        <li>
                            I spend much of my free time reading, writing and spending time with my family.
                        </li>
                        
                <li>
                   I enjoy gardening, though I currently seem to have a bit of a brown thumb. Someday I will figure it out. Probably.
                </li>
                <li>
                   I am a passionate advocate for renewable energy and worked in that industry for several years.
                </li>
                <li>
                   My human son looks just like me. My other son-- who is a black lab-- does not.
                </li>
            </ul>
        </p>
        <br />
        <p>
            Thank you for visiting, and I look forward to hearing from you!
        </p>
            </div>
        </section>
    )
}

export default About;