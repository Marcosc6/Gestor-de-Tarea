import React, {useState} from "react";
import { Link } from "react-router-dom"

const Cuenta = () => {
    //State para iniciar sesión
    const [usuario, gruardarUsuario] = useState({
        nombre:'',
        email:'',
        password:'',
        confirmar:'',
    });

    // extraer de usuario
    const {nombre, email, password, confirmar} = usuario;
    
    const onChange = e =>{
        gruardarUsuario({...usuario,[e.target.name]:e.target.value})
    }
    
    //Cuando el usuario quiere iniciar sesión
    const onSubmit = e =>{
        e.preventDefault();
        
        //Validar que no haya campos vacios
        if( nombre.trim() === '' ||
            email.trim() ==='' || 
            password.trim() ===''||
            confirmar.trim() ==='') {
                //mostrarAlerta('Todos los campos son obligatorios','alerta-error')
                alert('Todos los campos son obligatorios','alerta-error');
                return;
            }
        //Password minimo de 6 caracteres  
        if(password.length < 6){
            //mostrarAlerta('El password debe ser de al menos 6 caracteres','alerta-error')
            alert('El password debe ser de al menos 6 caracteres','alerta-error');
            return;
        }
        //Los 2 passwords son iguales
        if(password !== confirmar){
            //mostrarAlerta('Los 2 passwords no son iguales','alerta-error')
            alert('Los 2 passwords no son iguales','alerta-error');
            return;
        }  
    }
    
    return(
        <div className="container">
            <div className="row d-flex justify-content-center mt-5">
                <div className="col-10 col-sm-8 col-md-6 col-lg-4" >
                    <div className="card border-dark border-2 bg-gradient bg-warning" >
                        <div className="card-body">
                            <h2 className="text-center">Obtener una Cuenta</h2>
                            <form onSubmit={onSubmit}>
                            <div className='row'>
                                    <div className='col-md-12'>
                                        <div className="input-group mb-3">
                                            <div className="input-group-prepend">
                                                <span className="input-group-text text-danger fs-5">✍</span>
                                            </div>
                                            <input 
                                            type="nombre"
                                            className="from-control"
                                            placeholder="Tu nombre"
                                            name="nombre"
                                            aria-describedby="basic-addon1"
                                            value={nombre}
                                            onChange={onChange}
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className='row'>
                                    <div className='col-md-12'>
                                        <div className="input-group mb-3">
                                            <div className="input-group-prepend">
                                                <span className="input-group-text text-danger fs-5">📧</span>
                                            </div>
                                            <input 
                                            type="email"
                                            className="from-control"
                                            placeholder="Tu email"
                                            name="email"
                                            aria-describedby="basic-addon2"
                                            value={email}
                                            onChange={onChange}
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className='row'>
                                    <div className='col-md-12'>
                                        <div className="input-group mb-3">
                                            <div className="input-group-prepend">
                                                <span className="input-group-text text-danger fs-5">​​🚫​</span>
                                            </div>
                                            <input 
                                            type="password"
                                            className="from-control"
                                            placeholder="Tu password"
                                            name="password"
                                            aria-describedby="basic-addon3"
                                            value={password}
                                            onChange={onChange}
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className='row'>
                                    <div className='col-md-12'>
                                        <div className="input-group mb-3">
                                            <div className="input-group-prepend">
                                                <span className="input-group-text text-danger fs-5" >✔</span>
                                            </div>
                                            <input 
                                            type="password"
                                            className="from-control"
                                            placeholder="Confirmar password"
                                            name="confirmar"
                                            aria-describedby="basic-addon4"
                                            value={confirmar}
                                            onChange={onChange}
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className='row'>
                                    <div className='col-md-6 text-center mb-4'>
                                        <div className="campo-form">
                                            <input type="submit" className="btn btn-dark btn-gradient" value="Registrarme" />
                                        </div>
                                    </div>
                                    <div className='col-md-6 text-center'>
                                        <Link to={'/'} className="btn btn-outline-light btn-gradient">
                                            Iniciar Sesion
                                        </Link>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Cuenta;