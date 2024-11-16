import React from 'react'
import { useContext , useState} from 'react'
import Datacontext from '../../Datacontext'
import Navbar from './Navbar'
import { Link } from 'react-router-dom'
import './Navbar.css'
import Topfood from './Topfood'
import Advertisement from './Advertisement'


const Food = () => {

  const [visisble, setVisible] = useState(5);

  const data = useContext(Datacontext);
  console.log(data);

  const foodData = data.filter((item) => item.category === "Food");
  console.log(foodData);

  const handleload = () => {
    setVisible((prev)=>prev+5)
 }

  return (
    <>
    <Navbar/>
    <div className='food-page'>
    <div className='food'>
    <div className='food-line'>
        <h1 className='food-text'>Food</h1>
        <hr/> 
        </div>

    {foodData.slice(0,visisble).map((item)=>(
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

    <button onClick={handleload} className='button'>LoadMore</button>
    </div>

    <div className='topfood'>
        <div className='food-line'>
        <h1 className='food-text'>Top Posts</h1>
        <hr/>
        </div>
      <Topfood/>
      <Advertisement className='adver'/>
      </div>
      </div>
    </>
  )
}

export default Food