import React, { useState } from 'react';
import './SignUp.scss';
import { Link } from "react-router-dom";
import { useQuery, useMutation } from "@apollo/react-hooks";
import { QUERY_TOURNAMENT, QUERY_COURSES, QUERY_HOTELS } from '../../utils/queries';


 

// import { images } from '../../constants';
// import { client } from '../../client';


const SignUp = () => {
  const [formData, setformData] = useState({ name: '', email: '', message: ''});
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);


  const { tournamentData } = useQuery(QUERY_TOURNAMENT);
  const { courseData } = useQuery(QUERY_COURSES);
  const { hotelData } = useQuery(QUERY_HOTELS);


const tournament = tournamentData?.query.tournaments || [];
  const course = courseData?.query.courses || [];
  const hotel = hotelData?.query.hotels || [];


  const {name, email } = formData;

  const handleChangeInput = (e) => {
    const { name, value } = e.target;

    setformData({ ...formData, [name]: value });
  }

  const handleSubmit = () => {
    setLoading(true);

    const contact = {
      _type: 'contact',
      firstName: name,
      lastName: name,
      email: email,
    }
    // client.create(contact)
    // .then(() => {
    //   setLoading(false);
    //   setIsFormSubmitted(true);
    // })
  }
  return (
    <div id="signUp">
    <h2 className='head-text'>Sign Up For</h2>
    <h2 className='tournament-text'> {tournament.name} </h2>
    <h3 className='course-text'> At {tournament.course}</h3>
    <h4 className='date-text'> From {tournament.startDate} To {tournament.endDate}</h4>

    <div className='app__signUp-cards'>
        <div className='app__signUp-card'>
            {/* <img src={images.email} alt="email" /> */}
            <a href='mailto: earlybirdiegolf.com ' className='p-text'>earlybirdiegolf.com</a>
        </div>
        <div className='app__signUp-card'>
            {/* <img src={images.mobile} alt="mobile" /> */}
            <a href='tel: +1 ' className='p-text'>Club Phone???????</a>
        </div>
    </div>

    
    {!isFormSubmitted ? 
    <form className='app__signUp-form'>
     
          <input type='text' placeholder='First Name' name='firstName' value={name} onChange={handleChangeInput} />
      
      
      
          <input type='text' placeholder='Last Name' name='lastName' value={name} onChange={handleChangeInput} />
      

      
          <input type='email' placeholder='email' name='email' value={email} onChange={handleChangeInput} />
      
<h2 className='accommodation'>
  Accommodations
</h2>
     
      <div className='button_list'>
        <button type='button' >{'Single'}</button>
        <button type='button' >{'Double'}</button>
        <button type='button' >{'Golf Only'}</button>
      </div>

      {/* <div className='button_list'>
      
        </div> */}
        
     
    <div className='app__flex'>
      <button type='button' className='submitBtn' onClick={handleSubmit}>{loading ? 'Signing Up For Trip' : 'Sign Up For Trip'}</button>
    </div>
    
    </form>
    : 
    <div>
      <h3 className='head-text'>See You On The Course!</h3>
    </div>
    }
    </div>
  );
}

export default SignUp;