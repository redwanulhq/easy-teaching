import React from 'react';
import './About.css'
import missionImg from '../../assets/images/mission.png'
import workWithImg from '../../assets/images/work-with.png'
const About = () => {
     return (
          <div>
               <div className="container-xl">
                    <div className="about-heading">
                         <h1>WELCOME TO EASY TEACHING,</h1>
                         <h2>WHERE TECH IS FOR <span className="heading-span">EVERYONE</span>.</h2>
                    </div>
                    <div>
                         <h2>OUR MISSION</h2>
                         <div className="content-container">
                              <p>We believe that technology doesn’t have to be so hard—and that tech is a tool that anyone can use. Our goal is to improve our students’ quality of life through digital empowerment and skills to enter high-earning and flexible careers. Our community of students, alumni, and instructors will support you as you go from total tech newbie to tech pro. We are specifically focused on getting more women, people of color, LGBTQ+ people, people with disabilities, people without college degrees, parents and caretakers, or people who’ve taken long breaks from the workforce into the tech world. If you feel like there’s no place for you in tech because you’ve never seen someone like you represented, we understand—and want you to know that you are so, so welcome here.</p>
                              <div className='img-container ms-4'>
                                   <img src={missionImg} alt="" />
                              </div>
                         </div>
                    </div>
                    <div>
                         <div className="content-container">
                              <div className='img-container w-100 me-5'>
                                   <img style={{width: 350}} src={workWithImg} alt="" />
                              </div>
                              <div>
                              <h2 className='mb-5'>WORK WITH US</h2>
                              <p>We want to create the best possible work environment for our team, with benefits that have real, positive impact on their lives and allow them freedom, flexibility, and happiness. And we want to cover our employees down the line, including paid parental leave and retirement plans. You’ll also find a wildly supportive community filled with corgi .gifs, great communication, tons of appreciation, and a focus on our employees’ quality of life. Browse our current job openings here.</p>
                              </div>
                         </div>
                    </div>
               </div>
          </div>
     );
};

export default About;