const Contact = ()=>{

    return(
        <>
        <div className="p-3 mt-4">
            <div className="row">
                <div className="col-md-4"></div>
                <div className="col-md-4 text-center">
                    <h2 className="display-4">Get In Touch</h2>
                </div>
                <div className="col-md-4"></div>
            </div>
            <div className="row">
                <div className="col-md-3"></div>
                <div className="col-md-6">
                    <form action="#">
                        <div className="form-group">
                            <label htmlFor="">First Name</label>
                            <input type="text" className="form-control" id="" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="">Last Name</label>
                            <input type="text" className="form-control" id="" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="">Email</label>
                            <input type="email" className="form-control" id="" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="">Subject</label>
                            <input type="text" className="form-control" id="" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="">Message</label>
                            <textarea className="form-control" id="" cols="30" rows="10"></textarea>
                        </div>
                        <div>
                            <button type="submit" className="btn btn-primary btn-block">Send</button>
                        </div>
                    
                    </form>
                </div>
                <div className="col-md-3"></div>
            </div>
        </div>
        </>
    )
}

export default Contact;