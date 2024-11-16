import React from 'react'
import { useContext, useState } from 'react'
import Datacontext from '../../Datacontext'
import Navbar from './Navbar'
import { Link } from 'react-router-dom'
import './Navbar.css'
import Topfitness from './Topfitness'
import Advertisement from './Advertisement'
// import Footer from './Footer'

const Fitness = () => {

  const [visisble, setVisible] = useState(5);

  const data = useContext(Datacontext);
  console.log(data);

  const fitnessData = data.filter((item) => item.category === "Fitness");
  console.log(fitnessData);

  const handleload = () => {
    setVisible((prev)=>prev+5)
 }


  return (
    <>
    <Navbar/>
    <div className='fitness-page'>
     <div className='fitness'>
    <div className='fitness-line'>
        <h1 className='fitness-text'>Fitness</h1>
        <hr/> 
        </div>

    {fitnessData.slice(0,visisble).map((item)=>(
    <div>
    <Link to={`/detail/${item.id}`} className='link-fitness'>
    <div className='fitnessbox'>
    <img src={item.img_url} alt={item.title} className='fitness-image' />
      <h2 className='fitness-title'>{item.title}</h2>
      <p className='fitness-description'>{item.description}</p>
      </div>
      </Link>
      </div>
      ))}

      <button onClick={handleload} className='button'>LoadMore</button>
      </div>

      <div className='topfitness'>
        <div className='fitness-line'>
        <h1 className='fitness-text'>Top Posts</h1>
        <hr/>
        </div>
      <Topfitness/>
      <Advertisement className='adver'/>
      </div>
      </div>
      {/* <Footer/> */}
    </>
  )
}

export default Fitness