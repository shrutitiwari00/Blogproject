import React from 'react'
import { useContext } from 'react'
import Datacontext from '../../Datacontext'
import { Link } from 'react-router-dom'
import './Navbar.css'

const Toptech = ({show}) => {

    const data = useContext(Datacontext);
    console.log(data);
  
    const technologyData = data.filter((item) => item.category === "Technology");
    console.log(technologyData);

    // const technologyData2 = data.filter((item) => item.category === "Technology" && item.id ===27);
    // console.log(technologyData2);

    // const technologyData3 = data.filter((item) => item.category === "Technology" && item.id === 22);
    // console.log(technologyData3);

    // const technologyData4 = data.filter((item) => item.category === "Technology" && item.id === 13);
    // console.log(technologyData4);

    //function to limit the discription
  const limitdescription = (text)=>{
    const words = text.split(' ');
    return words.slice(0,10).join(' ') + (words.length > 10 ? '...':'');
  };
  const limittitle = (text) => {
    const words = text.split(' ');
    return words.slice(0, 1).join(' ') + (words.length > 1 ? '...' : '');
  };
  

  return (
    <>

{technologyData.slice(0,show).map((item) => (
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

{/* {technologyData2.map((item)=>(
      <div>
      <Link to={`/detail/${item.id}`} className='link-tech'>
      <div className='techbox'>
       <img src={item.img_url} alt={item.title} className='technology-image' />
      <h2 className='technology-title'>{item.title}</h2>
      <p className='technology-description'>{item.description}</p>
      </div>
      </Link>
      </div>
    ))}

{technologyData3.map((item)=>(
      <div>
      <Link to={`/detail/${item.id}`} className='link-tech'>
      <div className='techbox'>
       <img src={item.img_url} alt={item.title} className='technology-image' />
      <h2 className='technology-title'>{item.title}</h2>
      <p className='technology-description'>{item.description}</p>
      </div>
      </Link>
      </div>
    ))}

{technologyData4.map((item)=>(
      <div>
      <Link to={`/detail/${item.id}`} className='link-tech'>
      <div className='techbox'>
       <img src={item.img_url} alt={item.title} className='technology-image' />
      <h2 className='technology-title'>{item.title}</h2>
      <p className='technology-description'>{item.description}</p>
      </div>
      </Link>
      </div>
    ))} */}

    </>
  )
}

export default Toptech