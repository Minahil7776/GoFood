import { Link } from 'react-router-dom'


export default function Navbar({isLogin,name}) {
    
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-success">
                <div className="container-fluid">
                    <Link className="navbar-brand fs-1 fst-italic" to="/">GoFood</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav me-auto mb-2">
                            <li className="nav-item">
                                <Link className="nav-link" style={{fontSize:"20px",marginTop:"7px",marginLeft:"2rem"}} aria-current="page" to="/">Home</Link>
                            </li>
                        </ul>
                        {
                            isLogin?(
                                <div>
                                    <span className='text-light m-3'>Welcome,{name}</span>
                                    <Link className="btn bg-light  text-succes mx-1 text-left"to="/">Logout</Link>
                                </div>
                            ):(
                                <div className='d-flex'>
                            <Link className="btn bg-light  text-succes mx-1 text-left"to="/Login">Login</Link>
                            <Link className="btn bg-light  text-succes mx-1 text-left" to="/SignUp" >SignUp</Link>
                             
                             </div>
                            )
                        }
                            

                    </div>
                </div>
            </nav>

        </div>
    )
}
