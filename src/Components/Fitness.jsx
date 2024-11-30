import React from 'react'
import { useContext, useState } from 'react'
import Datacontext from '../../Datacontext'
import Navbar from './Navbar'
import { Link } from 'react-router-dom'
import './Navbar.css'
import Topfitness from './Topfitness'
import Footer from './Footer'

const Fitness = () => {

  const [visisble, setVisible] = useState(3);
  const[show,setShow] = useState(6);


  const data = useContext(Datacontext);
  console.log(data);

  const fitnessData = data.filter((item) => item.category === "Fitness");
  console.log(fitnessData);

  const fitnessData1 = data.filter((item) => item.category === "Fitness" && item.id===36);
    console.log(fitnessData1);

    const fitnessData2 = data.filter((item) => item.category === "Fitness" && item.id===34);
    console.log(fitnessData2);

    const fitnessData3 = data.filter((item) => item.category === "Fitness" && item.id===30);
    console.log(fitnessData3);

  const handleload = () => {
    setVisible((prev)=>prev+5)
    setShow((prev) => prev+6)
 }

  //function to limit the discription
  const limitdescription = (text)=>{
    const words = text.split(' ');
    return words.slice(0,40).join(' ') + (words.length > 40 ? '...':'');
  };
  const limitdescription2 = (text) => {
    const words = text.split(' ');
    return words.slice(0, 30).join(' ') + (words.length > 30 ? '...' : '');
  };
  const limittitle2 = (text) => {
    const words = text.split(' ');
    return words.slice(0, 2).join(' ') + (words.length > 2 ? '...' : '');
  };


  return (
    <>
    <div className="mainbody">
    <Navbar/>

    <div className='latest-section'> 
        <div>   
              <h1 className='latest-text'>Fitness</h1>              
           </div>
           <div className='latest-div'>
            <div className='latest-box latest-box1'>
            {fitnessData1.map((item) => (
                <Link to={`/detail/${item.id}`} className='link-bolly'>
                <div className='la-box'>
                    
                    <img src={item.img_url} alt={item.title} className='latest-image' />
                    
                    
                    <h2 className='latest-title'>{limittitle2(item.title)}</h2>

                    <p className='latest-description'>{limitdescription2(item.description)}</p>
                    
                </div>
                </Link>
            ))}
            </div>
            <div className='latest-box latest-box2'>
            {fitnessData2.map((item) => (
                <Link to={`/detail/${item.id}`} className='link-bolly'>
                <div className='la-box'>
                    
                    <img src={item.img_url} alt={item.title} className='latest-image' />
                   
                    
                    <h2 className='latest-title'>{limittitle2(item.title)}</h2>

                    <p className='latest-description'>{limitdescription2(item.description)}</p>
                    
                </div>
                </Link>
            ))}
            </div>
            <div className='latest-box latest-box3'>
            {fitnessData3.map((item) => (
                <Link to={`/detail/${item.id}`} className='link-bolly'>
                <div className='la-box'>
                    
                    <img src={item.img_url} alt={item.title} className='latest-image' />
                   
                    
                    <h2 className='latest-title'>{limittitle2(item.title)}</h2>

                    <p className='latest-description'>{limitdescription2(item.description)}</p>
                    
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
        <hr/> 
        </div>

    {fitnessData.slice(0,visisble).map((item)=>(
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
        <hr/>
        </div>
        <div className='tp-box'>
      <Topfitness show={show}/>
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

export default Fitness