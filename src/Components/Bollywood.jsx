import React, { useContext, useState } from 'react'
import Navbar from './Navbar'
import Datacontext from '../../Datacontext'
import { Link } from 'react-router-dom'
import './Navbar.css'


const Bollywood = () => {

  const [visisble, setVisible] = useState(5);

  const data = useContext(Datacontext);
  console.log(data);

  const bollywoodData = data.filter((item) => item.category === "Bollywood");
  console.log(bollywoodData);

  const handleload = () => {
     setVisible((prev)=>prev+5)
  }

  return (
    <>
      <Navbar />

      {bollywoodData.slice(0,visisble).map((item) => (
        <div>
         <Link to={`/detail/${item.id}`}> <img src={item.img_url} alt={item.title} className='bollywood-image' />
          <h2>{item.title}</h2>
          <p>{item.description}</p>
          </Link>
        </div>
      ))}

      <button onClick={handleload}>LoadMore</button>

    </>
  )
}

export default Bollywood