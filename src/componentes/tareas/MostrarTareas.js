import React, {Fragment} from 'react'
import Tarea from './Tarea'
import FormularioTarea  from './FormularioTarea';

import "bootstrap/dist/css/bootstrap.min.css";
import {Table,Button,Container,Modal,ModalHeader,ModalBody,FormGroup,ModalFooter,} from "reactstrap";

const data = [
  { Nro: 1, nombre: "Bootstrap", estado: "Completa" },
  { Nro: 2, nombre: "React", estado: "Completa" },
  { Nro: 3, nombre: "SO", estado: "Completa" },
  { Nro: 4, nombre: "GitHub", estado: "Completa" },
  { Nro: 5, nombre: "Nodejs", estado: "Completa"},
];

class MostrarTareas extends React.Component {
  state = {
    data: data,
    modalActualizar: false,
    modalInsertar: false,
    form: {
      Nro: "",
      nombre: "",
      estado: "",
    },
  };

  mostrarModalActualizar = (dato) => {
    this.setState({
      form: dato,
      modalActualizar: true,
    });
  };

  cerrarModalActualizar = () => {
    this.setState({ modalActualizar: false });
  };

  mostrarModalInsertar = () => {
    this.setState({
      modalInsertar: true,
    });
  };

  cerrarModalInsertar = () => {
    this.setState({ modalInsertar: false });
  };

  editar = (dato) => {
    var contador = 0;
    var arreglo = this.state.data;
    arreglo.map((registro) => {
      if (dato.Nro == registro.Nro) {
        arreglo[contador].nombre = dato.nombre;
        arreglo[contador].estado = dato.estado;
      }
      contador++;
    });
    this.setState({ data: arreglo, modalActualizar: false });
  };

  eliminar = (dato) => {
    var opcion = window.confirm("Eliminar el Archivo "+dato.Nro);
    if (opcion == true) {
      var contador = 0;
      var arreglo = this.state.data;
      arreglo.map((registro) => {
        if (dato.id == registro.Nro) {
          arreglo.splice(contador, 1);
        }
        contador++;
      });
      this.setState({ data: arreglo, modalActualizar: false });
    }
  };

  insertar= ()=>{
    var valorNuevo= {...this.state.form};
    valorNuevo.Nro=this.state.data.length+1;
    var lista= this.state.data;
    lista.push(valorNuevo);
    this.setState({ modalInsertar: false, data: lista });
  }

  handleChange = (e) => {
    this.setState({
      form: {
        ...this.state.form,
        [e.target.name]: e.target.value,
      },
    });
  };

  render() {
    
    return (
      <>
        <Container>
        <h2>&#128194;<span className="text-danger">Proyecto:</span> Gestor de Archivo</h2>
        <br />
          <button type="button" class="btn btn-success bg-gradient fs-3 btn-outline-dark" onClick={()=>this.mostrarModalInsertar() }> Guardar Tarea</button>
          <br />
          <br />
          <button type="button" className="btn btn-danger bg-gradient fs-3 btn-outline-dark h-50 m-2"> Eliminar</button>
          <Table>
            <thead>
              <tr>
                <th>Nro</th>
                <th>Nombre</th>
                <th>Estado</th>
                <th>Acción</th>
              </tr>
            </thead>
            <tbody>
              {this.state.data.map((dato) => (
                <tr key={dato.Nro}>
                  <td>{dato.Nro}</td>
                  <td>{dato.nombre}</td>
                  <td>{dato.estado}</td>
                  <td>
                    <button
                      type="button" class="btn btn-outline-success"
                      onClick={() => this.mostrarModalActualizar(dato)}>Editar</button>{" "}
                    <button type="button" class="btn btn-outline-danger" onClick={()=> this.eliminar(dato)}>Eliminar</button> 
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Container>

        <Modal isOpen={this.state.modalActualizar}>
          <ModalHeader>
           <div><h3>Edición</h3></div>
          </ModalHeader>

          <ModalBody>
            <FormGroup>
              <label>
                Nombre: 
              </label>
              <input
                className="form-control"
                name="nombre"
                type="text"
                onChange={this.handleChange}
                value={this.state.form.nombre}
              />
            </FormGroup>
            <FormGroup>
              <label>
                Estado: 
              </label>
              <input
                className="form-control"
                name="estado"
                type="text"
                onChange={this.handleChange}
                value={this.state.form.estado}
              />
            </FormGroup>
          </ModalBody>

          <ModalFooter>
            <button
              type="button" class="btn btn-outline-secondary"
              onClick={() => this.editar(this.state.form)}
            >
              Editar
            </button>
            <button
              type="button" class="btn btn-outline-danger"
              onClick={() => this.cerrarModalActualizar()}
            >
              Cancelar
            </button>

          </ModalFooter>
        </Modal>



        <Modal isOpen={this.state.modalInsertar}>
          <ModalHeader>
           <div><h3>Agreagar Archivo</h3></div>
          </ModalHeader>

          <ModalBody>
            
            <FormGroup>
              <label>
                Nombre: 
              </label>
              <input
                className="form-control"
                name="nombre"
                type="text"
                onChange={this.handleChange}
              />
            </FormGroup>
          </ModalBody>

          <ModalFooter>
            <button
              type="button" class="btn btn-outline-secondary"
              onClick={() => this.insertar()}
            >
              Insertar
            </button>
            <button
              type="button" class="btn btn-outline-danger"
              onClick={() => this.cerrarModalInsertar()}
            >
              Cancelar
            </button>
            
          </ModalFooter>
        </Modal>
      </>
    );
  }
}
export default MostrarTareas;
