import React from 'react'
import { useContext , useState} from 'react'
import Datacontext from '../../Datacontext'
import { Link } from 'react-router-dom'
import './Navbar.css'

const Topfood = () => {

    const data = useContext(Datacontext);
  console.log(data);

  const foodData1 = data.filter((item) => item.category === "Food" && item.id===61);
  console.log(foodData1);

  const foodData2 = data.filter((item) => item.category === "Food" && item.id===57);
  console.log(foodData2);

  const foodData3 = data.filter((item) => item.category === "Food" && item.id===54);
  console.log(foodData3);

  const foodData4 = data.filter((item) => item.category === "Food" && item.id===60);
  console.log(foodData4);

  return (
    <>
      {foodData1.map((item)=>(
      <div>
      <Link to={`/detail/${item.id}`} className='link-food'>
      <div className='foodbox'>
       <img src={item.img_url} alt={item.title} className='food-image' />
      <h2 className='food-title'>{item.title}</h2>
      <p className='food-description'>{item.description}</p>
      </div>
      </Link>
      </div>
    ))}

{foodData2.map((item)=>(
      <div>
      <Link to={`/detail/${item.id}`} className='link-food'>
      <div className='foodbox'>
       <img src={item.img_url} alt={item.title} className='food-image' />
      <h2 className='food-title'>{item.title}</h2>
      <p className='food-description'>{item.description}</p>
      </div>
      </Link>
      </div>
    ))}

{foodData3.map((item)=>(
      <div>
      <Link to={`/detail/${item.id}`} className='link-food'>
      <div className='foodbox'>
       <img src={item.img_url} alt={item.title} className='food-image' />
      <h2 className='food-title'>{item.title}</h2>
      <p className='food-description'>{item.description}</p>
      </div>
      </Link>
      </div>
    ))}

{foodData4.map((item)=>(
      <div>
      <Link to={`/detail/${item.id}`} className='link-food'>
      <div className='foodbox'>
       <img src={item.img_url} alt={item.title} className='food-image' />
      <h2 className='food-title'>{item.title}</h2>
      <p className='food-description'>{item.description}</p>
      </div>
      </Link>
      </div>
    ))}
    </>
  )
}

export default Topfood