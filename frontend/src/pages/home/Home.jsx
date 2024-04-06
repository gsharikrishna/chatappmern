import React from 'react';
import { Link } from 'react-router-dom';
import MessageContainer from '../../components/messages/MessageContainer';
import Sidebar from '../../components/sidebar/Sidebar';

const Home = () => {
  return (
    <div>
      <div>
        <Link style={{color:"white",marginRight:"150px"}} to="/about">About Us</Link>
        <Link style={{color:"white",marginRight:"150px"}} to="/contactus">Contact Us</Link>
        <Link style={{color:"white",marginRight:"150px"}} to="/profile">My Profile</Link>
      </div>
      <div className='flex sm:h-[450px] md:h-[550px] rounded-lg overflow-hidden bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0'>
        <Sidebar />
        <MessageContainer />
      </div>
    </div>
  );
};

export default Home;