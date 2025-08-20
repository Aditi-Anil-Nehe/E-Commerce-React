import React,{useState} from 'react';

import Navbar from '../Component/Navbar.jsx';
import Card from '../Component/Card.jsx';



const Dashboard = ({product=[]}) => {
   const [productsState, setproductsState] = useState(product);
  return (
    <>
      <Navbar/>


      <div className="d-flex flex-wrap">
        {product.map((product , index)=>(
            <div keys={index}>
                <div className='badge bg-secondary'>
                    {product.category}
                </div>
            </div>
        ))}

        <div className="container">
            <div className='row'>
               {productsState.map((product , index)=>(
                <div className='col-12 col-md-6 col-lg-3'
                 keys={index}>
                <Card product = {product}/>
                </div>
               ))}
              </div>

        </div>

      </div>
    </>
  )
}

export default Dashboard;
