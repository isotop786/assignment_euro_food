import sf_hero from '../assets/Seafood/sf_hero.jpg'
import { sf } from '../../data';

const Seafood = ()=>{

    return(
        <>
        <div className='p-3'>
            <div className="row my-4">
                <div className="col-md-2"></div>
                <div className="col-md-8 text-center">
                    <img className='img-fluid' src={sf_hero} alt="" />
                </div>
                <div className="col-md-2"></div>
            </div>
            <div className="row my-4">
                <div className="col-md-4"></div>
                <div className="col-md-4 text-center">
                    <h2 className='display-4'>Best Quality Sea Foods</h2>
                </div>
                <div className="col-md-4"></div>
            </div>
         
            <div className="row">
                <div className="col text-center bg-info text-white p-3">
                    <h2>Fresh Water Shimps</h2>
                </div>
            </div>
            <div className="row my-4 p-2">
                
                {sf.map(v=>(
                    <div className='col-md-3 col-sm-4 text-center' key={v.id}>
                        <h5>{v.title}</h5>
                        <img height="200px" src={v.img} alt="" />
                        <p>Size: {v.size}</p>
                    </div>
                ))}
            </div>
         
            <div className="row">
                <div className="col text-center bg-info text-white p-3">
                    <h2>Chakra Shimps</h2>
                </div>
            </div>
            <div className="row my-4 p-2">
                
                {sf.map(v=>(
                    <div className='col-md-3 col-sm-4 text-center' key={v.id}>
                        <h5>{v.title}</h5>
                        <img height="200px" src={v.img} alt="" />
                        <p>Size: {v.size}</p>
                    </div>
                ))}
            </div>
         
            <div className="row">
                <div className="col text-center bg-info text-white p-3">
                    <h2>Cat Tiger Shimps</h2>
                </div>
            </div>
            <div className="row my-4 p-2">
                
                {sf.map(v=>(
                    <div className='col-md-3 col-sm-4 text-center' key={v.id}>
                        <h5>{v.title}</h5>
                        <img height="200px" src={v.img} alt="" />
                        <p>Size: {v.size}</p>
                    </div>
                ))}
            </div>
        </div>
        </>
    )
}

export default Seafood;