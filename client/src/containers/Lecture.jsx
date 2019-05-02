import React, { Component } from 'react';
import axios from 'axios';
import { Row, Col, Button, Form, FormGroup, FormFeedback, FormText, Label, Input, Jumbotron, Card, CardHeader } from 'reactstrap';

class Lecture extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.state = {
      nombre: '',
      email: '',
      fecha: '',
      lugar: '',
      isEnabled: false,
      isNombreValid: false,
      isEmailInvalid: false,
      isEmailValid: false,
    };
    this.handleChange = this.handleChange.bind(this);
  };

  handleChange(e, field) {
    const updateField = e.target.value;
    this.setState({ [e.target.name]: updateField })
    this.formValidity(field)
  }

  componentDidUpdate() {
    this.formReady()
    console.log('isNombreValid :' + this.state.isNombreValid)
  }

  formValidity = field => {
    const { isNombreValid, isEmailValid, isEmailInvalid, nombre, email } = this.state;
    switch (field) {
      case nombre:
        field.length >= 3 && this.setState({ isNombreValid: !isNombreValid }); console.log('field nombre length :' + field); break;
      case email:
        const emailRex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        emailRex.test(email) ? this.setState({ isEmailValid: !isEmailValid }) : this.setState({ isEmailInvalid: !isEmailInvalid }); break;
    }
  }

  // handleBlur = field => {
  //   const { isNombreValid, isEmailValid, isEmailInvalid, nombre, email } = this.state;
  //   switch (field) {
  //     case nombre:
  //       field.length > 3 && this.setState({ isNombreValid: !isNombreValid }); break;
  //     case email:
  //       const emailRex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  //       emailRex.test(email) ? this.setState({ isEmailValid: !isEmailValid }) : this.setState({ isEmailInvalid: !isEmailInvalid }) ; break;
  //   }
  // }

  formReady = () => {
    const { isEmailValid, isNombreValid, isEnabled } = this.state;
    if (isEmailValid == true && isNombreValid == true) this.setState({ isEnabled: !isEnabled });
  }

  handleClick = () => {
    axios.get('/sendemail')
      .then((res) => {
        console.log(res)
      })
      .catch(err => console.log(err))
  }

  render() {
    const { email, nombre, fecha, lugar, isEnabled, isNombreValid, isEmailInvalid, isEmailValid } = this.state;

    return (
      <Row className="wrapperform container-fluid no-gutters" id="wrapperform">
        <Row>
          <Card>
            <CardHeader className="lecturecard">Lectura One-Shot</CardHeader>
          </Card>
        </Row>
        <Row>
          <Col sm={12} lg={6}>
            <Form className="formuser">
              <FormGroup>
                <Label for="form">Formulario de introduccion</Label>
                <p>{nombre}</p>
              </FormGroup>
              <FormGroup>
                <Label for="nombre">Nombre <span>*</span></Label>
                <Input
                  type="text"
                  name="nombre"
                  id="nombre"
                  placeholder="Nombre"
                  onChange={e => this.handleChange(e, nombre)}
                  // onBlur={() => this.handleBlur(nombre)}
                  value={nombre}
                  valid={isNombreValid}
                />
                <FormFeedback valid>mucho gusto</FormFeedback>
              </FormGroup>
              <FormGroup>
                <Label for="email">Email <span>*</span></Label>
                <Input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="sumail@mail.com"
                  onChange={e => this.handleChange(e, email)}
                  // onBlur={() => this.handleBlur(email)}
                  value={email}
                  invalid={isEmailInvalid}
                  valid={isEmailValid}
                />
                <FormFeedback>el mail ingresado no corresponde con el formato</FormFeedback>
                <FormFeedback valid>recibiras una confirmacion en esta direccion</FormFeedback>
              </FormGroup>
              <FormGroup>
                <Label for="fecha">Fecha de nacimiento <span>*</span></Label>
                <Input
                  type="date"
                  name="fecha"
                  id="fecha"
                  onChange={e => this.handleChange(e, fecha)}
                  // onBlur={() => this.handleBlur(fecha)}
                  value={this.state.fecha}
                />
              </FormGroup>
              <FormGroup>
                <Label for="lugar">Lugar <span>*</span></Label>
                <Input
                  type="text"
                  name="lugar"
                  id="lugar"
                  placeholder="Ciudad"
                  onChange={e => this.handleChange(e, lugar)}
                  // onBlur={() => this.handleBlur(lugar)}
                  value={this.state.lugar}
                />
              </FormGroup>
              <FormGroup>
                <Label for="hora">Hora</Label>
                <Input
                  type="time"
                  name="hora"
                  id="hora"
                  placeholder="time placeholder"
                />
              </FormGroup>
              <FormGroup>
                <Label for="disponibilidad">Disponibilidad</Label>
                <Input
                  type="text"
                  name="disponibilidad"
                  id="disponibilidad"
                  placeholder="Entre semana o fines"
                />
              </FormGroup>
              <FormGroup>
                <Label for="mensaje">Mensaje</Label>
                <Input
                  type="textarea"
                  name="mensaje"
                  id="mensaje"
                  placeholder="preguntas o sugerencias..."
                />
              </FormGroup>
              <Button className="orderbutton" onClick={() => this.handleClick()} disabled={!isEnabled}>Mandar</Button>
              <FormText>Recibire una confirmacion por mail</FormText>
            </Form>
          </Col>
          <Col sm={12} lg={6}>
            <Jumbotron className="lecturejumbotron">
              <Row>
                <h1>Hello, world!</h1>
                <p>This is a simple hero unit, a simple Jumbotron-style component for calling extra attention to featured content or information.</p>
                <hr />
                <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
              </Row>
            </Jumbotron>
          </Col>
        </Row>
      </Row>
    );
  }
}

export default Lecture;
