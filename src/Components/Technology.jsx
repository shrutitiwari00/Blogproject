import React from 'react'
import Navbar from './Navbar'
import { useContext , useState} from 'react'
import Datacontext from '../../Datacontext'
import { Link } from 'react-router-dom'
import './Navbar.css'

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

    {technologyData.slice(0,visisble).map((item)=>(
      <div>
      <Link to={`/detail/${item.id}`}> <img src={item.img_url} alt={item.title} className='technology-image' />
      <h2>{item.title}</h2>
      <p>{item.description}</p>
      </Link>
      </div>
    ))}

    <button onClick={handleload}>LoadMore</button>

    </>
  )
}

export default Technology