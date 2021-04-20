import React, {useContext,useEffect,useState } from "react";
import { useParams } from "react-router";
import "./Checkout.css"; 
import UserContext from "../../UserContext";


const Checkout = () => {
 

  const [product,setProducts]=useState();

  const [user, setUser]=useContext(UserContext);

  const {_id}=useParams();
  useEffect(() => {
    fetch(`http://localhost:8500/events/${_id}`)
    .then(res => res.json())
    .then(data => setProducts(data))
   }, [_id])
    
  return (

    <div>
      <h1>Hello {user.name}!,This is Checkout</h1>
    <table>
    <caption>Checkout</caption>
    <thead>
        <tr>
        <th scope="col">Description</th>
        <th scope="col">Quantity</th>
        <th scope="col">Amount</th>
        </tr>
    </thead>
    <tbody>
        <tr>
        <td data-label="Description">{product && product.name}</td>
        <td data-label="Quantity">{product && product.Quantity}</td>
        <td data-label="Amount">${product && product.price}</td>
        </tr>
    
        <tr>
        <td scope="row" data-label="Description">Total</td>
        <td data-label="">{product && product.Quantity}</td>
        <td data-label="Grand Total">${product && product.price}</td>
        </tr>
    </tbody>
    </table>

</div>    




    // <section className="destination">
    //   <div className="container">
    //     <div className="destination__content">
    //       <div className="destination__search">
    //         {
    //           searchVisible && <form onSubmit={handleSearch} action="" className="destination__form">
    //           <div className="input__group">
    //             <label htmlFor="pickFrom">Pick Form</label>
    //             <input onChange={(e)=>setPickFrom(e.target.value)} type="text" placeholder="TSC" id="pickFrom" />
    //           </div>
    //           <div className="input__group">
    //             <label htmlFor="pickTo">Pick Form</label>
    //             <input onChange={(e)=>setPickTo(e.target.value)} type="text" placeholder="Hatir Jheel" id="pickTo" />
    //           </div>
    //           <input className="btn__primary" type="submit" value="Search" />
    //         </form>
    //       } 
    //       {
    //         // !searchVisible && <h1>Seach Completed</h1>
    //         !searchVisible &&  <div className="location">
    //           <div className="location__wrapper">
    //             <h1 className="location__form">{pickFrom}</h1>
    //             <h1 className="location__to">{pickTo}</h1>
    //             {/* {
    //               currentVehicle.seat.map((seat,index)=>
    //               <DestinationCard key={index} vehicle={currentVehicle} seat={seat[0]} ></DestinationCard>)
    //               } */}
    //               <h3>This is {name}</h3>
                
    //           </div>

    //         </div>
    //       }
    //       </div>
    //       <div className="destination__map--box">
    //         <iframe
    //           className="destination__map"
    //           title="TSC"
    //           src="https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d29215.652590629812!2d90.38589134131558!3d23.748927945422338!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e6!4m5!1s0x3755b934fecec641%3A0xb98c1080b250d866!2sTSC%2C%20University%20of%20Dhaka%2C%20Dhaka!3m2!1d23.731775199999998!2d90.3956204!4m5!1s0x3755c783c3404f0d%3A0x76ae0d2edabc81df!2sHatir%20Jheel%2C%20Dhaka!3m2!1d23.769423999999997!2d90.41428529999999!5e0!3m2!1sen!2sbd!4v1617618149213!5m2!1sen!2sbd"
    //           width="600"
    //           height="450"
    //           allowFullScreen=""
    //         ></iframe>
    //       </div>
    //     </div>
    //   </div>
    // </section>
  );
};

export default Checkout;
