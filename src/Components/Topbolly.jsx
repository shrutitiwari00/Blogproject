import React, { useContext } from 'react'
import './Navbar.css'
import Datacontext from '../../Datacontext'
import { Link } from 'react-router-dom'

const Topbolly = ({show}) => {

    const data = useContext(Datacontext);
    console.log(data);

    const bollywoodData1 = data.filter((item) => item.category === "Bollywood");
    console.log(bollywoodData1);

    // const bollywoodData2 = data.filter((item) => item.category === "Bollywood" && item.id === 79);
    // console.log(bollywoodData2);

    // const bollywoodData3 = data.filter((item) => item.category === "Bollywood" && item.id === 83);
    // console.log(bollywoodData3);

    // const bollywoodData4 = data.filter((item) => item.category === "Bollywood" && item.id === 73);
    // console.log(bollywoodData4);


     //function to limit the discription
  const limitdescription = (text)=>{
    const words = text.split(' ');
    return words.slice(0,15).join(' ') + (words.length > 15 ? '...':'');
  };


    return (
        <>
            {bollywoodData1.slice(0,show).map((item) => (
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
            

            {/* {bollywoodData2.map((item) => (
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
             
            {bollywoodData3.map((item) => (
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
            

            {bollywoodData4.map((item) => (
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
            ))} */}
           
        </>
    )
}

export default Topbolly