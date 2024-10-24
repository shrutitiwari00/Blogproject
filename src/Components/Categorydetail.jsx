import React, { useContext } from 'react'
import { useParams } from 'react-router-dom'
import Datacontext from '../../Datacontext';
import Navbar from './Navbar';

const Categorydetail = () => {

    const {id} = useParams();
    console.log({id},"id")

    const data= useContext(Datacontext);
    console.log(data);

    const post = data.find((item)=>item.id === parseInt(id));
    console.log(post,"post")


  return (
    <>
     <Navbar/>

     <h1>{post.title}</h1>
     <img src={post.img_url} alt={post.title}/>
     <p>{post.description}</p>

     <div className='footer-post'>
        {}
     </div>
    </>
  )
}

export default Categorydetail