import React, { useContext, useState } from 'react'
import Navbar from './Navbar'
import Datacontext from '../../Datacontext'
import { Link } from 'react-router-dom'
import './Navbar.css'
import Topbolly from './Topbolly'
import Footer from './Footer'


const Bollywood = () => {

  const [visisble, setVisible] = useState(3);
  const[show,setShow] = useState(6);

  const data = useContext(Datacontext);
  console.log(data);

  const bollywoodData = data.filter((item) => item.category === "Bollywood");
  console.log(bollywoodData);

  const bollywoodData1 = data.filter((item) => item.category === "Bollywood" && item.id === 71);
  console.log(bollywoodData1);

  const bollywoodData2 = data.filter((item) => item.category === "Bollywood" && item.id === 65);
  console.log(bollywoodData2);

  const bollywoodData3 = data.filter((item) => item.category === "Bollywood" && item.id === 66);
  console.log(bollywoodData3);

  const handleload = () => {
    setVisible((prev) => prev + 3)
    setShow((prev) => prev+6)
  }

  //function to limit the discription
  const limitdescription = (text)=>{
    const words = text.split(' ');
    return words.slice(0,40).join(' ') + (words.length > 40 ? '...':'');
  };
  const limittitle = (text) => {
    const words = text.split(' ');
    return words.slice(0, 2).join(' ') + (words.length > 2 ? '...' : '');
  };

  return (
    <>
    <div className="mainbody">
      <Navbar />
      <div className='latest-section'> 
        <div>   
              <h1 className='latest-text'>Bollywood</h1>              
           </div>
           <div className='latest-div'>
            <div className='latest-box latest-box1'>
            {bollywoodData1.map((item) => (
                <Link to={`/detail/${item.id}`} className='link-bolly'>
                <div className='la-box'>
                    
                    <img src={item.img_url} alt={item.title} className='latest-image' />
                    
                    
                    <h2 className='latest-title'>{limittitle(item.title)}</h2>

                    <p className='latest-description'>{limitdescription(item.description)}</p>
                    
                </div>
                </Link>
            ))}
            </div>
            <div className='latest-box latest-box2'>
            {bollywoodData2.map((item) => (
                <Link to={`/detail/${item.id}`} className='link-bolly'>
                <div className='la-box'>
                    
                    <img src={item.img_url} alt={item.title} className='latest-image' />
                   
                    
                    <h2 className='latest-title'>{limittitle(item.title)}</h2>

                    <p className='latest-description'>{limitdescription(item.description)}</p>
                    
                </div>
                </Link>
            ))}
            </div>
            <div className='latest-box latest-box3'>
            {bollywoodData3.map((item) => (
                <Link to={`/detail/${item.id}`} className='link-bolly'>
                <div className='la-box'>
                    
                    <img src={item.img_url} alt={item.title} className='latest-image' />
                   
                    
                    <h2 className='latest-title'>{limittitle(item.title)}</h2>

                    <p className='latest-description'>{limitdescription(item.description)}</p>
                    
                </div>
                </Link>
            ))}
            </div>
            </div>
      </div>
      
        <div className='bolly-page'>
          <div className='bolly'>
            <div className='bolly-line'>
              <h1 className='bolly-text'>Top-Stories</h1>
              <hr />
            </div>

            {bollywoodData.slice(0, visisble).map((item) => (
              <div>

                <Link to={`/detail/${item.id}`} className='link-bolly'>
                  <div className='bollybox'>
                    <div className='image'>
                    <img src={item.img_url} alt={item.title} className='bollywood-image' />
                    </div>
                    <div className='dis-text'>
                    <h2 className='bollywood-title'>{item.title}</h2>
                    <p className='bollywood-description'>{limitdescription(item.description)}</p>
                    </div>
                  </div>
                </Link>

              </div>
            ))}

          </div>

          <div className='topbolly'>
            <div className='bolly-line'>
              <h1 className='bolly-text'>Top Posts</h1>
              <hr />
            </div>
              <div className='tp-box'>
            <Topbolly show={show} />
            </div>           
          </div>

        </div>
        <button onClick={handleload} className='button'>LoadMore</button>
        <div className='addd'>
        <h1 className='advertisement-text'>Advertisement</h1>
        <div className='adpic'>       
        </div>
        </div>
      
      <div className="footer">
      <Footer />
      </div>
      </div>
    </>
  )
}

export default Bollywood