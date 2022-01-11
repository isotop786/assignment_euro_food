import fish from './assets/Fish/Fish.jpg'
import sf from './assets/Seafood/sf_hero.jpg';
import ff from './assets/Finger/ff_hero.jpg';
import veg from './assets/Veg/VegHero.jpg';
import { Link } from 'react-router-dom';


const About = ()=>{

    return(
        <>
        <div className="p-3 mt-4">
            <div className="row my-4">
                <div className="col-md-4"></div>
                <div className="col-md-4 text-center">
                    <h2 className="display-4">About Us</h2>
                </div>
                <div className="col-md-4"></div>
            </div>
            <div className="row">
                <div className="col-md-4 text-center">
                    <h2>Best Quality</h2>
                    <p className="lead">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam eaque delectus maiores illo quas voluptatum minus, sit quaerat adipisci fugiat ex id optio omnis eos officiis necessitatibus, alias repudiandae voluptatem?</p>
                </div>
                <div className="col-md-4 text-center">
                    <h2>Innovation</h2>
                    <p className="lead">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam eaque delectus maiores illo quas voluptatum minus, sit quaerat adipisci fugiat ex id optio omnis eos officiis necessitatibus, alias repudiandae voluptatem?</p>
                </div>
                <div className="col-md-4 text-center">
                    <h2>Commitment</h2>
                    <p className="lead">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam eaque delectus maiores illo quas voluptatum minus, sit quaerat adipisci fugiat ex id optio omnis eos officiis necessitatibus, alias repudiandae voluptatem?</p>
                </div>
               
            </div>
            <div className="row my-4">
                <div className="col text-center">
                    <h2 className="display-4">Our Products</h2>
                </div>
            </div>
            <div className="container">
            <div className="row">
            <div className="col-md-3 text-center">
                    <h3>Fresh Water Fishes</h3>
                    <img width='200px' height="250px" src={fish} alt="" />
                    <Link className="btn btn-primary my-3" to="/fish">See More</Link>
            </div>
          
            <div className="col-md-3 text-center">
                    <h3>Frozen Finger Food</h3>
                    <img width='200px' height="250px" src={ff} alt="" />
                    <Link className="btn btn-primary my-3" to="/finger">See More</Link>
            </div>
          
            <div className="col-md-3 text-center">
                    <h3>Frozen Vegitables</h3>
                    <img width='200px' height="250px" src={veg} alt="" />
                    <Link className="btn btn-primary my-3" to="/veg">See More</Link>
            </div>
            <div className="col-md-3 text-center">
                    <h3>Fresh Sea Foods</h3>
                    <img width='200px' height="250px" src={sf} alt="" />
                    <Link className="btn btn-primary my-3" to="/seafood">See More</Link>
            </div>
            </div>
          
            </div>
        </div>
        </>
    )
}

export default About;