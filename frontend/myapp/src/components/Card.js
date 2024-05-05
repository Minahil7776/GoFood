import React from 'react'

export default function Card({title,text,price,src}) {


    return (
        <div>
            <div className="card bg-dark text-light" style={{width:"18rem",maxHeight:"360px", boxShadow:"0px 0px 15px rgba(40,167,69,0.2)"}}  >
                <img src={src} className="card-img-top" alt="..."/>
                    <div className="card-body ">
                        <h5 className="card-title">{title}</h5>
                        <p className="card-text">{text}</p>
                        <div className='container w-100'>
                            <select className='m-2 h-100 bg-success rounded '>
                                {Array.from(Array(6),(e,i)=>{
                                    return(
                                        <option key={i+1} value={i+1}>{i+1}</option>
                                    )
                                })}
                            </select>
                            <select className='m-2 h-100 bg-success rounded'>
                                <option value="half">Half</option>
                                <option value="full">Full</option>
                            </select>
                            <div className='d-inline h-100 fs-5'>
                                Total Price
                                <div className='d-inline m-3'>{price}</div>
                            </div>
                        </div>
                        
                    </div>
            </div>
        </div>
    )
}
