import React, { useContext } from 'react'
import './Navbar.css'
import Datacontext from '../../Datacontext'
import { Link } from 'react-router-dom'

const Topbolly = ({show}) => {

    const data = useContext(Datacontext);
    console.log(data);

    const bollywoodData = data.filter((item) => item.category === "Bollywood");
    console.log(bollywoodData);

    // const bollywoodData2 = data.filter((item) => item.category === "Bollywood" && item.id === 79);
    // console.log(bollywoodData2);

    // const bollywoodData3 = data.filter((item) => item.category === "Bollywood" && item.id === 83);
    // console.log(bollywoodData3);

    // const bollywoodData4 = data.filter((item) => item.category === "Bollywood" && item.id === 73);
    // console.log(bollywoodData4);


     //function to limit the discription
  const limitdescription = (text)=>{
    const words = text.split(' ');
    return words.slice(0,5).join(' ') + (words.length > 5 ? '...':'');
  };
  const limittitle = (text) => {
    const words = text.split(' ');
    return words.slice(0, 1).join(' ') + (words.length > 1 ? '...' : '');
  };


    return (
        <>
            {bollywoodData.slice(0,show).map((item) => (
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