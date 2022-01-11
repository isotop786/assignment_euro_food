import VegHero from '../assets/Veg/VegHero.jpg'
import { vegs } from '../../data';

const Veg = ()=>{

    return(
        <>
        <div className='p-3'>
            <div className="row my-4">
                <div className="col-md-2"></div>
                <div className="col-md-8 text-center">
                    <img className='img-fluid' src={VegHero} alt="" />
                </div>
                <div className="col-md-2"></div>
            </div>
            <div className="row my-4">
                <div className="col-md-4"></div>
                <div className="col-md-4 text-center">
                    <h2 className='display-4'>Fresh Vegitables</h2>
                </div>
                <div className="col-md-4"></div>
            </div>
            <div className="row my-4 p-4">
                {vegs.map(v=>(
                    <div className='col-md-3 col-sm-4 text-center' key={v.id}>
                        <h5>{v.title}</h5>
                        <img src={v.img} alt="" />
                        <p>Size: {v.size}</p>
                    </div>
                ))}
            </div>
        </div>
        </>
    )
}

export default Veg;