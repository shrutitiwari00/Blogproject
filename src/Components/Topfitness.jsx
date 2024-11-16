import React from 'react'
import { useContext } from 'react'
import Datacontext from '../../Datacontext'
import { Link } from 'react-router-dom'
import './Navbar.css'

const Topfitness = () => {

    const data = useContext(Datacontext);
    console.log(data);
  
    const fitnessData1 = data.filter((item) => item.category === "Fitness" && item.id===36);
    console.log(fitnessData1);

    const fitnessData2 = data.filter((item) => item.category === "Fitness" && item.id===34);
    console.log(fitnessData2);

    const fitnessData3 = data.filter((item) => item.category === "Fitness" && item.id===30);
    console.log(fitnessData3);

    const fitnessData4 = data.filter((item) => item.category === "Fitness" && item.id===38);
    console.log(fitnessData4);

  return (
    <>
       {fitnessData1.map((item)=>(
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

       {fitnessData2.map((item)=>(
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

       {fitnessData3.map((item)=>(
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

       {fitnessData4.map((item)=>(
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
    </>
  )
}

export default Topfitness