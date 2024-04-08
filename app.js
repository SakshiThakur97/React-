
import React from "react";
import  ReactDOM from "react-dom/client";

//APP LAYOUT{
// Heading - Logo , navigation bar

//body - food cart , search bar 
//footer- links , about section }



// app layout - this contains the whole layout.

const Heading = () => {
    return( <div className="header">
             <div>
              <img className="logo" src="https://cdn.vectorstock.com/i/500p/60/58/chef-cook-food-logo-vector-14736058.jpg" /> 
             </div> 

             <div className="navigation"> 
               <ul>
                  <li>Home</li>  
                 <li>About Us</li>
                 <li>Contact us </li>
                 <li> Cart</li>
               </ul>

            
            </div>

             
         </div>
);
};




const AppLayout = () =>{
  return <div className="app">
    <Heading/>
  </div> 

};

const root = ReactDOM.createRoot(document.getElementById("root")) 
root.render(<AppLayout/>)