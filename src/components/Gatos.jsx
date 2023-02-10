import React  from "react";
import { Route, Link } from "react-router-dom";
import "./main.css"

const Gatos = () => {
  const [Animal, SetAnimal] = React.useState([])
    React.useEffect(() =>{
    llamado()
    },[])

  const llamado = async () => {
    const data = await fetch('http://localhost:3001/kittens')
    const Animals =await data.json()
    SetAnimal(Animals)
  };
    return(
      <div className="row ">{
        Animal.map(item =>( 
            <div  className='col mb-5'> 
              <div className='card square'  >
                <img className="image_card" src={item.imageFileName} alt=''/>
                  <div className='card-body '>
                    <div>
                      <h5 className='name'>{item.name}</h5>
                      <h5 className='card-title'>{item.age}</h5>
                      <Route >
                      <Link className="card-title btn btn-outline-secondary CTA" to={`/Gatos/${item.id}`}>See more about {item.name}</Link>
                      </Route>
                    </div>
                  </div>
              </div>
            </div>
        ))
      }</div>
    )
}
export default Gatos;
