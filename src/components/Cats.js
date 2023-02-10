import React from 'react'
const Cats = ({cats =[]}) => {
    return (
        <div className='row'>
        {cats.map((item, index)=>(
            <div key={index} className='col mb-5'>
                <div className='card' style={{maxWidth: "300px"}}>
                    <img src={item.imageFileName} alt=''/>
                    <div className='card-body'>
                        <h5 className='card-title'>{item.name}</h5>
                        <button type="button" className="btn btn-outline-dark" > Saber mas</button>
                    </div>
                 </div>
            </div>
        ))}  
    </div>
  );
}
export default Cats;