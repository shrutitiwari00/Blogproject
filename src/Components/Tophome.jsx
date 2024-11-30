import React, { useContext } from 'react'
import './Navbar.css'
import Datacontext from '../../Datacontext'
import { Link } from 'react-router-dom'

const Tophome = () => {

    const data = useContext(Datacontext);
    // console.log(data);

    // const bollywoodData1 = data.filter((item) => item.category === "Bollywood" && item.id === 69);
    // console.log(bollywoodData1);

    // const hollywoodData1 = data.filter((item) => item.category === "Hollywood" && item.id === 15);
    // console.log(hollywoodData1);

    // const foodData1 = data.filter((item) => item.category === "Food" && item.id === 61);
    // console.log(foodData1);

    // const fitnessData1 = data.filter((item) => item.category === "Fitness" && item.id === 36);
    // console.log(fitnessData1);

    //function to limit the discription and title
    const limitdescription = (text) => {
        const words = text.split(' ');
        return words.slice(0, 10).join(' ') + (words.length > 10 ? '...' : '');
    };
    const limittitle = (text) => {
        const words = text.split(' ');
        return words.slice(0, 1).join(' ') + (words.length > 1 ? '...' : '');
    }


    return (
        <>

            {data.slice(0, 10).map((item) => (
                <div key={item.id}>
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
                </div>
            ))}
            {/* {bollywoodData1.map((item) => (
                <div>
                <Link to={`/detail/${item.id}`} className='link-bolly'>
                    <div className='bollybox'>
                        <div className='image'>
                        <img src={item.img_url} alt={item.title} className='bollywood-image' />
                        </div>
                        <div className='dis-text'>
                        <h2 className='bollywood-title'>{limittitle(item.title)}</h2>
                        <p className='bollywood-description'>{limitdescription(item.description)}</p>
                        </div>
                    </div>
                </Link>
                </div>
            ))}
            
            {hollywoodData1.map((item) => (
                <div>
                    <Link to={`/detail/${item.id}`} className='link-bolly'>
                        <div className='bollybox'>
                            <div className='image'>
                            <img src={item.img_url} alt={item.title} className='bollywood-image' />
                            </div>
                            <div className='dis-text'>
                            <h2 className='bollywood-title'>{limittitle(item.title)}</h2>
                            <p className='bollywood-description'>{limitdescription(item.description)}</p>
                            </div>
                        </div>
                    </Link>
                </div>
            ))}
            {foodData1.map((item) => (
                <div>
                    <Link to={`/detail/${item.id}`} className='link-bolly'>
                        <div className='bollybox'>
                            <div className='image'>
                            <img src={item.img_url} alt={item.title} className='bollywood-image' />
                            </div>
                            <div className='dis-text'>
                            <h2 className='bollywood-title'>{limittitle(item.title)}</h2>
                            <p className='bollywood-description'>{limitdescription(item.description)}</p>
                            </div>
                        </div>
                    </Link>
                </div>
            ))}
            {fitnessData1.map((item) => (
                <div>
                    <Link to={`/detail/${item.id}`} className='link-bolly'>
                        <div className='bollybox'>
                            <div className='image'>
                            <img src={item.img_url} alt={item.title} className='bollywood-image' />
                            </div>
                            <div className='dis-text'>
                            <h2 className='bollywood-title'>{limittitle(item.title)}</h2>
                            <p className='bollywood-description'>{limitdescription(item.description)}</p>
                            </div>
                        </div>
                    </Link>
                </div>
            ))} */}

        </>
    )
}

export default Tophome