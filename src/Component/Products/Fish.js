import React, {useState} from 'react';
import Fish1 from './../assets/Fish/Fish.jpg';
import Fish2 from './../assets/Fish/Fish_1.jpg';
import Fish3 from './../assets/Fish/Fish_2.jpg';

import { largeFish, mediumFish } from '../../data';

const Fish = ()=>{

    const slider = [
        {id:1, img:Fish1, heading:'Fresh Water Fishes' ,text:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero sequi, dignissimos quidem quas quia nihil, necessitatibus illo quam et quisquam nulla eos neque reprehenderit error architecto, quaerat cum labore. Eos.' },
        {id:2, img:Fish2, heading:'Large Best Quality Fishes' ,text:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero sequi, dignissimos quidem quas quia nihil, necessitatibus illo quam et quisquam nulla eos neque reprehenderit error architecto, quaerat cum labore. Eos.'},
        {id:3, img:Fish3, heading:'Mediaum and Small Fishes' ,text:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero sequi, dignissimos quidem quas quia nihil, necessitatibus illo quam et quisquam nulla eos neque reprehenderit error architecto, quaerat cum labore. Eos.'},
    ]

    

    return(
        <>
    <div className=" mt-4 p-3">
    <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img height="400px" src={slider[0].img} class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img height="400px" src={slider[1].img} class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img height="400px" src={slider[2].img} class="d-block w-100" alt="..."/>
    </div>
  </div>
  <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="sr-only">Previous</span>
  </a>
  <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="sr-only">Next</span>
  </a>
</div>
    </div>

    {/* large fish */}
    <div className='container my-4'>
    <h1 className='text-center'>Large Fishes</h1>
        <div className='row  my-4 text-center'>
        {largeFish.map(lf=>(
                <div className="col-md-3 text-center m-1" style={{'border':'1px solid #ccc'}}>
                   
                   <h5>{lf.title}</h5>
                    <img height="200px" src={lf.img} alt="" />
                    <p>Weight: {lf.weight}</p>
                  
                </div>
            ))}
        </div>
    </div>
    {/* End large fish */}

    {/* medium fish */}
    <div className='container my-4'>
    <h1 className='text-center'>Medium Fishes</h1>
        <div className='row  my-4'>
        {mediumFish.map(lf=>(
                <div className="col-md-3 text-center m-1" style={{'border':'1px solid #ccc'}}>
                   
                   <h5>{lf.title}</h5>
                    <img height="200px" src={lf.img} alt="" />
                    <p>Weight: {lf.weight}</p>
                  
                </div>
            ))}
        </div>
    </div>
    {/* End medium fish */}

    {/* small fish */}
    <div className='container my-4'>
    <h1 className='text-center'>Small Fishes</h1>
        <div className='row  my-4'>
        {largeFish.map(lf=>(
                <div className="col-md-3 text-center m-1" style={{'border':'1px solid #ccc',}}>
                   
                   <h5>{lf.title}</h5>
                    <img height="200px" src={lf.img} alt="" />
                    <p>Weight: {lf.weight}</p>
                  
                </div>
            ))}
        </div>
    </div>
    {/* End small fish */}
    
        </>
    )
}

export default Fish;