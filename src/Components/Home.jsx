import React, { useContext, useState } from 'react'
import Navbar from './Navbar'
import './Navbar.css'
import Footer from './Footer'
import Datacontext from '../../Datacontext'
import { Link } from 'react-router-dom'
import Tophome from './Tophome'
import Advertisement from './Advertisement'

const Home = () => {
  const [visisble, setVisible] = useState(7);
  const[show,setShow]= useState(3);
  const data = useContext(Datacontext);
  console.log(data);

  // const handleload = () => {
  //   setVisible((prev) => prev + 10);
  //   setShow((prev)=>prev+3);
  // };


  const selectedArray = [
    1, 2, 3, 8, 13, 15, 16, 17, 18, 22, 23, 24, 25, 26, 27, 45, 51, 53, 62, 65,
    67, 69, 70, 73, 75, 76, 77, 83, 84,
  ];

  const getRandomImage = () => {
    const randomId =
      selectedArray[Math.floor(Math.random() * selectedArray.length)];
    return data.find((item) => item.id === randomId);
  };

  const img1 = getRandomImage();
  const img2 = getRandomImage();
  const img3 = getRandomImage();

  const fitnessData1 = data.filter((item) => item.category === "Fitness" && item.id === 36);
  console.log(fitnessData1);

  const foodData1 = data.filter((item) => item.category === "Food" && item.id === 61);
  console.log(foodData1);

  const hollywoodData2 = data.filter((item) => item.category === "Hollywood" && item.id === 82);
  console.log(hollywoodData2);

  // Function to limit the description and title
  const limitdescription = (text) => {
    const words = text.split(' ');
    return words.slice(0, 35).join(' ') + (words.length > 35 ? '...' : '');
  };
  const limittitle = (text) => {
    const words = text.split(' ');
    return words.slice(0, 5).join(' ') + (words.length > 5 ? '...' : '');
  };

  return (
    <>
      <div className='mainbody'>
        <Navbar />
        <div className='header-container'>
          <div className='box box1' style={{ backgroundImage: `url(${img1?.img_url})` }}>
          <div className="overlay">
                {img1?.description.split(" ").slice(0, 20).join(" ") + "..."}
              </div>
          </div>
          <div className='box box2' style={{ backgroundImage: `url(${img2?.img_url})` }}>
          <div className="overlay">
                {img2?.description.split(" ").slice(0, 20).join(" ") + "..."}
              </div>
          </div>
          <div className='box box3' style={{ backgroundImage: `url(${img3?.img_url})` }}>
          <div className="overlay">
                {img3?.description.split(" ").slice(0, 20).join(" ") + "..."}
              </div>
          </div>
        </div>
        <div className='latest-section'>
          <div>
            <h1 className='latest-text'>The Latest Stories</h1>
          </div>
          <div className='latest-div'>
            <div className='latest-box latest-box1'>
              {fitnessData1.map((item) => (
                <Link to={`/detail/${item.id}`} className='link-bolly' key={item.id}>
                  <div className='la-box'>
                    <img src={item.img_url} alt={item.title} className='latest-image' />
                    <h2 className='latest-title'>{item.title}</h2>
                    <p className='latest-description'>{limitdescription(item.description)}</p>
                  </div>
                </Link>
              ))}
            </div>
            <div className='latest-box latest-box2'>
              {foodData1.map((item) => (
                <Link to={`/detail/${item.id}`} className='link-bolly' key={item.id}>
                  <div className='la-box'>
                    <img src={item.img_url} alt={item.title} className='latest-image' />
                    <h2 className='latest-title'>{item.title}</h2>
                    <p className='latest-description'>{limitdescription(item.description)}</p>
                  </div>
                </Link>
              ))}
            </div>
            <div className='latest-box latest-box3'>
              {hollywoodData2.map((item) => (
                <Link to={`/detail/${item.id}`} className='link-bolly' key={item.id}>
                  <div className='la-box'>
                    <img src={item.img_url} alt={item.title} className='latest-image' />
                    <h2 className='latest-title'>{item.title}</h2>
                    <p className='latest-description'>{limitdescription(item.description)}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>

        <div className='bolly-page'>
          <div className='bolly'>
            <div className='bolly-line'>
              <h1 className='bolly-text'>Top-Stories</h1>
              <hr />
            </div>

            {data.slice(0, visisble).map((item) => (
              <div key={item.id}>
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
            {/* {show<bollyM */}
            {/* <button onClick={handleload} className='button'>Load More</button> */}
          </div>

          <div className='topbolly'>
            <div className='bolly-line'>
              <h1 className='bolly-text'>Top Posts</h1>
              <hr />
            </div>
            <div className='top-div'>
              <Tophome />
            </div>
            <div>
              <Advertisement className='adver' show={show}/>
            </div>
          </div>
        </div>

        <div className="footer">
          <Footer />
        </div>
      </div>
    </>
  );
};

export default Home;
