import React from 'react'
import './Navbar.css'

const AdItem = ({ description, imageUrl }) => (
  <div className="ad-item">
    <img src={imageUrl} alt="Ad" className="ad-image" />
    {description && <p className="ad-description">{description}</p>}
  </div>
);


const Advertisement = ({show}) => {

  const addddata = [
    {
      id: 1,
      imageUrl:
        "https://media.wired.com/photos/59325ea02a990b06268aa0fb/master/w_1600%2Cc_limit/Skyfall.gif",
    },
    {
      id: 2,
      imageUrl:
        "https://cdn.pixabay.com/animation/2023/02/15/11/01/11-01-14-951_512.gif",
    },
    {
      id: 3,
      imageUrl:
        "https://techcrunch.com/wp-content/uploads/2022/09/tesla-bot-gif.gif",
    },
    {
      id: 4,
      imageUrl:
        "https://cdn.dribbble.com/users/153781/screenshots/2517980/laysflavorswap.gif",
    },
    {
      id: 5,
      imageUrl:
        "https://mir-s3-cdn-cf.behance.net/project_modules/hd/35d178100666679.5f0ddf01b529d.gif",
    },
    {
      id: 6,
      imageUrl:
        "https://i.pinimg.com/originals/2b/e6/7f/2be67f3d885dead62682c01f0f6e8522.gif",
    },
    {
      id: 7,
      title: "Ad Title 7",
  
      imageUrl:
        "https://cdn.dribbble.com/users/404685/screenshots/1520557/finish_line-hd.gif",
    },
    {
      id: 8,
      title: "Ad Title 8",
  
      imageUrl:
        "https://i.pinimg.com/originals/ff/d3/47/ffd347f47609af5162e3e824e66e7ecf.gif",
    },
    {
      id: 9,
      title: "Ad Title 9",
      imageUrl:
        "https://cdnb.artstation.com/p/assets/images/images/061/325/055/original/nj-himel-ezgif-com-optimize.gif?1680535912",
    },
  ];

  return (
    <>
    
    <div className='adbox'>
       <h1 className='advertisement-text'>Advertisement</h1>
       {addddata.slice(0,show).map((ad) => (
        <div className='ad-image'>
        {/* <img src={item.ad1} className='ad-image'/>
        <img src={item.ad2} className='ad-image'/>
        <img src={item.ad3} className='ad-image'/> */}
        <AdItem
        key={ad.id}
        imageUrl={ad.imageUrl  }
        />
        </div>
       ))}
       </div>
    </>
  );
};

export default Advertisement