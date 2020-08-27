import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import "react-bootstrap/Button"
import Button from 'react-bootstrap/Button';
const MiniList = (props) => {
 const {name, price, course,photo, students} = props.miniList;
    
 const style = {
     background: '#f4f4f4',
     margin: '5px 0' ,
     borderRadius: '10px'
 }
    return (
        <div> 
        <div>
            <div className="row bg-danger p-4 text-white my-2 rounded">
                <div className="col-lg-5">
        <img src={photo} alt=""/>
                </div>
                <div className="col-lg-8">
                <p>{course}</p>

                <Button className="btn btn-primary text-white">Start Course</Button>

                </div>
            </div>
        </div>
                
        </div>
    );
};

export default MiniList;