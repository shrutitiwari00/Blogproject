import { useContext , useState} from 'react'
import React from 'react'
import Datacontext from '../../Datacontext'
import Navbar from './Navbar'
import { Link } from 'react-router-dom'
import './Navbar.css'
import Topholly from './Topholly'
import Footer from './Footer'

const Hollywood = () => {

  const [visisble, setVisible] = useState(3);
  const[show,setShow] = useState(6);

  const data = useContext(Datacontext);
  console.log(data);

  const hollywoodData = data.filter((item) => item.category === "Hollywood");
  console.log(hollywoodData);

  const handleload = () => {
    setVisible((prev)=>prev+3)
    setShow((prev) => prev+6)
 }

  //function to limit the discription
  const limitdescription = (text)=>{
    const words = text.split(' ');
    return words.slice(0,45).join(' ') + (words.length > 45 ? '...':'');
  };

  return (
    <>
    <div className='mainbody'>
    <Navbar/>
    <div className='holly-page'>
    <div className='holly'>
    <div className='holly-line'>
        <h1 className='holly-text'>Hollywood</h1>
        <hr/> 
        </div>

    {hollywoodData.slice(0,visisble).map((item)=>(
      <div>
      <Link to={`/detail/${item.id}`}className='link-holly'>
      <div className='hollybox'>
       <img src={item.img_url} alt={item.title} className='hollywood-image' />
      <h2 className='hollywood-title'>{item.title}</h2>
      <p className='hollywood-description'>{item.description}</p>
      </div>
      </Link>
      </div>
    ))}

    <button onClick={handleload} className='button'>LoadMore</button>
     </div>

     <div className='topbolly'>
        <div className='bolly-line'>
        <h1 className='bolly-text'>Top Posts</h1>
        <hr/>
        </div>
        <div className='tp-box'>
          <Topholly show={show} />
            </div>

      </div>
      
      </div>
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

export default Hollywood