import React from 'react'
import { useParams } from 'react-router-dom'
import { Link } from "react-router-dom";
import "./main.css"

const Gato = () => {
    const{id} = useParams ()
        console.log(id)
        const [unidad, SetUnidad] = React.useState([])
        React.useEffect(() =>{
        llamado()
    },[])

    const llamado = async () => {
        const data = await fetch(`http://localhost:3001/kittens/${id}`)
        const Unidades =await data.json()
        SetUnidad(Unidades)
    };

return (
    <div class=" mb-4 presentation">
        <div class="row no-gutters text-center">
            <div class="col-md-4">
                <img class="img-fluid card_only" src={unidad.imageFileName} alt=''/>
            </div>
            <div className='col-md-8'>
                <div class="card-body">
                    <h1 className='cat_title'>{unidad.name}</h1>
                    <h5 className='age'>{unidad.age}</h5>
                    <h5 className='gender'>{unidad.gender}</h5>
                    <h5 className='card-body'>{unidad.description}</h5>
                    <Link to= "/" className='btn btn-dark' >See all the cats!</Link>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Gato
