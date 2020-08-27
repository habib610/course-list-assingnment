import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "react-bootstrap";
const Coursess = (props) => {
  const { name, price, course, photo, students } = props.course;
  return (
    <div >
      <div className="row bg-dark  m-4 py-3 rounded rounded"  >
        <div className="col-lg-4  ">
          <img src={photo} alt="" className="w-100 img-fluid"/>
        </div>
        <div className="col-lg-8 text-white">
          <div className="content">
            <h3>Courses: {course}</h3>
            <h4 className="text-warning">{name}</h4>
            <p>Student: {students}</p>
            <h3>Price: ${price}</h3>
            <Button className="bg-danger"  onClick={() => props.clickHandler(props.course)}>Enroll Now</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Coursess;
