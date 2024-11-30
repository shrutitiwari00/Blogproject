import React from 'react'
import Navbar from './Navbar'
import { useContext , useState} from 'react'
import Datacontext from '../../Datacontext'
import { Link } from 'react-router-dom'
import './Navbar.css'
import Toptech from './Toptech'
import Footer from './Footer'

const Technology = () => {

  const [visisble, setVisible] = useState(3);
  const[show,setShow] = useState(6);

  const data = useContext(Datacontext);
  console.log(data);

  const technologyData = data.filter((item) => item.category === "Technology");
  console.log(technologyData);

  const technologyData1 = data.filter((item) => item.category === "Technology" && item.id === 16);
    console.log(technologyData1);

    const technologyData2 = data.filter((item) => item.category === "Technology" && item.id ===27);
    console.log(technologyData2);

    const technologyData3 = data.filter((item) => item.category === "Technology" && item.id === 22);
    console.log(technologyData3);


  const handleload = () => {
    setVisible((prev)=>prev+3)
    setShow((prev) => prev+6)
 }

 //function to limit the discription
 const limitdescription = (text)=>{
  const words = text.split(' ');
  return words.slice(0,40).join(' ') + (words.length > 40 ? '...':'');
};
const limitdescription2 = (text)=>{
  const words = text.split(' ');
  return words.slice(0,30).join(' ') + (words.length > 30 ? '...':'');
};
const limittitle = (text) => {
  const words = text.split(' ');
  return words.slice(0, 2).join(' ') + (words.length > 2 ? '...' : '');
};


  return (
    <>
    <div className="mainbody">
    <Navbar/>

    <div className='latest-section'> 
        <div>   
              <h1 className='latest-text'>Technology</h1>              
           </div>
           <div className='latest-div'>
            <div className='latest-box latest-box1'>
            {technologyData1.map((item) => (
                <Link to={`/detail/${item.id}`} className='link-bolly'>
                <div className='la-box'>
                    
                    <img src={item.img_url} alt={item.title} className='latest-image' />
                    
                    
                    <h2 className='latest-title'>{limittitle(item.title)}</h2>

                    <p className='latest-description'>{limitdescription2(item.description)}</p>
                    
                </div>
                </Link>
            ))}
            </div>
            <div className='latest-box latest-box2'>
            {technologyData2.map((item) => (
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
            {technologyData3.map((item) => (
                <Link to={`/detail/${item.id}`} className='link-bolly'>
                <div className='la-box'>
                    
                    <img src={item.img_url} alt={item.title} className='latest-image' />
                   
                    
                    <h2 className='latest-title'>{limittitle(item.title)}</h2>

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

    {technologyData.slice(0,visisble).map((item)=>(
      <div>

      <Link to={`/detail/${item.id}`} className='link-bolly'>
      <div className='bollybox'>
        <div className='image'>
       <img src={item.img_url} alt={item.title} className='bollywood-image' />
      </div>
      <div className='dis-text'>
      <h2 className='bollywood-title'>{limittitle(item.title)}</h2>
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
    <Toptech  show={show}/>
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

export default Technology