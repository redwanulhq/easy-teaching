import React from 'react';
import './HomeHero.css'
import hero1 from '../../assets/images/hero1.png'
import hero2 from '../../assets/images/hero2.png'
const HomeHero = () => {
     return (
          <section className="home-hero">
               <div className="container-xxl">
                    <div className="row align-items-center">
                         <div className="col-xl-6 d-flex align-items-center">
                              <div className='hero-content'>
                                   <h1>Build Skills with Online Courses from expert instructor</h1>
                                   <p className='lead'>Start streaming on-demand video lectures today from top level instructors Attention heatmaps.</p>
                                   <div className="hero-search-field">
                                        <input type="search" placeholder="What do you want to learn?" />
                                        <button>Search</button>
                                   </div>
                              </div>
                         </div>
                         <div className="col-xl-6">
                              <div className="hero-img-container">
                                   <img src={hero1} alt="" />
                                   <img className='floating-img' src={hero2} alt="" />
                              </div>
                         </div>
                    </div>
               </div>     
          </section>
     );
};

export default HomeHero;