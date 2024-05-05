import React from 'react'

export default function Crousel() {
    return (
        <div>
            <div id="carouselExampleFade" className="carousel slide carousel-fade " data-bs-ride="carousel" style={{objectFit:'contain !impotant'}}>
                <div className="carousel-inner" id='carousel'>
                    <div className='carousel-caption' style={{zIndex:10}}>
                        <form className="d-flex" role="search">
                            <input className="form-control me-2 bg-dark text-light" type="search" placeholder="Search" aria-label="Search" />
                            <button className="btn btn-outline-success" type="submit">Search</button>
                        </form>
                    </div>

                    <div className="carousel-item active carousel-slide">
                        <img src="/pics/front1.jpg" className="d-block w-100" style={{ filter: "brightness(30%" }}  alt='img' />
                    </div>
                    <div className="carousel-item">
                        <img src="/pics/fonrt2.jpg" className="d-block w-100" style={{ filter: "brightness(30%" }} alt='img' />
                    </div>
                    <div className="carousel-item">
                        <img src="/pics/pizza2.jpg" className="d-block w-100" style={{ filter: "brightness(30%" }} alt='img' />
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    )
}
