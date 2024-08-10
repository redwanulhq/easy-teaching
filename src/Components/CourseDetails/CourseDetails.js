import React from 'react';
import './CourseDetails.css'
import { useParams } from 'react-router-dom'
import Rating from 'react-rating';
import NotFound from '../NotFound/NotFound';
const CourseDetails = (props) => {
     const courses = props.courses;
     const { id } = useParams()
     if (courses.length != 0) {
          const clickedCourse = courses[id - 1];
          const { courseOwner, courseName, level, price, imgURL, authorImg, rate, excerpt, description } = clickedCourse;
          return (
               <div>
                    <div className="course-details-thumb">
                         <img src={imgURL} alt="" />
                    </div>
                    <div className="container details-container">
                         <div className="details-header">
                              <h2>{courseName}</h2>
                              <p className="excerpt text-muted">{ excerpt }</p>
                         </div>
                         <div className="details-body">
                              <div className="course-info">
                                   <h4>Course Info</h4>
                                   <div className="d-flex author justify-content-between align-items-center">
                                        <p>Author {courseOwner}</p>
                                        <img className="author-img" src={authorImg} alt="" />
                                   </div>
                                   <div className="d-flex justify-content-between">
                                        <p>Rating</p>
                                        <Rating
                                             initialRating={rate}
                                             emptySymbol="far fa-star"
                                             fullSymbol="fas fa-star"
                                             readonly
                                        />
                                   </div>
                                   <div className="d-flex justify-content-between">
                                        <p>Level</p>
                                        <p>{ level }</p>
                                   </div>
                                   <div className="d-flex justify-content-between">
                                        <p>Price</p>
                                        <p>${ price }</p>
                                   </div>
                                   <div className="d-flex justify-content-between">
                                        <p>Rating</p>
                                        <p>3*</p>
                                   </div>
     
                              </div>
                              <div className="course-description">
                                   <h4>Description</h4>
                                   <p>{description}</p>
                                   <button className="enroll-btn">Enroll Now</button>
                              </div>
                         </div>
                    </div>
               </div>
          );
     } else {
          return <NotFound></NotFound>
     }

     
};

export default CourseDetails;