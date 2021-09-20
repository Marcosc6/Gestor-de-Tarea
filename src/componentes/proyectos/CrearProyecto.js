import React, { useState } from 'react';

const CrearProyecto =()=> {
    //state Pryectos
    const[proyecto,guadarProyecto] = useState({nombre:''})
    const [formulario,setFormulario] = useState(false)
    const{nombre} = proyecto

    const activarFormulario = () => {
        setFormulario(!formulario)
    }

    // Guardar el Proyecto
    const onChange = e =>{
        guadarProyecto({...proyecto,[e.target.name]:e.target.value})
    }

    const onSubmit = e =>{
        e.preventDefault();
        //Validar Formulario
        if(nombre.trim()===''){
        alert('Todos los campos son Obligatorios')
    }

}
    return (
    <>
        {formulario
        ?(<form onSubmit={onSubmit} >
            <div className = 'row'>
                <div className = 'col-md-12'>
                    <div className = "input-group my-1">
                        <div className = "input-group*prepend">
                            <svg width="50" height="50"class="new card border"viewBox="2 0 12 16">
                            <path d="M9.293 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V4.707A1 1 0 0 0 13.707 4L10 .293A1 1 0 0 0 9.293 0zM9.5 3.5v-2l3 3h-2a1 1 0 0 1-1-1zM8.5 7v1.5H10a.5.5 0 0 1 0 1H8.5V11a.5.5 0 0 1-1 0V9.5H6a.5.5 0 0 1 0-1h1.5V7a.5.5 0 0 1 1 0z"/>
                            </svg>
                        </div>
                        <input
                        type="text"
                        className="form-control"
                        placeholder="Nombre Proyecto"
                        name="nombre"
                        value = {nombre}
                        onChange={onChange}/>
                        
                    </div>
                    
                </div>
            </div>
            <div className ='row'>
                <div className='col-md-12 text-center mb-4'>
                    <div className="d-grid m-0">
                    <button type="submit" className="text-white btn btn-warning text-white ">Guardar Proyecto </button>
                    </div>
                </div>
            </div>
        </form>
        ) 
        :null
        }          
    </>
    )
}
export default CrearProyecto

