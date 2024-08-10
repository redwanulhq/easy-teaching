import React from 'react';
import './Courses.css'
import Course from '../Course/Course';
import { Link } from 'react-router-dom';

const Courses = (props) => {
     const courses = props.courses.slice(0,4);
     return (
          <div className='container-xxl courses'>
               <div className="courses-header">
                    <h2>Thousands of courses authored by <br />
                    our network of <span className="heading-span">industry experts</span></h2>
               </div>
               <div className="row row-cols-1 row-cols-md-4 g-4">
               {
                    courses.map(course => <Course key={course.id} course={course}></Course>)
               }
               </div>
               <div className="browse-course-btn">
                    <Link to="/courses">Browse Our Courses</Link>
               </div>
          </div>
     );
};

export default Courses;