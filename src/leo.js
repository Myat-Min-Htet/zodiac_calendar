
import { ZodiacSignsDetail } from "./data";
function Leo(){

  
  const newdata= ZodiacSignsDetail.find((ZodiacSignsDetail)=> ZodiacSignsDetail.Id === 5);
        
    const {Name, MyanmarMonth,ZodiacSign2ImageUrl,Dates,Title0,Element,ElementImageUrl,Title1,LifePurpose,
      Title2,Loyal,Title3,RepresentativeFlower,Title4,Angry,Title5,Character,Title6,PrettyFeatures
    
    
    }= newdata;
    console.log(newdata)
   

  return (<div> 
   
      <h1 className="div1">{Name}</h1>
  <h1 className="div1">{MyanmarMonth}</h1>
  <h4 className="div1">{Title0}</h4>
            <h3 className="div1" id="red">{Element}</h3>
            <h4 className="div1"> {Dates}</h4>
           
 <div className="img1">
           <div > <img src={ZodiacSign2ImageUrl} alt={Name} className="adj" /></div>
            <div > <img src={ElementImageUrl} alt={Name} className="adj" /></div>
 </div>
            
            <div className="">
              <h2 className="red">{Title1}</h2>
              <h4  className="">{LifePurpose}</h4>
              <h2 className="red">{Title2}</h2>
              <h5>{Loyal}</h5>
              <h2  className="red">{Title3}</h2>
              <h5>{RepresentativeFlower}</h5>

              <h2  className="red">{Title4}</h2>
              <h5>{Angry}</h5>
              <h2  className="red">{Title5}</h2>
              <h5>{Character}</h5>
              <h2  className="red">{Title6}</h2>
              <h5>{PrettyFeatures}</h5>


            
            </div>
           
            <div className="body"></div>
            
  
  
  </div>
  )

};
export default Leo;