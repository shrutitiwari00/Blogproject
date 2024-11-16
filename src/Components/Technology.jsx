import React from 'react'
import Navbar from './Navbar'
import { useContext , useState} from 'react'
import Datacontext from '../../Datacontext'
import { Link } from 'react-router-dom'
import './Navbar.css'
import Toptech from './Toptech'
import Advertisement from './Advertisement'

const Technology = () => {

  const [visisble, setVisible] = useState(5);

  const data = useContext(Datacontext);
  console.log(data);

  const technologyData = data.filter((item) => item.category === "Technology");
  console.log(technologyData);

  const handleload = () => {
    setVisible((prev)=>prev+5)
 }

  return (
    <>
    <Navbar/>
    <div className='tech-page'>
    <div className='tech'>
    <div className='tech-line'>
        <h1 className='tech-text'>Technology</h1>
        <hr/> 
        </div>

    {technologyData.slice(0,visisble).map((item)=>(
      <div>
      <Link to={`/detail/${item.id}`} className='link-tech'>
      <div className='techbox'>
       <img src={item.img_url} alt={item.title} className='technology-image' />
      <h2 className='technology-title'>{item.title}</h2>
      <p className='technology-description'>{item.description}</p>
      </div>
      </Link>
      </div>
    ))}

    <button onClick={handleload} className='button'>LoadMore</button>
    </div>

    <div className='toptech'>
    <div className='tech-line'>
        <h1 className='tech-text'>Top Posts</h1>
        <hr/>
        </div>
    <Toptech/>
    <Advertisement className='adver'/>
    </div>
    </div>
    </>
  )
}

export default Technology