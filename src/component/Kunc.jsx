import React from "react";
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';


 // owl carousel settings
const options = {
    loop:false,
    items:3,
    margin:0,
    autoplay:false,
    dots:false,
    autoPlayTimeout:8500,
    smartSpeed:450,
    nav:false,
    responsive: {
        0: {
            items: 2
        },
        768:{
            items:3
        },
        1024:{
            items:4
        },
        1440:{
            items:4
        },
        
        
       
       
    }

};

const Kunc = () => {
    return(

    <OwlCarousel className= " owl-carousel owl-theme    " {...options}>
        <div className="border-r border-black px-[10px]">
            <img className="h-[250px] w-[350px] md:h-[400px] md:w-[350px] lg:h-[100vh] lg:w-[100vw]   xl:px-[20px] " src={require('../assets/collimg/4p.jpeg')} alt="" />

            <h1 className="py-[5px] xl:px-[20px]"  >Vintage Black</h1>
            <h1 className = "font-[600] pb-[5px] xl:px-[20px]"  >MINIWALLET</h1>
            <br />
            <br />
            <br />
        </div>

         <div className="px-[10px]">
            <img className="h-[250px] md:h-[400px] md:w-[350px] lg:h-[100vh] lg:w-[100vw] w-[350px] xl:px-[20px] " src={require('../assets/collimg/4q.jpeg')} alt="" />
            <h1 className="py-[5px] xl:px-[20px]"  >Vintage Cognac</h1>
            <h1 className = "font-[600] pb-[5px] xl:px-[20px]"  >MINIWALLET</h1>
            <br />
            <br />
            <br />
        </div>

         <div className="border-l border-black px-[10px]">
            <img className="h-[250px] md:h-[400px] md:w-[350px] lg:h-[100vh] lg:w-[100vw] w-[350px] xl:px-[20px] " src={require('../assets/collimg/4r.jpeg')} alt="" />
            <h1 className="py-[5px] xl:px-[20px]"  >Vintage Black</h1>
            <h1 className = "font-[600] pb-[5px] xl:px-[20px]"  >SLIMWALLET</h1>
            <h1 className="xl:px-[20px]">4/6 cards<br /> 
                    +6 extra cards <br />
                    banknotes, reciepts, cards
                </h1>
        </div>

        <div className=" border-l border-black  px-[10px]">
            <img className="h-[250px] md:h-[400px] md:w-[350px] lg:h-[100vh] lg:w-[100vw] w-[350px] xl:px-[20px] " src={require('../assets/collimg/4s.jpeg')} alt="" />
            <h1 className="py-[5px] xl:px-[20px]"  >Vintage Cognac</h1>
            <h1 className = "font-[600] pb-[5px] xl:px-[20px]"  >SLIMWALLET</h1>
            <h1 className="xl:px-[20px]">4/6 cards<br /> 
                +6 extra cards <br />
                banknotes, reciepts, cards
            </h1>
        </div>

        
     </OwlCarousel>
       
    );
}

export default Kunc;