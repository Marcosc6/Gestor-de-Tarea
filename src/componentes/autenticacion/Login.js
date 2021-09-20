import React, {useState} from "react";
import { Link } from "react-router-dom"

const Login = () => {
    const [usuario, gruardarUsuario] = useState({
        email:'',
        password:''
    });
    const {email, password} = usuario;
    const onChange = e =>{
        gruardarUsuario({...usuario,[e.target.name]:e.target.value})
    }
    //Cuando el usuario quiere iniciar sesión
    const onSubmit = e =>{
        e.preventDefault();
        //Validar que no haya campos vacios
        if(email.trim() ==='' || password.trim() ===''){
            //mostrarAlerta('Todos los campos son obligatorios','alerta-error')
            <div class="alert alert-danger" role="alert">Todos los campos son obligatorios</div>
            alert('Todos los campos son obligatorios','alerta-error');
        }
        
            
    }
    const [user, setUser] = useState(null)
    const login = () => {
        setUser({id:1, nombre: "malvarezc6"})
    }
    const logout = () => {
        setUser(null)
    }
    return(
        <div className="container">
            <div className="row d-flex justify-content-center mt-5">
                <div className="col-10 col-sm-8 col-md-6 col-lg-4" >
                    <div className="card border-dark border-2 bg-gradient bg-warning vh-90" >
                        <div className="card-body">
                            <h2 className="text-center">Iniciar Sesión</h2>
                            <form onSubmit={onSubmit}>
                                <div className='row'>
                                    <div className='col-md-12'>
                                        <div className="input-group mb-3">
                                            <div className="input-group-prepend">
                                                <span className="input-group-text text-danger fs-5">📧</span>
                                            </div>
                                            <input 
                                            type="email"
                                            className="from-control "
                                            placeholder="Tu email"
                                            name="email"
                                            aria-describedby="basic-addn1"
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
                                            aria-describedby="basic-addon2"
                                            value={password}
                                            onChange={onChange}
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className='row'>
                                    <div className='col-md-6 text-center'>
                                        <div className="campo-form">
                                        <Link to={'/proyectos'}>
                                            <input type="submit" className="btn btn-dark btn-gradient" value="Inicia Sesión" />
                                        </Link>
                                        </div>
                                    </div>
                                    <div className='col-md-6 text-center'>
                                        <Link to={'/cuenta'} className="btn btn-outline-light btn-gradient">
                                            Obtener Cuenta
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

export default Login;
