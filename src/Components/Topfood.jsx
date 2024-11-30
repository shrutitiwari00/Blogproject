import React from 'react'
import { useContext , useState} from 'react'
import Datacontext from '../../Datacontext'
import { Link } from 'react-router-dom'
import './Navbar.css'

const Topfood = ({show}) => {

    const data = useContext(Datacontext);
  console.log(data);

  const foodData = data.filter((item) => item.category === "Food");
  console.log(foodData);

  // const foodData2 = data.filter((item) => item.category === "Food" && item.id===57);
  // console.log(foodData2);

  // const foodData3 = data.filter((item) => item.category === "Food" && item.id===54);
  // console.log(foodData3);

  // const foodData4 = data.filter((item) => item.category === "Food" && item.id===60);
  // console.log(foodData4);

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
       {foodData.slice(0,show).map((item) => (
                <Link to={`/detail/${item.id}`} className='link-bolly'>
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

{/* {foodData2.map((item)=>(
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
    ))} */}
    </>
  )
}

export default Topfood