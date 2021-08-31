import React, { useEffect } from 'react';
import ReactDOM from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import Popper from 'popper.js';
import Icon from '@material-ui/core/Icon';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';
import TrendingFlatIcon from '@material-ui/icons/TrendingFlat';
import MarkunreadMailboxIcon from '@material-ui/icons/MarkunreadMailbox';
import SportsVolleyballIcon from '@material-ui/icons/SportsVolleyball';
import SyncAltIcon from '@material-ui/icons/SyncAlt';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import DetailsIcon from '@material-ui/icons/Details';

import logo1 from './a.PNG';
import img1 from './pics1.png';
import img2 from './pics2.png';
import img3 from './pics3.png';
import img4 from './pics4.png';
import img5 from './pics5.png';
import img6 from './pics6.png';
import img7 from './pics7.png';
import a1 from './aa.PNG';
import backgrounddots from './backgrounddots.PNG';





function Landingpage()
{
useEffect(()=>{{
    document.title='bustani --all slides';
}})

    return(<div className='container-fluid ' style={{backgroundColor:'#F5F5F5  '  }}>
        
        <div className='row p-5'>

      

            <div className='col-5'>
                 <h1>Bustani <span><img src={logo1}/></span></h1>
            </div>

            <div className='col-1'>
                 <a href='' style={{color:'#3F0000' , textDecoration:'none'}}><h6>Who are?</h6></a>
            </div>

            <div className='col-1'>
            <a href='' style={{color:'#3F0000' ,  textDecoration:'none'}}><h6>The Future</h6></a>
            </div>

            <div className='col-1'>
            <a href='' style={{color:'#3F0000' , textDecoration:'none'}}><h6>Fastest MVP</h6></a>
            </div>

            <div className='col-1'>
            <a href='' style={{color:'#3F0000' , textDecoration:'none'}}><h6>Clients</h6></a>
            </div>

            <div className='col-1'>
             English <br></br><p style={{color:'#AFB6B1 '}}>German</p>
            </div>

            <div className='col-2'>
           <button type='button' className='btn-lg' style={{backgroundColor:'#8DFFDF', borderRadius:'15px' ,
        border:'3px solid #00D59A ' }}>
           &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<strong>Contact</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</button>
            </div>
        </div>

        

<br></br><br></br><br></br><br></br>
        <div className='row p-5'>

  

<div className='col-6'>
<b><u style={{color:'#20FFC1'}}><h1 style={{fontSize:'70px' , color:'black'}}>We do it.</h1></u></b><br></br>
<h3>Fastest MVP in Town.</h3><br></br>
<h3>Everyone is talking about digital business models, 
automated processes, and artificial intelligence.</h3>

<div style={{backgroundImage:`url(${a1})` , backgroundColor:'#F5F5F5  '  , backgroundRepeat:'no-repeat'}}>

<br></br>



<p style={{fontSize:'25px'}}>We develop your individual software and we make sure that you are the first on the market.</p>

<br></br><br></br>


<button type='button' className='btn-lg p-1' style={{backgroundColor:'#8DFFDF', borderRadius:'15px' ,
        border:'3px solid #00D59A ' }}>
           &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<b>Get Started </b>&nbsp;&nbsp;&nbsp; &nbsp;
           <span style={{color:'#4BB286'}}>It's Free.</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 
           <ArrowRightIcon style={{fontSize:'50px'}}></ArrowRightIcon></button>
<br></br><br></br><br></br>
<h4 style={{color:'#9EA2A1 '}}>We think radically to create relevance.</h4>
<br></br><br></br>
<h3>Trusted By</h3>
</div>
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

<div className='col-6' style={{background: 'linear-gradient( to bottom right ,#2F97EC, #08ECC0 )'}}>
<br></br><br></br>

<div style={{height:'100px' , width:'100%' , backgroundColor:'white' , borderRadius:'15px' ,
 borderBottom:'4px solid #4EFFBD'}}>


    <div className='row'>
        <div className='col-2 offset-1'>
<TrendingFlatIcon style={{fontSize:'80px'}}></TrendingFlatIcon>
        </div>
        <div className='col-6'>

        <p className=' p-2' style={{fontSize:'16px'}}> If you are looking for someone to blindly<br></br>
implement a set of specifications, DO NOT call.</p>


        </div>
    </div>

       </div>

       <br></br><br></br>


       <div style={{height:'100px' , width:'100%' , backgroundColor:'white' , borderRadius:'15px'
    , borderBottom:'4px solid #4EFFBD'}}>


    <div className='row'>
        <div className='col-2 offset-1'>
<TrendingFlatIcon style={{fontSize:'80px'}}></TrendingFlatIcon>
        </div>
        <div className='col-6'>

        <p className='p-2'>We are only interested in relevance and impact that
enables companies to gain maximum benefit.</p>

        </div>
    </div>

       </div>

       <br></br><br></br>

       <div style={{height:'100px' , width:'100%' , backgroundColor:'white' , borderRadius:'15px'
    , borderBottom:'4px solid #4EFFBD'}}>


    <div className='row'>
        <div className='col-2 offset-1'>
<TrendingFlatIcon style={{fontSize:'80px'}}></TrendingFlatIcon>
        </div>
        <div className='col-6'>

        <p className=' p-2'> That's why we insist on being able to contribute our expertise.</p>


        </div>
    </div>

       </div>

       
       <br></br><br></br>

    


</div>

<div className='col-6'>
<img src={img3} style={{ width:'100%' , height:'auto'}}/>
</div>
</div>
<br></br><br></br><br></br>
<div className='row' style={{backgroundColor:'F6F7FB'}}>

    <div className='col-6'>
    <img src={img4} style={{ width:'100%' , height:'auto'}}/>
    </div>

     
    <div className='col-6 p-4'>
        <br></br><br></br>
<h1 style={{fontSize:'50px'}}>From the idea to<br></br>
value creation in 3 weeks</h1><br></br>
<h2>Fastest MVP in Town.</h2><br></br>
<h5>The fastest way to radically benefit. And that is relevance for your customer.</h5>
    <br></br>
    <a href='' style={{textDecoration:'none'}}>
<p style={{color:'#147AFE' , fontSize:'20px'}}><TrendingFlatIcon style={{fontSize:'40px' , color:'1F6AFF'}}></TrendingFlatIcon>
&nbsp;&nbsp;Let's have a talk</p></a>

    </div>
    </div>

<br></br><br></br><br></br><br></br>


<div style={{backgroundColor:'#F3FDFF'}}>

<br></br><br></br><br></br><br></br>
<br></br><br></br><br></br><br></br>

<br></br><br></br><br></br><br></br>
    <div className='row' >
<div className='col-3 offset-1'>

<div style={{height:'90px' , width:'100%' ,background: 'linear-gradient( to right ,#6CD3F6, #6493FE)' , borderRadius:'20px' , color:'white'}}>
<h3 className='text-center p-4'>3 Weeks.</h3>
</div>

</div>

<div className='col-3 offset-1'>

<div style={{height:'90px' , width:'100%' ,background: 'linear-gradient( to right ,#6CD3F6, #6493FE)', borderRadius:'20px'  , color:'white'}}>
<h3 className='text-center p-4'>21 Days.</h3>
</div>

</div>

<div className='col-3 offset-1'>

<div style={{height:'90px' , width:'100%' , background: 'linear-gradient( to right ,#6CD3F6, #6493FE)' , borderRadius:'20px' , color:'white'}}>
<h3 className='text-center p-4'>504 Hours.</h3>
</div>

</div>
    </div>

<br></br><br></br><br></br><br></br><br></br>
    <div className='row' style={{backgroundColor:'#F3FDFF'}}>
<div className='col'>
<h1> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;After that, we deliver<br></br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Every time.</h1>

<a href='' style={{textDecoration:'none'}}>
<p style={{color:'#147AFE' , fontSize:'20px'}}>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    <TrendingFlatIcon style={{fontSize:'40px' , color:'1F6AFF'}}>

</TrendingFlatIcon>&nbsp;&nbsp;
Let's have a talk</p></a>

<br></br><br></br><br></br><br></br>
<br></br><br></br><br></br><br></br>

</div>
    </div>

    </div>

    <div className='row text-center'  style={{backgroundColor:'#FFFFFF'}}>
<div className='col'>
<br></br><br></br><br></br><br></br>
<br></br><br></br><br></br><br></br>
<br></br><br></br><br></br><br></br>
<h1 >We build digital products <br></br>We are <span style={{width:'10px' , height:'10px',
borderRadius:'18px' , backgroundColor:'#8DFFDF'}} className='my-5'>Coders...</span></h1>

<br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
</div>

    </div>

    

<div className='row' style={{backgroundColor:'#FCFCFC'  }}>


<div className='col-4 offset-1 p-5'  style={{ backgroundImage:`url(${backgrounddots})` 
,  height:'230px' , backgroundRepeat:'repeat-y'}}>
<h1 style={{fontSize:'45px'}}><br></br>Conception</h1><br></br>
<h5>Ideas, visions, problems or the<br></br> desire to do something new?<br></br>
We listen and implement.</h5>
</div>

<div className='col-4 p-5' >
<h1 style={{fontSize:'45px'}}><br></br>Development</h1><br></br>

<div style={{ backgroundImage:`url(${backgrounddots})`,
backgroundRepeat:'repeat-y' , height:'230px'}}>
<h5 >We develop intelligent platforms and<br></br> mobile applications for you!<br></br><br></br>
We are bilingual.<br></br>
Our native language is design.<br></br>
And we also speak native in development.</h5>
</div>
</div>

<div className='col-3 p-5'  style={{ backgroundImage:`url(${backgrounddots})` ,  height:'160px'}}>
<h1 style={{fontSize:'45px' , backgroundRepeat:'repeat-y'}}><br></br>Evolution</h1><br></br>
<h5>We develop a digital evolution <br></br>together</h5>

<br></br><br></br><br></br><br></br><br></br><br></br>
</div>

</div>

<div style={{backgroundColor:'#FFFFFF'}}>
<br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
</div>


<div className='row' style={{background: 'linear-gradient( to right ,#0EE9E2, #20E4B2)'}}>
<div className='col offset-3'>
<br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
<b><h1 style={{fontSize:'70px' , fontWeight:'70px'}}>SEC <br></br>SPEED <br></br>EMPATHY <br></br>COOPERATION<br></br></h1>
<hr style={{ width:'440px' , height:'10px' , backgroundColor:'#FFFFFF'}}></hr>
</b><br></br><br></br><br></br>

<h1>From this we write success <br></br>stories.Every time...</h1>
<br></br><br></br>
<button type='button' className='btn-lg p-1' style={{backgroundColor:'black' , color:'white' , borderRadius:'40px' ,
         }}>
           <ArrowRightIcon style={{fontSize:'40px'}}></ArrowRightIcon>
           &nbsp;&nbsp;<b>Learn how we do it. </b>&nbsp;&nbsp;&nbsp; &nbsp;
            </button>


<br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>

</div>
</div>
<br></br><br></br><br></br>

<div style={{width:'100%' , height:'auto' , borderBottom:'12px solid blue' , borderLeft:'12px solid blue'
, borderRight:'12px solid blue'}}>
<div className='row' style={{backgroundColor:'#00B4FF'}}>

<div className='col-6 p-5'>
<br></br><br></br><h1 style={{color:'white'  , fontSize:'43px'}}>A successful platform consists of 4 components that will lead to artificial
intelligence in the future.</h1>
<br></br><br></br>
<h1>Fast, Smart, Slim and Spectacular
Ok. It's not that simple after all.</h1>
</div>

<div className='col-6'><br></br><br></br><br></br><br></br><br></br>
<img src={img5} style={{ width:'100%' , height:'auto'}}/>
</div>
</div>
<br></br><br></br><br></br><br></br><br></br>


<div className='row' >



<div className='col-5 p-5 offset-1' style={{background: 'linear-gradient( to right ,#11F9E9, #01E3BE)'}}>
<h1>UI and UX Design</h1><br></br>
<h5>Not only beautiful, but also intuitive?<br></br>
We do that!</h5>
</div>

<div className='col-5 p-5 mx-4' style={{background: 'linear-gradient( to right ,#11F9E9, #01E3BE)'}}>
<h1>API'S</h1><br></br>
<h5>The brain of digitalisation</h5>
</div>


</div>

<br></br><br></br>

<div className='row'>

<div className='col-5 p-5 offset-1' style={{background: 'linear-gradient( to right ,#11F8E7, #01E3BE)'}}>
<h1>Algorithms and AI</h1><br></br>
<h5>The heart of digitisation</h5>
</div>

<div className='col-5 p-5 mx-4' style={{background: 'linear-gradient( to right ,#11F8E7, #01E3BE)'}}>
<h1>Databases</h1><br></br>
<h5>The engine of digitalisation</h5>
</div>
</div>
<br></br><br></br><center>
<a href='' style={{textDecoration:'none'}}>
<p style={{color:'#147AFE' , fontSize:'20px'}}><TrendingFlatIcon style={{fontSize:'40px' , color:'1F6AFF'}}></TrendingFlatIcon>
&nbsp;&nbsp;Let's have a talk</p></a>
</center>
</div>
<br></br><br></br><br></br><br></br>
<br></br><br></br><br></br><br></br><br></br>
<div className='row' style={{backgroundColor:'#EBFFFA'}}>

<div className='col-6'>
<br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
<h1>We pursue only one goal</h1><br></br>
<b><h1 style={{fontSize:'50px' , color:'#29C4BE '}}>We make our clients<br></br>
relevant to your clients.</h1><br></br><br></br></b>

<h1>Radical relevance.<br></br>
That is our positioning.<br></br>
Sounds good. Is good.</h1>
</div>

<div className='col-6'>
<br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
<img src={img6} style={{ width:'100%' , height:'auto' , borderBottom:'14px solid black'
, borderRight:'14px solid black'}}/>
<br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
</div>
</div>

<div style={{backgroundColor:'#5C8BC0'}}>
<img src={img2} style={{ width:'100%' , height:'auto'}}/><br></br><br></br><br></br><br></br>
<img src={img2} style={{ width:'100%' , height:'auto'}}/><br></br><br></br><br></br><br></br>
<img src={img2} style={{ width:'100%' , height:'auto'}}/><br></br><br></br><br></br><br></br>
<img src={img2} style={{ width:'100%' , height:'auto'}}/>
</div>




<div className='row' style={{backgroundColor:'#EDFAFF'}}>
    <div className='col offset-3'>
    <br></br><br></br><br></br><br></br><br></br><br></br>
<h1>We think entrepreneurial</h1><br></br>
<h1 style={{color:'#298BC4'}}>We think as radically as possible to be as relevant as possible.</h1><br></br><br></br>

<i>
<h3><MarkunreadMailboxIcon style={{fontSize:'20px'}}></MarkunreadMailboxIcon>&nbsp;&nbsp;&nbsp;&nbsp;We work, even the managing directors.</h3><br></br>
<h3><SportsVolleyballIcon style={{fontSize:'20px'}}></SportsVolleyballIcon>&nbsp;&nbsp;&nbsp;&nbsp;For world-class clients..</h3><br></br>
<h3><SyncAltIcon style={{fontSize:'20px'}}></SyncAltIcon>&nbsp;&nbsp;&nbsp;&nbsp;We don't like inflated processes.</h3><br></br>
<h3><FavoriteBorderIcon style={{fontSize:'20px'}}></FavoriteBorderIcon>&nbsp;&nbsp;&nbsp;&nbsp;We love customer journeys.</h3><br></br>
</i>
<br></br><br></br><br></br><br></br><br></br>
</div>
</div>



<div className='row' style={{background: 'linear-gradient( to right ,#B389F9, #97DAE2)'}}>
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
<div className='col-7 '>
<h1>Get in touch as soon as possible.<br></br>
We can talk about ASAP process in flash.</h1>
</div>

<div className='col-4 offset-1 p-3'>


<button type='button' className='btn-lg p-1' style={{backgroundColor:'#8DFFDF', borderRadius:'15px' ,
        border:'3px solid #00D59A ' }}>
           &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<b>Get Started </b>&nbsp;&nbsp;&nbsp; &nbsp;
           <span style={{color:'#4BB286'}}>It's Free.</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 
           <ArrowRightIcon style={{fontSize:'50px'}}></ArrowRightIcon></button>

</div>
</div>



<div style={{backgroundColor:'#8EF6DB'}}>
<div className='row '>

<div className='col-6 p-5' style={{backgroundColor:'#8EF6DB'}}>
<h1 style={{fontSize:'55px'}}>
Added Value Generation
</h1>
<br></br>
 <h5 style={{fontSize:'35px'  , color:'#654321' }}>Give us call<br></br>
Leverage your Potential<br></br>
Don’t hesitate.<br></br>
Do it now.</h5>

</div>

<div className='col-6'>

<img src={img7} style={{ width:'770px' , height:'auto' }}/>
</div>

</div>
</div>


<br></br><br></br><br></br><br></br>
<h1 style={{fontSize:'60px' , color:'#00AEA2'}} className='p-2'>Are you ready for the next big thing?</h1>
<br></br>
<h1 style={{fontSize:'60px'}} className='p-2'>Lets talk?</h1>
<br></br><br></br><br></br>

<div className='row p-2'>
<div className='col'>

<h1 >

Hey, my name is   &nbsp; &nbsp;<input type='text' style={{border:'none' , borderBottom:'5px solid black' , 
width:"300px" , color:'#C6C6C6' , backgroundColor:'#F5F5F5' , outline:'none'}} value="  &nbsp; &nbsp;Type Here"/>

&nbsp; &nbsp;and i'm looking for &nbsp; &nbsp;<input type='text' style={{border:'none' , borderBottom:'5px solid black' , 
width:"330px" , color:'#C6C6C6' , backgroundColor:'#F5F5F5' , outline:'none'}} value=" Web Development"/> <DetailsIcon style={{fontSize:'37px' , color:'black'}}></DetailsIcon>

