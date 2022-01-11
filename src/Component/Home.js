const Home = ()=>{

    return(
        <>
        <div className="">
            <div className="row" style={{'width':'100%'}}>
              <div className="col p-4 " style={{'background':'url("https://www.eurofoodsgroup.co.uk/wp-content/uploads/2015/12/2-1.png") no-repeat fixed center','height':'80vh'}}>
                   <div className="text-center text-light" style={{'position':'relative','top':'40%'}}>
                   <h1 className="display-3 font-weight-bold">ENSURING THE HIGHEST QUALITY</h1>
                   <h3 className="my-3">Wholesale suppliers to the catering industry, restaurants and specialist supermarkets.</h3>
                   <div className=" text-center">
                    <button className="btn btn-danger m-2 text-uppercase">Order Online</button>
                    <button className="btn btn-success m-2 text-uppercase">Call Us</button>
                   </div>
                   </div>
                    
              </div>
            </div>
        </div>
        </>
    )
}

export default Home;