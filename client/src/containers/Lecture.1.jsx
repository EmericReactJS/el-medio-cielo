import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {
  Row,
  Col,
  Button,
  Form,
  FormGroup,
  FormFeedback,
  FormText,
  Label,
  Input,
  Jumbotron,
  Card,
  CardHeader,
} from 'reactstrap';
import { LanguagesConsumer } from '../components/I18nContext';

const Lecture = () => {

  const [formField, handleChange] = useState({
    nombre: '', email: '', fecha: '', lugar: '', hora: '',
  });
  const [validity, checkValidity] = useState({
    validNombre: false, validEmail: false, validFecha: false, validLugar: false,
  });
  const [ready, checkReady] = useState(false);
  const [disponibility, checkDispo] = useState({
    semana: false, fines: false,
  });
  const [modality, checkModality] = useState({
    casa: false, distancia: false,
  });

  function verifyForm() {
    if (formField.nombre.length >= 3 && validity.validNombre === false) {
      checkValidity({ ...validity, validNombre: true });
    } else if (formField.nombre.length < 3 && validity.validNombre === true) {
      checkValidity({ ...validity, validNombre: false });
    }
    const emailRex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (emailRex.test(formField.email) && validity.validEmail === false) {
      checkValidity({ ...validity, validEmail: true });
    }
    if (formField.fecha.length > 0 && validity.validFecha === false) {
      checkValidity({ ...validity, validFecha: true });
    }
    if (formField.lugar.length > 3 && validity.validLugar === false) {
      checkValidity({ ...validity, validLugar: true });
    }
  }

  function enableForm() {
    const okForm = Object.values(validity);
    if (okForm.indexOf(false) === -1 && ready === false) {
      checkReady(true);
    } else if (okForm.indexOf(false) >= 0 && ready === true) checkReady(false);
  }

  useEffect(() => {
    verifyForm();
    enableForm();
  });

  const handleClick = () => {
    const formData = {
      formField,
      disponibility,
      modality,
    };
    axios.post('/sendemail', formData)
      .then((res) => {
        console.log(res);
      })
      .catch(err => console.log(err));
  };

  return (
    <LanguagesConsumer>
      {languages => (
        <Row className="wrapperform container-fluid no-gutters" id="wrapperform">
          <Row>
            <Card>
              <CardHeader className="lecturecard">{languages.Lectura.main.lecture}</CardHeader>
            </Card>
          </Row>
          <Row>
            <Col sm={12} md={6}>
              <Form className="formuser">
                <FormGroup>
                  <Label for="form">{languages.Lectura.title}</Label>
                </FormGroup>
                <FormGroup>
                  <Label for="nombre">
                    {languages.Lectura.form.name}
                    <span>*</span>
                  </Label>
                  <Input
                    type="text"
                    name="nombre"
                    id="nombre"
                    placeholder={languages.Lectura.form.holderName}
                    onChange={e => handleChange({ ...formField, nombre: e.target.value })}
                    value={formField.nombre}
                    valid={validity.validNombre}
                  />
                  <FormFeedback valid>{languages.Lectura.form.validName}</FormFeedback>
                </FormGroup>
                <FormGroup>
                  <Label for="email">
                    {languages.Lectura.form.email}
                    <span>*</span>
                  </Label>
                  <Input
                    type="email"
                    name="email"
                    id="email"
                    placeholder={languages.Lectura.form.holderMail}
                    onChange={e => handleChange({ ...formField, email: e.target.value })}
                    value={formField.email}
                    valid={validity.validEmail}
                  />
                  <FormFeedback valid>{languages.Lectura.form.validEmail}</FormFeedback>
                </FormGroup>
                <FormGroup>
                  <Label for="fecha">
                    {languages.Lectura.form.birth}
                    <span>*</span>
                  </Label>
                  <Input
                    type="date"
                    name="fecha"
                    id="fecha"
                    onChange={e => handleChange({ ...formField, fecha: e.target.value })}
                    value={formField.fecha}
                    valid={validity.validFecha}
                  />
                </FormGroup>
                <FormGroup>
                  <Label for="lugar">
                    {languages.Lectura.form.place}
                    <span>*</span>
                  </Label>
                  <Input
                    type="text"
                    name="lugar"
                    id="lugar"
                    placeholder={languages.Lectura.form.holderPlace}
                    onChange={e => handleChange({ ...formField, lugar: e.target.value })}
                    value={formField.lugar}
                    valid={validity.validLugar}
                  />
                </FormGroup>
                <FormGroup>
                  <Label for="hora">{languages.Lectura.form.time}</Label>
                  <Input
                    type="time"
                    name="hora"
                    id="hora"
                    onChange={e => handleChange({ ...formField, hora: e.target.value })}
                    value={formField.hora}
                  />
                  <FormText>{languages.Lectura.form.holderTime}</FormText>
                </FormGroup>
                <FormGroup className="dispoWrapper">
                  <Label className="dispoLabel">{languages.Lectura.form.availability}</Label>
                  <Label for="semana" className="checkWrapper">
                    <Input
                      className="checkButton"
                      type="checkbox"
                      id="semana"
                      onChange={() => checkDispo({ ...disponibility, semana: !disponibility.semana })}
                      checked={disponibility.semana}
                    />
                    <span className="checkMark">{languages.Lectura.form.workdays}</span>
                  </Label>
                  <Label for="fines" className="checkWrapper">
                    <Input
                      className="checkButton"
                      type="checkbox"
                      id="fines"
                      onChange={() => checkDispo({ ...disponibility, fines: !disponibility.fines })}
                      checked={disponibility.fines}
                    />
                    <span className="checkMark">{languages.Lectura.form.weekends}</span>
                  </Label>
                </FormGroup>
                <FormGroup className="dispoWrapper">
                  <Label className="dispoLabel">{languages.Lectura.form.modality}</Label>
                  <Label for="casa" className="checkWrapper">
                    <Input
                      className="checkButton"
                      type="checkbox"
                      id="casa"
                      onChange={() => checkModality({ ...modality, casa: !modality.casa })}
                    />
                    <span className="checkMark">{languages.Lectura.form.meet}</span>
                  </Label>
                  <Label for="distancia" className="checkWrapper">
                    <Input
                      className="checkButton"
                      type="checkbox"
                      id="distancia"
                      onChange={() => checkModality({ ...modality, distancia: !modality.distancia })}
                    />
                    <span className="checkMark">{languages.Lectura.form.distance}</span>
                  </Label>
                </FormGroup>
                <FormGroup>
                  <Label for="mensaje">{languages.Lectura.form.message}</Label>
                  <Input
                    type="textarea"
                    name="mensaje"
                    id="mensaje"
                    placeholder={languages.Lectura.form.holderMessage}
                  />
                </FormGroup>
                <Button className="orderbutton" onClick={() => handleClick()} disabled={!ready}>{languages.Lectura.form.button}</Button>
                <FormText>{languages.Lectura.form.subButton}</FormText>
              </Form>
            </Col>
            <Col sm={12} md={6}>
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
      )}
    </LanguagesConsumer>
  );
};


export default Lecture;
