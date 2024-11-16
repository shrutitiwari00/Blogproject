import React from 'react'
import { useContext } from 'react'
import Datacontext from '../../Datacontext'
import { Link } from 'react-router-dom'
import './Navbar.css'

const Topholly = () => {

    const data = useContext(Datacontext);
  console.log(data);

  const hollywoodData1 = data.filter((item) => item.category === "Hollywood" && item.id===15);
  console.log(hollywoodData1);

  const hollywoodData2 = data.filter((item) => item.category === "Hollywood" && item.id===82);
  console.log(hollywoodData2);

  const hollywoodData3 = data.filter((item) => item.category === "Hollywood" && item.id===8);
  console.log(hollywoodData3);

  const hollywoodData4 = data.filter((item) => item.category === "Hollywood" && item.id===52);
  console.log(hollywoodData4);

  return (
   <>
   {hollywoodData1.map((item)=>(
      <div>
      <Link to={`/detail/${item.id}`}className='link-holly'>
      <div className='hollybox'>
       <img src={item.img_url} alt={item.title} className='hollywood-image' />
      <h2 className='hollywood-title'>{item.title}</h2>
      <p className='hollywood-description'>{item.description}</p>
      </div>
      </Link>
      </div>
    ))}

{hollywoodData2.map((item)=>(
      <div>
      <Link to={`/detail/${item.id}`}className='link-holly'>
      <div className='hollybox'>
       <img src={item.img_url} alt={item.title} className='hollywood-image' />
      <h2 className='hollywood-title'>{item.title}</h2>
      <p className='hollywood-description'>{item.description}</p>
      </div>
      </Link>
      </div>
    ))}

{hollywoodData3.map((item)=>(
      <div>
      <Link to={`/detail/${item.id}`}className='link-holly'>
      <div className='hollybox'>
       <img src={item.img_url} alt={item.title} className='hollywood-image' />
      <h2 className='hollywood-title'>{item.title}</h2>
      <p className='hollywood-description'>{item.description}</p>
      </div>
      </Link>
      </div>
    ))}

{hollywoodData4.map((item)=>(
      <div>
      <Link to={`/detail/${item.id}`}className='link-holly'>
      <div className='hollybox'>
       <img src={item.img_url} alt={item.title} className='hollywood-image' />
      <h2 className='hollywood-title'>{item.title}</h2>
      <p className='hollywood-description'>{item.description}</p>
      </div>
      </Link>
      </div>
    ))}

   </>
  )
}

export default Topholly