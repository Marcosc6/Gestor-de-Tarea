import React from "react";
import CrearProyecto from '../proyectos/CrearProyecto'
import  MostrarProyectos from '../proyectos/MostrarProyectos'

function MenuVertical () {
    return(
        <aside className="text-center p-4">
            <h2 className="fst-italic text-danger bg-warning bg-gradient-black mt-1 mb-5 text-dark"><span className="fst-italic text-danger bg-warning bg-gradient-black mt-1 mb-5 text-danger">Gestor</span> Proyectos</h2>
            <CrearProyecto/>
            <h3 className="text-success  border-botton fw-bold mt-3 mb-4 fs-1">Universidad Estatal</h3>
            <MostrarProyectos/>
        </aside>
    )
}

export default MenuVertical