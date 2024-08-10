import React from 'react';
import Course from '../Course/Course';
import './AllCourses.css'

const AllCourses = (props) => {
     const courses = props.courses;
     return (
          <>
          <div className="all-course-title">
               <h2>Our Short and Specific <span className="heading-span">Skill Courses</span></h2>
               <p className="text-muted">Dive deep into the world of coding, design, or digital marketing in <br />
                    our short time, step-by-step programs.</p>
          </div>
          <div className='container-xxl courses'>
               <div className="row row-cols-1 row-cols-md-4 g-4">
               {
                    courses.map(course => <Course key={course.id} course={course}></Course>)
               }
               </div>
          </div>
          </>
     );
};

export default AllCourses;