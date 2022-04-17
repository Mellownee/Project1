
import { Link,Outlet } from "react-router-dom";
import images from "../assets/images/traveling.jpg"
import expenses from "../assets/images/expenses.jpg";
import education from "../assets/images/education.jpg";
import money from "../assets/images/money.jpg"

import Footer from "./Footer";

/**
 * Link is used to set the URL and keep track of brwosing history
 * Outlet - renders the current route selected
 */
function Home(){
    return (
        <>

<div className="title" id="font">
    Welcome To Audacity Reimbursment Program  <img id="money"className="mb-5"  src={money} /> 
   
  
  </div>

< nav  className="bg-primary1 text-light mb-4 py-3 flex-row align-center">
      <div className="container flex-row justify-space-between-lg justify-center align-center">
        

<Link className="text-light" to="/UserRegistration">
          <h1 className="m-0">UserRegistration</h1>
        </Link>

        <Link className="text-light" to="/Login">
          <h1 className="m-0">Login</h1>
        </Link>

        
         
        <Link className="text-light" to="/Archive">
          <h1 className="m-0">Archive</h1>
        </Link>


        <Link className="text-light" to="/ReimbursmentForm">
          <h1 className="m-0">ReimbursmentForm</h1>
        </Link>
        
       
        </div>

</nav>
            
              


<div class="card" >
  <div class="card-body">
  <img className="mb-5"  src={expenses} />

    <h5 class="card-title">Why Reimbursment?</h5>
    <h6 class="card-subtitle mb-2 text-muted">We Invest In YOU!</h6>
    <p class="card-text">Investing in you helps us attract and retain top talent. 
    Reimbursment assistance programs can help you reach career goals. Our aim is 
    to keep motivation high and solidify the fact that you can grow at our company.
    


     </p>
  
  </div>
</div>
<div class="card" >
  <div class="card-body">
        <img className="mb-5"  src={education} />
    <h5 class="card-title">Popular!!! </h5>
    <h6 class="card-subtitle mb-2 text-muted">Events &#38; Certifications</h6>
    <ul class="card-text">
      <li>EVENTS</li>
      <li> Creativity &#38; Travel Iteneraries from Breeklee.</li>
      <li>Confidence for Decision Making from Bob Olsene.</li>
      <li>Becoming a Travel Host from HosteeMalone.</li>
      <li>Overcoming Imposter Syndrome: You are good enough! by URgoodEnuf</li>
      <li>The Essential Guide to Excelent Customer Service by Guy Taay.</li>
      <br></br>


      <li>CERTIFICATIONS</li>
      <li>Travel and Tourism Professional (TTP)	IATA</li>
      <li>Certified Travel Associate (CTA)	ICTA</li>
      <li>Certified Travel Industry Specialist (ABA,)	ABA, CTIS</li>
      <li>Certified Travel Counselor (CTC)	ICTA</li>
      <li>Certified Destination Specialist (CDS)	ICTA</li>
    </ul>
    <p>*for more information contact your direct supervisor*</p>
  </div>
</div>
<div class="card" >
  <div class="card-body">
  <img className="mb-5"  src={images} />

    <h5 class="card-title"> Traveling Fun Facts</h5>
    <h6 class="card-subtitle mb-2 text-muted"></h6>
    <p class="card-text">You have the Audacity to travel? We have the Audacity to get you there... when we get you there!</p>
    <ul>
    <li>The world's longest commercial flight took around 30 hours.</li>
    <li>The shortest commercial flight takes less than two minutes.</li>
    <li>Japanese railways hand out 'certificates' for delays of more than five minutes.</li>
    <li>The most expensive airport to city taxi ride costs around £190.</li>
    <li>India's trains transport roughly 23 million passengers each day.</li>
    <li>Saudi Arabia has no rivers.</li>
    <li>In Ethiopia the current year is 2013.</li>
    <li>It is the same time at both ends of China.</li>
    </ul>
    
  </div>
</div>
           
            
         
            
  

     

            <Footer/>
              
            
        </>
    );
}


export default Home;