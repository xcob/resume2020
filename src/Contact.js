import React, { Component } from 'react'
import * as emailjs from 'emailjs-com'
import 'bootstrap/dist/css/bootstrap.min.css'
//import Layout from '../components/layout'
import { Button, Container } from 'react-bootstrap';
import { Form, FormGroup, Input } from 'reactstrap'



class ContactForm extends Component  {
    state = {
      name: '',
      email: '',
      subject: '',
      message: '',
    }
    
    handleSubmit(e) {
      e.preventDefault()    
      
      const { name, email, subject, message } = this.state    
      
      let templateParams = {
        from_name: email,
        to_name: 'jacobxxsmith@gmail.com',
        subject: subject,
        message_html: message,
       }     
       
       emailjs.send(
        'gmail',
        'template_5A6TTtc4',
         templateParams,
        'user_DwlwII9YUqpn4UB7olAFB'
       )     
       
       this.resetForm()
   }
   
   resetForm() {
      this.setState({
        name: '',
        email: '',
        subject: '',
        message: '',
      })
    }
    
    handleChange = (param, e) => {
      this.setState({ [param]: e.target.value })
    }
    
    render() {
      return (
          <Container>
            <h1 className="p-heading1">Get In Touch!</h1>
            <Form onSubmit={this.handleSubmit.bind(this)}>
              <FormGroup controlId="formBasicName">  
                <Input
                  type="text"
                  name="name"
                  value={this.state.name}
                  className="text-primary"
                  onChange={this.handleChange.bind(this, 'name')}
                  placeholder="Name"
                />
              </FormGroup>
              <FormGroup controlId="formBasicEmail">
                <Input
                  type="email"
                  name="email"
                  value={this.state.email}
                  className="text-primary"
                  onChange={this.handleChange.bind(this, 'email')}
                  placeholder="Email"
                />
              </FormGroup>
              <FormGroup controlId="formBasicSubject">  
                <Input
                  type="text"
                  name="subject"
                  className="text-primary"
                  value={this.state.subject}
                  onChange={this.handleChange.bind(this, 'subject')}
                  placeholder="Subject"
                />
              </FormGroup>
              <FormGroup controlId="formBasicMessage">
                <Input
                  type="textarea"
                  name="message"
                  className="text-primary"
                  value={this.state.message}
                  onChange={this.handleChange.bind(this, 'message')}
                  placeholder="Message"
                />
              </FormGroup>
              <Button variant="primary"  className="buttonWrap" type="submit">
                Submit
              </Button>
            </Form>
          </Container>
        
      );
    }
}

export default ContactForm;