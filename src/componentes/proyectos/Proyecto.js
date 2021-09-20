import React from 'react'

const Proyecto = ({proyecto}) => {
    return(
        <button className="list-group-item list-group-item-action"
        type="button"
        >{proyecto.nombre}</button>
    )
}

export default Proyecto