import React from 'react';
import fakeData from '../../fakeData'
import { useState } from 'react';
import Coursess from '../Coursess/Coursess';
import Cart from '../Cart/Cart';
import 'bootstrap/dist/css/bootstrap.min.css';


const Display = () => {
    const availableCourses = fakeData;
    const [courses, setCourses] = useState([])


    const [cart, setCart] = useState([]);
    const clickHandler=(event) =>{
        const newCart = [...cart, event];
        setCart(newCart);
    }



    return (
        <div >

            <div className="row">
                <div className="col-lg-8">
                <div className="course-list">
            <h1>Available Courses: {availableCourses.length}</h1>
    {
        availableCourses.map(sent => <Coursess course={sent} clickHandler={clickHandler}></Coursess>)
    }
            </div>
                </div>
                <div className="col-lg-4 ml-auto">
            <Cart cart={cart}></Cart>
                </div>
            </div>
           

           
        </div>
    );
};

export default Display;