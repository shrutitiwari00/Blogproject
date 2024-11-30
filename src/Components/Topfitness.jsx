import React from 'react'
import { useContext } from 'react'
import Datacontext from '../../Datacontext'
import { Link } from 'react-router-dom'
import './Navbar.css'

const Topfitness = ({show}) => {

    const data = useContext(Datacontext);
    console.log(data);
  
    const fitnessData = data.filter((item) => item.category === "Fitness");
    console.log(fitnessData);

    // const fitnessData2 = data.filter((item) => item.category === "Fitness" && item.id===34);
    // console.log(fitnessData2);

    // const fitnessData3 = data.filter((item) => item.category === "Fitness" && item.id===30);
    // console.log(fitnessData3);

    // const fitnessData4 = data.filter((item) => item.category === "Fitness" && item.id===38);
    // console.log(fitnessData4);

    //function to limit the discription
  const limitdescription = (text)=>{
    const words = text.split(' ');
    return words.slice(0,10).join(' ') + (words.length > 10 ? '...':'');
  };

  return (
    <>
      {fitnessData.slice(0,show).map((item) => (
                <Link to={`/detail/${item.id}`} className='link-bolly'>
                <div className='top-box'>
                    <div className='top-image'>
                    <img src={item.img_url} alt={item.title} className='t-image' />
                    </div>
                    <div className='top-text'>
                    <h2 className='t-title'>{item.title}</h2>

                    <p className='t-description'>{limitdescription(item.description)}</p>
                    </div>
                </div>
                </Link>
            ))}

       {/* {fitnessData2.map((item)=>(
    <div>
    <Link to={`/detail/${item.id}`} className='link-fitness'>
    <div className='fitnessbox'>
    <img src={item.img_url} alt={item.title} className='fitness-image' />
      <h2 className='fitness-title'>{item.title}</h2>
      <p className='fitness-description'>{item.description}</p>
      </div>
      </Link>
      </div>
      ))}

       {fitnessData3.map((item)=>(
    <div>
    <Link to={`/detail/${item.id}`} className='link-fitness'>
    <div className='fitnessbox'>
    <img src={item.img_url} alt={item.title} className='fitness-image' />
      <h2 className='fitness-title'>{item.title}</h2>
      <p className='fitness-description'>{item.description}</p>
      </div>
      </Link>
      </div>
      ))}

       {fitnessData4.map((item)=>(
    <div>
    <Link to={`/detail/${item.id}`} className='link-fitness'>
    <div className='fitnessbox'>
    <img src={item.img_url} alt={item.title} className='fitness-image' />
      <h2 className='fitness-title'>{item.title}</h2>
      <p className='fitness-description'>{item.description}</p>
      </div>
      </Link>
      </div>
      ))} */}
    </>
  )
}

export default Topfitness