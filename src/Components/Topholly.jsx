import React from 'react'
import { useContext } from 'react'
import Datacontext from '../../Datacontext'
import { Link } from 'react-router-dom'
import './Navbar.css'

const Topholly = ({show}) => {

    const data = useContext(Datacontext);
  console.log(data);

  const hollywoodData = data.filter((item) => item.category === "Hollywood" );
  console.log(hollywoodData);

  // const hollywoodData2 = data.filter((item) => item.category === "Hollywood" && item.id===82);
  // console.log(hollywoodData2);

  // const hollywoodData3 = data.filter((item) => item.category === "Hollywood" && item.id===8);
  // console.log(hollywoodData3);

  // const hollywoodData4 = data.filter((item) => item.category === "Hollywood" && item.id===52);
  // console.log(hollywoodData4);

  //function to limit the discription
  const limitdescription = (text)=>{
    const words = text.split(' ');
    return words.slice(0,10).join(' ') + (words.length > 10 ? '...':'');
  };

  const limittitle = (text) => {
    const words = text.split(' ');
    return words.slice(0, 2).join(' ') + (words.length > 2 ? '...' : '');
  };

  return (
   <>
   {hollywoodData.slice(0,show).map((item)=>(
    
      <Link to={`/detail/${item.id}`}className='link-bolly'>
      <div className='top-box'>
      <div className='top-image'>
       <img src={item.img_url} alt={item.title} className='t-image' />
       </div>
       <div className='top-text'>
      <h2 className='t-title'>{limittitle(item.title)}</h2>
      <p className='t-description'>{limitdescription(item.description)}</p>
      </div>
      </div>
      </Link>
    
    ))}

{/* {hollywoodData2.map((item)=>(
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
    ))} */}

   </>
  )
}

export default Topholly