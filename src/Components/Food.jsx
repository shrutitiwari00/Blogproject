import React from 'react'
import { useContext , useState} from 'react'
import Datacontext from '../../Datacontext'
import Navbar from './Navbar'
import { Link } from 'react-router-dom'
import './Navbar.css'


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

    {foodData.slice(0,visisble).map((item)=>(
      <div>
      <Link to={`/detail/${item.id}`}> <img src={item.img_url} alt={item.title} className='food-image' />
      <h2>{item.title}</h2>
      <p>{item.description}</p>
      </Link>
      </div>
    ))}

    <button onClick={handleload}>LoadMore</button>


    </>
  )
}

export default Food