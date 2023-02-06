import React from 'react'
import { Link } from 'react-router-dom'


const apiUploadURL = "https://ecommerce-web-app.onrender.com";

function Card({item}) {










   return (
    <div className='m-2 mx-auto ' >
      <Link to={`/product/${item.id}`}>
        <div className="featured-image-container   ">
          { item?.attributes.isNew ? <div className='p-2 m-1 absolute z-10  text-xs font-medium  border-2 text-black hover:font-black transition-all ease-in-out duration-500' ><span className=''>Must-Have</span></div> : null}
        
                <img  className='card-image image-hover ' src={item?.attributes.img.data[0].attributes.url} alt="" />
       

             <img className='card-image ' src={  item?.attributes.img2.data[0].attributes.url} alt="secondImg" />
  
    
           

        </div>
        <div className="product_info p-2">

            <h3 className='text-md font-normal capitalize '>{item?.attributes.title}</h3>
            <div className='flex space-x-2'>
              <h6 className='text-gray-500 line-through'>₹ { item?.oldPrice || item?.attributes.price+50}</h6>
            <h5> <span >₹</span><strong>{item?.attributes.price}</strong> </h5>
            </div>


        </div>

       </Link>
    </div>
  )
}

export default Card