import React from 'react'
import { useContext } from 'react'
import Datacontext from '../../Datacontext'
import { Link } from 'react-router-dom'
import './Navbar.css'

const Toptech = () => {

    const data = useContext(Datacontext);
    console.log(data);
  
    const technologyData1 = data.filter((item) => item.category === "Technology" && item.id === 16);
    console.log(technologyData1);

    const technologyData2 = data.filter((item) => item.category === "Technology" && item.id ===27);
    console.log(technologyData2);

    const technologyData3 = data.filter((item) => item.category === "Technology" && item.id === 22);
    console.log(technologyData3);

    const technologyData4 = data.filter((item) => item.category === "Technology" && item.id === 13);
    console.log(technologyData4);

  return (
    <>

{technologyData1.map((item)=>(
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

{technologyData2.map((item)=>(
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

{technologyData3.map((item)=>(
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

{technologyData4.map((item)=>(
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

    </>
  )
}

export default Toptech