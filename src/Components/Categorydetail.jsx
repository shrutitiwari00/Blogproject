import React, { useContext } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Datacontext from '../../Datacontext';
import Navbar from './Navbar';
import './Categorydetail.css';  
import Footer from './Footer';
const Categorydetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();  
  const data = useContext(Datacontext);
  
  // Find the post by id
  const post = data.find((item) => item.id === parseInt(id));

  return (
    <>
      <Navbar />

      {/* Back Button */}
      <button className="back-button" onClick={() => navigate(-1)}>
        &larr; Back
      </button>

      {/* Display Post Details */}
      {post && (
        <div className="post-detail">
          <h1>{post.title}</h1>
          <img src={post.img_url} alt={post.title} className="post-image" />
          <p>{post.description}</p>

          <div className='footer-post'>
            {/* Footer content goes here */}
          </div>
        </div>
      )}
      <Footer/>
    </>
  );
};

export default Categorydetail;