<br></br><br></br>

Additionally I want to say &nbsp; &nbsp;<input type='text' style={{border:'none' , borderBottom:'5px solid black' , 
width:"950px" , color:'#C6C6C6'  , backgroundColor:'#F5F5F5' , outline:'none'}} value=" You Message (optional) "/>

<br></br><br></br>
<input type='text' style={{border:'none' , borderBottom:'5px solid black' , 
width:"1420px" , color:'#C6C6C6' , backgroundColor:'#F5F5F5' , outline:'none' }} />

<br></br><br></br>

Contact with me at &nbsp; &nbsp;<input type='text' style={{border:'none' , borderBottom:'5px solid black' , 
width:"600px" , color:'#C6C6C6'  , backgroundColor:'#F5F5F5' , outline:'none'}}  value="  &nbsp; &nbsp; &nbsp; &nbsp;Your Email Address."/>
</h1>
<span></span>

</div>
</div>

<br></br><br></br><br></br><br></br>


<button type='button' className='btn-lg p-1' style={{backgroundColor:'black' , color:'white' , borderRadius:'50px' ,
        border:'4px solid' }}>
          <ArrowRightIcon style={{fontSize:'45px'}}>
          &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;</ArrowRightIcon> &nbsp;<b>Send Message</b>&nbsp;&nbsp;&nbsp; &nbsp;
          &nbsp;&nbsp;&nbsp;
        </button>





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
    Bustani <span><img src={logo1}/></span>
</h1>
</div>

<div className='col-3 '>
    <h3>© 2021 Bustani, Inc.</h3>
</div>
</div>
    </div>)
}

export default Landingpage;
