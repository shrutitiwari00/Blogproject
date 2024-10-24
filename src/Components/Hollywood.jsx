import { useContext , useState} from 'react'
import React from 'react'
import Datacontext from '../../Datacontext'
import Navbar from './Navbar'
import { Link } from 'react-router-dom'
import './Navbar.css'


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

    {hollywoodData.slice(0,visisble).map((item)=>(
      <div>
      <Link to={`/detail/${item.id}`}> <img src={item.img_url} alt={item.title} className='hollywood-image' />
      <h2>{item.title}</h2>
      <p>{item.description}</p>
      </Link>
      </div>
    ))}

    <button onClick={handleload}>LoadMore</button>
   
    </>
  )
}

export default Hollywood