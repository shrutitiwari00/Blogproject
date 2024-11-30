import React, { useContext } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Datacontext from '../../Datacontext';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa'; 
import { FaThumbsUp, FaShareAlt } from 'react-icons/fa';

import './Categorydetail.css';  
import Footer from './Footer';
import { Link } from 'react-router-dom';
const Categorydetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();  
  const data = useContext(Datacontext);
  
  // Find the post by id
  const post = data.find((item) => item.id === parseInt(id));

  const fitnessData1 = data.filter((item) => item.category === "Fitness" && item.id === 36);
  console.log(fitnessData1);

  const foodData1 = data.filter((item) => item.category === "Food" && item.id === 61);
  console.log(foodData1);

  const hollywoodData2 = data.filter((item) => item.category === "Hollywood" && item.id === 82);
  console.log(hollywoodData2);

  // Function to limit the description and title
  const limitdescription = (text) => {
    const words = text.split(' ');
    return words.slice(0, 30).join(' ') + (words.length > 30 ? '...' : '');
  };
 
  const today = new Date().toLocaleDateString();

  return (
    <>
    <div className='main'>

    <div className="like-share-box">
          <FaThumbsUp className="like-share-icon" title="Like" />
          <FaShareAlt className="like-share-icon" title="Share" />
        </div>
     
      <div className='head'>
        <span className='vertical'>The</span>
        <h1 className='sir'>Siren</h1>
      </div>
      
      <button className="back-button" onClick={() => navigate(-1)}>
        &larr; Back
      </button>

       <div className='post-box'>
      {post && (
        <div className="post-detail">
          <h1 className='post-title'>{post.title}</h1>
          <div className='detail-box'>
         
          <div className="user-details">
                    <img 
                      src="https://static.vecteezy.com/system/resources/previews/008/442/086/original/illustration-of-human-icon-user-symbol-icon-modern-design-on-blank-background-free-vector.jpg" 
                      alt="User" 
                      className="user-image"
                      width="90px"
                      height="70px"
                    />
                    <div className='about'>
                    <h4>Shruti tiwari</h4>
                    <span className="post-date">{today}</span>
                    </div>
                  </div>
          
          
          <div className='icon-box'>
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                    <FaFacebook className="social-icon" />
                  </a>
                  <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
                    <FaTwitter className="social-icon" />
                  </a>
                  <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                    <FaInstagram className="social-icon" />
                  </a>
                  <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
                    <FaLinkedin className="social-icon" />
                  </a>
          </div>
          </div>
          <img src={post.img_url} alt={post.title} className="post-image" />
          <p className='post-description'>{post.description}</p>   
        </div>
      )}
      </div>

<div className='latest-section'>
          <div>
            <h1 className='latest-text'>More from Siren</h1>
          </div>
          <div className='latest-div'>
            <div className='latest-box latest-box1'>
              {fitnessData1.map((item) => (
                <Link to={`/detail/${item.id}`} className='link-bolly' key={item.id}>
                  <div className='la-box'>
                    <img src={item.img_url} alt={item.title} className='latest-image' />
                    <h2 className='latest-title'>{item.title}</h2>
                    <p className='latest-description'>{limitdescription(item.description)}</p>
                  </div>
                </Link>
              ))}
            </div>
            <div className='latest-box latest-box2'>
              {foodData1.map((item) => (
                <Link to={`/detail/${item.id}`} className='link-bolly' key={item.id}>
                  <div className='la-box'>
                    <img src={item.img_url} alt={item.title} className='latest-image' />
                    <h2 className='latest-title'>{item.title}</h2>
                    <p className='latest-description'>{limitdescription(item.description)}</p>
                  </div>
                </Link>
              ))}
            </div>
            <div className='latest-box latest-box3'>
              {hollywoodData2.map((item) => (
                <Link to={`/detail/${item.id}`} className='link-bolly' key={item.id}>
                  <div className='la-box'>
                    <img src={item.img_url} alt={item.title} className='latest-image' />
                    <h2 className='latest-title'>{item.title}</h2>
                    <p className='latest-description'>{limitdescription(item.description)}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>

      <div className="footer">
      <Footer />
      </div>
      </div>
    </>
  );
};

export default Categorydetail;
