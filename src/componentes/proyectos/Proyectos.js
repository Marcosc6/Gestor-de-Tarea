import React, {useState} from "react";
import Header from '../plantilla/Header'
import MenuVertical from '../plantilla/MenuVertical'
import FormularioTarea from '../tareas/FormularioTarea'
import MostrarTareas from '../tareas/MostrarTareas'

const Proyectos = () => {
    return(
        <div className="container-fluid">
            <div className="row min-vh-100 text-white">  
                <div className="col-md-3 bg-secondary bg-gradient m-0 p-0 ">
                    <MenuVertical/>
                </div>
                <div className="col-md-9 bg-gradient  m-0 p-0">
                    <Header/>
                    <main>
                        <div className="row d-flex justify-content-center text-dark">
                            <div className="col-md-6">
                                <FormularioTarea/>
                            </div>
                        </div>
                        <div className="text-center mt-5 bg-ligth text-dark">
                            <MostrarTareas/>
                        </div>
                    </main>
                </div>    
            </div>
        </div>
    )
}

export default Proyectos