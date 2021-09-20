import React from 'react' 
import "../../App.css";
import {
    Table,
    Button,
    Container,
    Modal,
    ModalHeader,
    ModalBody,
    FormGroup,
    ModalFooter,
  } from "reactstrap";

    const data = [
        { id: 1, Nombre: "Modelo matematico"},
        { id: 2, Nombre: "Seguridad de software"},
      ];
class MostrarProyectos extends React.Component {
    state = {
        data: data,
        modalActualizar: false,
        modalInsertar: false,
        form: {
          id: "",
          Nombre: ""
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
    
      insertar= ()=>{
        var valorNuevo= {...this.state.form};
        valorNuevo.id=this.state.data.length+1;
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
            <div class="p-3 mb-2 bg-gray text-white" >
              <ModalHeader>
               <div className="text-dark "><th className="text-warning fs-2">✉️ Nuevo Proyecto</th></div>
              </ModalHeader>
              
              <ModalBody>
                <FormGroup>
                  <label className="fs-2">
                    Ingresar Proyecto
                  </label>
                  <input
                    className="form-control"
                    name="Nombre"
                    type="text"
                    onChange={this.handleChange}
                  />
                </FormGroup>
              </ModalBody>
    
              <ModalFooter>
              <div className='col-md-12 text-center mb-4'>
              <button type="submit" class="btn btn-outline-warning " onClick={() => this.insertar()}
              >Guardar</button>
              </div>
              </ModalFooter>
              <Table>
            <thead>
              <tr>
                <th className="text-warning fs-2">Panel de Proyectos</th>
              </tr>
            </thead>

            <tbody className="text-dark fs-5">
              {this.state.data.map((dato) => (
                <tr key={dato.id}>
                  <td>{dato.Nombre}</td>
                </tr>
              ))}
            </tbody>
          </Table>

          </div>
    );
}
}
export default  MostrarProyectos