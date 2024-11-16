import { useContext , useState} from 'react'
import React from 'react'
import Datacontext from '../../Datacontext'
import Navbar from './Navbar'
import { Link } from 'react-router-dom'
import './Navbar.css'
import Topholly from './Topholly'
import Advertisement from './Advertisement'


const Hollywood = () => {

  const [visisble, setVisible] = useState(5);

  const data = useContext(Datacontext);
  console.log(data);

  const hollywoodData = data.filter((item) => item.category === "Hollywood");
  console.log(hollywoodData);

  const handleload = () => {
    setVisible((prev)=>prev+5)
 }

  return (
    <>
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

     <div className='topholly'>
        <div className='holly-line'>
        <h1 className='holly-text'>Top Posts</h1>
        <hr/>
        </div>
      <Topholly/>
      <Advertisement className='adver'/>
      </div>
      </div>
    </>
  )
}

export default Hollywood