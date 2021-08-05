import React from 'react';
import ReactDOM from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import Popper from 'popper.js';


import img1 from './pics1.png';
import img2 from './pics2.png';
import img3 from './pics3.png';
import img4 from './pics4.png';
import img5 from './pics5.png';
import img6 from './pics6.png';
import img7 from './pics7.png';


function Landingpage()
{
    return(<div className='container' style={{backgroundColor:'#E9F5F1 '}}>
        <br></br>
        <div className='row'>

            <div className='col-2'>
                 <h1>Bustani</h1>
            </div>

            <div className='col-2'>
                 <h6>Who we are?</h6>
            </div>

            <div className='col-2'>
                 <h6>The Future</h6>
            </div>

            <div className='col-2'>
                 <h6>Fastest MVP</h6>
            </div>

            <div className='col-1'>
                 <h6>Clients</h6>
            </div>

            <div className='col-1'>
             English <br></br>German
            </div>

            <div className='col-1'>
           <button type='button' className='btn-lg' style={{backgroundColor:'#81F4D0' , borderRadius:'25px'}}>Contact</button>
            </div>
        </div>

<br></br><br></br><br></br><br></br>
        <div className='row'>

<div className='col-6'>
<b><u style={{color:'#81F4D0'}}><h1 style={{fontSize:'60px' , color:'black'}}>We do it.</h1></u></b><br></br>
<h3>Fastest MVP in Town.</h3><br></br>
<h3>Everyone is talking about digital business models, 
automated processes, and artificial intelligence.</h3><br></br>
<h3>We develop your individual software and we make sure that you are the first on the market.</h3>

<br></br><br></br>
<button type='button' className='btn-lg' style={{backgroundColor:'#81F4D0' , borderRadius:'25px'}}>Get Started  Its Free</button>
<br></br><br></br>
<h3>We think radically to create relevance.</h3>
</div>

            
<div className='col-6'>
    <br></br><br></br><br></br><br></br>
<img src={img1} style={{ width:'100%' , height:'auto'}}/>
</div>
</div>
<br></br><br></br>
<div className='row'>
<div className='col'>
    <br></br><br></br>
<img src={img2} style={{ width:'100%' , height:'auto'}}/>
</div>
</div>

<br></br><br></br>
<div className='row'>

<div className='col-6' style={{backgroundColor:'#89C0F1 '}}>
<br></br><br></br>

<div style={{height:'100px' , width:'100%' , backgroundColor:'white' , borderRadius:'25px'}}>
<p className='text-center p-2'>If you are looking for someone to blindly<br></br>
implement a set of specifications, DO NOT call.</p>
</div><br></br><br></br>

<div style={{height:'100px' , width:'100%' , backgroundColor:'white' , borderRadius:'25px'}}>
<p className='text-center p-2'>If you are looking for someone to blindly<br></br>
implement a set of specifications, DO NOT call.</p>
</div><br></br><br></br>

<div style={{height:'100px' , width:'100%' , backgroundColor:'white' , borderRadius:'25px'}}>
<p className='text-center p-2'>If you are looking for someone to blindly<br></br>
implement a set of specifications, DO NOT call.</p>
</div>

</div>

<div className='col-6'>
<img src={img3} style={{ width:'100%' , height:'auto'}}/>
</div>
</div>
<br></br><br></br><br></br>
<div className='row'>

    <div className='col-6'>
    <img src={img4} style={{ width:'100%' , height:'auto'}}/>
    </div>

     
    <div className='col-6 text-center'>
        <br></br><br></br>
<h1>From the idea to<br></br>
value creation in 3 weeks</h1>
<h2>Fastest MVP in Town.</h2><br></br>
<h5>If you are looking for someone to blindly
implement a set of specifications, DO NOT call.
We are only interested in relevance and impact that
enables companies to gain maximum benefit.That's why we insist on being able to contribute our expertise.The fastest way to radically benefit. And that is relevance for your customer.</h5>
    <br></br>
<h6 style={{color:'blue'}}>Let's have a talk</h6>
    </div>
    </div>

<br></br><br></br><br></br><br></br>
    <div className='row'>
<div className='col-3 offset-1'>

<div style={{height:'90px' , width:'100%' , backgroundColor:'#89C0F1 ' , borderRadius:'25px'}}>
<h3 className='text-center p-4'>3 Weeks.</h3>
</div>

</div>

<div className='col-3 offset-1'>

<div style={{height:'90px' , width:'100%' , backgroundColor:'#89C0F1 ' , borderRadius:'25px'}}>
<h3 className='text-center p-4'>21 Days.</h3>
</div>

</div>

<div className='col-3 offset-1'>

<div style={{height:'90px' , width:'100%' , backgroundColor:'#89C0F1 ' , borderRadius:'25px'}}>
<h3 className='text-center p-4'>504 Hours.</h3>
</div>

</div>
    </div>

<br></br><br></br><br></br><br></br><br></br>
    <div className='row'>
<div className='col'>
<h2>After that, we deliver<br></br>
Every time.</h2>
<br></br>
<h5 style={{color:'blue'}}>Let's have a talk</h5>
</div>
    </div>

<br></br><br></br>
    <div className='row text-center'>
<div className='col'>
<h1>We build digital products <br></br>We are <span style={{width:'10px' , height:'10px',
borderRadius:'20px' , backgroundColor:'#81F4D0'}}>Coders...</span></h1>
</div>
    </div>

    <br></br><br></br><br></br><br></br><br></br>

<div className='row text-center'>

<div className='col-4'>
<h1>Conception</h1><br></br>
<h5>Ideas, visions, problems or the<br></br> desire to do something new?<br></br>
We listen and implement.</h5>
</div>

<div className='col-4'>
<h1>Development</h1><br></br>
<h6>We develop intelligent platforms and<br></br> mobile applications for you!<br></br>
We are bilingual.<br></br>
Our native language is design.<br></br>
And we also speak native in development.</h6>
</div>

<div className='col-4'>
<h1>Evolution</h1><br></br>
<h6>We develop a digital evolution <br></br>together</h6>
</div>

</div>
<br></br><br></br><br></br><br></br>

<div className='row' style={{backgroundColor:'#81F4D0'}}>
<div className='col offset-3'>
<br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
<b><h1 style={{fontSize:'60px'}}>SEC <br></br>SPEED <br></br>EMPATHY <br></br>COOPERATION</h1>
</b><br></br><br></br><br></br>

<h1>From this we write success <br></br>stories.Every time...</h1>
<br></br><br></br>
<button type='button' className='p-3' style={{backgroundColor:'black' , color:'white' , borderRadius:'15px'
}}>Learn how we do it..</button>
<br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>

</div>
</div>
<br></br><br></br><br></br>

<div style={{width:'100%' , height:'auto' , border:'12px solid blue'}}>
<div className='row' style={{backgroundColor:'#8BB0ED '}}>

<div className='col-6 p-5'>
<br></br><br></br><h1 style={{color:'white'  }}>A successful platform consists of 4 components that will lead to artificial
intelligence in the future.</h1>
<br></br><br></br>
<h1>Fast, Smart, Slim and Spectacular
Ok. It's <br></br>not that simple after all.</h1>
</div>

<div className='col-6'><br></br><br></br><br></br><br></br><br></br>
<img src={img5} style={{ width:'100%' , height:'auto'}}/>
</div>
</div>
<br></br><br></br><br></br><br></br><br></br>


<div className='row'>

<div className='col-4 p-5 offset-1' style={{backgroundColor:'#81F4D0'}}>
<h1>UI and UX Design</h1><br></br>
<h5>Not only beautiful, but also intuitive?<br></br>
We do that!</h5>
</div>

<div className='col-4 p-5 offset-1' style={{backgroundColor:'#81F4D0'}}>
<h1>API'S</h1><br></br>
<h5>The brain of digitalisation</h5>
</div>


</div>

<br></br><br></br>

<div className='row'>

<div className='col-4 p-5 offset-1' style={{backgroundColor:'#81F4D0'}}>
<h1>Algorithms and AI</h1><br></br>
<h5>The heart of digitisation</h5>
</div>

<div className='col-4 p-5 offset-1' style={{backgroundColor:'#81F4D0'}}>
<h1>Databases</h1><br></br>
<h5>The engine of digitalisation</h5>
</div>
</div>
<br></br><br></br>
<center><h4 style={{color:'blue'}}>Let's have a talk</h4></center>
</div>
<br></br><br></br><br></br><br></br>
<br></br>
<div className='row'>

<div className='col-6'>
<h1>We pursue only one goal</h1><br></br>
<h1 style={{fontSize:'50px' , color:'#89CDE5 '}}>We make our clients<br></br>
relevant to your clients.</h1><br></br><br></br>

<h1>Radical relevance.<br></br>
That is our positioning.<br></br>
Sounds good. Is good.</h1>
</div>

<div className='col-6'>
<img src={img6} style={{ width:'100%' , height:'auto'}}/>
</div>
</div>
<br></br><br></br><br></br><br></br>
<div style={{backgroundColor:'#6D89DA '}}>
<img src={img2} style={{ width:'100%' , height:'auto'}}/><br></br><br></br><br></br><br></br>
<img src={img2} style={{ width:'100%' , height:'auto'}}/><br></br><br></br><br></br><br></br>
<img src={img2} style={{ width:'100%' , height:'auto'}}/><br></br><br></br><br></br><br></br>
<img src={img2} style={{ width:'100%' , height:'auto'}}/>
</div>


<br></br><br></br><br></br>

<div className='row'>
    <div className='col offset-3'>
<h1>We think entrepreneurial</h1><br></br>
<h1 style={{color:'blue'}}>We think as radically as possible to be as relevant as possible.</h1><br></br><br></br>

<i>
<li style={{fontSize:'30px'}}>We work, even the managing directors.</li>
<li style={{fontSize:'30px'}}>For world-class clients..</li>
<li style={{fontSize:'30px'}}>We don't like inflated processes.</li>
<li style={{fontSize:'30px'}}>We love customer journeys.</li>
</i>
</div>
</div>

<br></br><br></br><br></br>

<div className='row' style={{backgroundColor:'#AE78E8 '}}>
<div className='col offset-1'><br></br><br></br><br></br>
<h1 style={{color:'white'}}>Our first question:<br></br>
What would we do with your budget if it were our business?</h1><br></br><br></br>

<h2>We are interested in your company and want to understand your business model.<br></br>
Then we can best support you.<br></br>
Sounds logical, doesn't it?</h2><br></br><br></br>

<h2 style={{color:'white'}}>Sounds logical, doesn't it?</h2><br></br><br></br><br></br><br></br>
</div>
</div>

<div className='row p-5' style={{color:'white' , backgroundColor:'black'}}>
<div className='col'>
<h1>Get in touch as soon as possible.<br></br>
We can talk about our ASAP process in a flash.</h1>
</div>
</div>
<br></br>
<div className='row p-3'>

<div className='col-6 p-3' style={{backgroundColor:'#81F4D0'}}><br></br><br></br><br></br><br></br>
<h1>
Added Value GenerationLet's
</h1>
<br></br>
<li style={{fontSize:'30px'}}>Give us call</li>
<li style={{fontSize:'30px'}}>Leverage your Potential</li>
<li style={{fontSize:'30px'}}>Don’t hesitate.</li>
<li style={{fontSize:'30px'}}>Do it now.</li>

</div>

<div className='col-6'>
<img src={img7} style={{ width:'100%' , height:'auto'}}/>
</div>

</div>

<br></br><br></br><br></br><br></br>
<center><h1 style={{fontSize:'60px' , color:'#A1CAA8 '}}>Are you ready for the next big thing?</h1></center>
<br></br>
<center><h1 style={{fontSize:'60px'}}>Lets talk?</h1></center>
<br></br><br></br><br></br>

<div className='row'>
<div className='col'>

    <h1>
    Hey, my name is  &nbsp; &nbsp;&nbsp;&nbsp; <span style={{color:'#BACAC5' ,  borderBottom:'5px solid black'}}> &nbsp; &nbsp;&nbsp;&nbsp;  
    &nbsp; &nbsp;&nbsp;&nbsp; Type Here  &nbsp; &nbsp;&nbsp;&nbsp; &nbsp; &nbsp;&nbsp;&nbsp;  </span>

    &nbsp; &nbsp;&nbsp;&nbsp; And I am looking for <br></br><br></br><span style={{color:'#BACAC5' ,  borderBottom:'5px solid black'}}> &nbsp; &nbsp;&nbsp;&nbsp;  
    &nbsp; &nbsp;&nbsp;&nbsp; Web development  &nbsp; &nbsp;&nbsp;&nbsp; &nbsp; &nbsp;&nbsp;&nbsp;  </span>

    &nbsp; &nbsp;&nbsp;&nbsp; Additionally I want to say
    <br></br><br></br><span style={{color:'#BACAC5' ,  borderBottom:'5px solid black'}}> &nbsp; &nbsp;&nbsp;&nbsp;  
    &nbsp; &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;
     Your message(optional) &nbsp; &nbsp;&nbsp;&nbsp; &nbsp; &nbsp;&nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;
     &nbsp; &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp; </span>
<br></br><br></br>
      contact with me at &nbsp;&nbsp; &nbsp;&nbsp; <span style={{color:'#BACAC5' ,  borderBottom:'5px solid black'}}> &nbsp; &nbsp;&nbsp;&nbsp;  
    &nbsp; &nbsp;&nbsp;&nbsp; Your email Address.  &nbsp; &nbsp;&nbsp;&nbsp; &nbsp; &nbsp;&nbsp;&nbsp;  </span>

    </h1>

    <br></br><br></br><br></br><br></br>
    <button type='button' style={{backgroundColor:'black' , color:'white' , borderRadius:'24px'}} className='p-3 m-5 btn-lg'>Send message</button>

</div>
</div>

<br></br><br></br><br></br><br></br>

<center>
<div className='row'>

<div className='col-4'>
<h3>Bustani-Consulting GmbH<br></br>
Am Graswege 6<br></br>
D-30169 Hannover</h3>
</div>

<div className='col-4'>
<h3>info@bustani-consulting.de</h3>
</div>

<div className='col-4'>
<h3>Privacy<br></br>
imprint</h3></div>

</div>
</center>
<br></br><br></br><br></br>
<div className='row'>
<div className='col-4 offset-3'>
<h1>
    Bustani
</h1>
</div>

<div className='col-3 '>
    <h3>© 2021 Bustani, Inc.</h3>
</div>
</div>
    </div>)
}

export default Landingpage;