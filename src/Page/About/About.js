import React from 'react'
import "../../Component/Css/Aboutme.css"

function About() {
  return (
  <>
  <div class="aboutus-section">
        <div class="container">
            <div class="row">
                <div class="col-md-3 col-sm-6 col-xs-12">
                    <div class="aboutus">
                        <h2 class="aboutus-title">About Me</h2>
                        <p class="aboutus-text">Hello! My name is Mayank Singh and I enjoy creating things that live on the internet. My interest in web development started back in 2016 </p>
                        <p class="aboutus-text">Fast-forward to today, and I’ve had the privilege of working at  a start-up, a huge corporation, My main focus these days is building accessible, inclusive products and digital experiences at Upstatement for a variety of clients.</p>
                      
                    </div>
                </div>
                <div class="col-md-3 col-sm-6 col-xs-12">
                    <div class="aboutus-banner" >
                        <img  src="https://scontent.fblr22-1.fna.fbcdn.net/v/t1.6435-9/30716612_1490150631112130_6086157628403089408_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=174925&_nc_ohc=x08BGrT1YfsAX8nGLwR&_nc_ht=scontent.fblr22-1.fna&oh=00_AT8UCEM1ihPj_PqU7onIkeBxp5Ph3YA3ea97Ofi4V3OOwQ&oe=62F7314D" alt="profile" height="300px"class="profile" style={{borderRadius:"20px",  }}/>
                    </div>
                </div>
                <div class="col-md-5 col-sm-6 col-xs-12">
                    <div class="feature">
                        <div class="feature-box">
                            <div class="clearfix">
                                <div class="iconset">
                                    <span >
                                        <img src='https://cdn0.iconfinder.com/data/icons/education-141/64/education-128.png' alt="icon" height="50" />
                                    </span>
                                </div>
                                <div class="feature-content">
                                <h4 class="aboutus-title">Education </h4>
                                    <p class="aboutus-text">B. TECH | 2016 | TECHNO INDIA COLLEGE OF TECHNOLOGY</p>
                                    <p class="aboutus-text">Major: Computer Science Engineering</p>
                                   
                                </div>
                            </div>
                        </div>
                        <div class="feature-box">
                            <div class="clearfix">
                                <div class="iconset">
                                <span >
                                        <img src='https://cdn2.iconfinder.com/data/icons/edutainment-indigo-vol-2/256/Language_Lab-128.png' alt="icon"  height="50"/>
                                    </span>
                                </div>
                                <div class="feature-content">
                                    <h4 class="aboutus-title">Language Known </h4>
                                    <p class="aboutus-text">English, Hindi, Maithili, Bhojpuri.</p>
                                </div>
                            </div>
                        </div>
                        <div class="feature-box">
                            <div class="clearfix">
                                <div class="iconset">
                                <span >
                                        <img src='https://cdn1.iconfinder.com/data/icons/business-mix-3/100/business-16-128.png' alt="icon" height="50"/>
                                    </span>
                                </div>
                                <div class="feature-content">
                                <h4 class="aboutus-title">Extra Curricular Activities</h4>
                                    <p class="aboutus-text"> Cooking, Playing Cricket, Listening to Music. </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  </>

    

  )
}

export default About