import React from 'react';
import './Course.css'
import { Card } from 'react-bootstrap';
import Rating from 'react-rating';
import { Link } from 'react-router-dom';

const Course = (props) => {
     const { courseName, rate, imgURL, courseOwner, level, price, id } = props.course;

     return (
          <div className="col">
               <Card className='h-100'>
                    <Card.Img variant="top" src={imgURL} />
                    <Card.Body>
                    <Link className="course-name" to={`/courses/${id}`}><Card.Title>{courseName}</Card.Title></Link>
                         <p className="text-muted">by {courseOwner}</p>
                    </Card.Body>
                    <Card.Footer className="d-flex justify-content-between align-items-center">
                         <p className="course-rate">${price}</p>
                         <p>{level}</p>
                         <p>
                         <Rating
                              initialRating={rate}
                              emptySymbol="far fa-star"
                              fullSymbol="fas fa-star"
                              readonly
                         />
                         </p>
                    </Card.Footer>
                    
               </Card>
          </div>
     );
};

export default Course;