import React, {useState, useEffect} from 'react'
import './Navbar.css'

const Footer = () => {
 
    const[isVisible,setIsVisible]=useState(false);

    const toggleVisibility = () =>{
        if(window.scrollY > 300){
            setIsVisible(true);
        }
        else{
             setIsVisible(false);
        }
    };
     const scrolltotop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
     };

     useEffect(() => {
        window.addEventListener('scroll',toggleVisibility);
        return () =>
            window.removeEventListener('scroll',toggleVisibility);
     }, []);

  return (
   <>
   <div className='main-footer'>
    <div className='siren-footer'>
   <div className='header'>
        <span className='rotate'>The</span>
        <h1 className='siren-foot'>Siren</h1>
      </div>
      <p>The Siren is an informational website published 
        on the World Wide Web for providing details of different category.</p>
      </div>
      <div className='sevices'>
        <h2>Services</h2>
         <p>Home</p>
         <p>Bollywood</p>
         <p>Technology</p>
         <p>Hollywood</p>
         <p>Fitness</p>
         <p>Food</p>
      </div>
      <div className='resources'>
        <h2>Resources</h2>
        <p>Blog</p>
        <p>Help Center</p>
        <p>Contact us</p>
      </div>
      <div className='footer-text'>
        <h1 className='foot-text'>Get Ready to Enjoy on the Blog-Machine !!!</h1>
       
        <button onClick={scrolltotop} className='to-top'>Back to top</button>
        
      </div> 
      {/* <button onClick={scrolltotop} className='to-top'>Back to top</button>     */}
   </div>
   </>
  )
}

export default Footer