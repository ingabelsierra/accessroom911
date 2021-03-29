import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import axios from 'axios';

class App extends Component {

  constructor(props) {
    super(props);
    this.onChangeCard = this.onChangeCard.bind(this);
    this.onChangeIdentificationNumber = this.onChangeIdentificationNumber.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      card: '',
      identification_number: ''
   
    }
  }
  onChangeCard(e) {
    this.setState({
      card: e.target.value
    });
  }
  onChangeIdentificationNumber(e) {
    this.setState({
      identification_number: e.target.value
    })  
  }  

  onSubmit(e) {
    e.preventDefault();
    const obj = {
      card: this.state.card,
      identification_number: this.state.identification_number,     
    };
    axios.post('http://localhost/room911/public/api/entry', obj)
        .then(res => 
         alert('Bienvenido ')
        )
        .catch(error => alert('datos errados'))
    
 
  }

  render() {
    return (
       <div style={{ marginTop: 10 }}>
            <h3 align="center">Ingreso al room911</h3>
            <form onSubmit={this.onSubmit}>
              
                <div className="form-group">
                    <label>Card: </label>
                    <input type="text" 
                      className="form-control"
                      value={this.state.card}
                      onChange={this.onChangeCard}
                      />
                </div>
                <div className="form-group">
                    <label>Identification Number: </label>
                    <input type="text" 
                      className="form-control"
                      value={this.state.identification_number}
                      onChange={this.onChangeIdentificationNumber}
                      />
                </div>           

                <div className="form-group">
                    <input type="submit" 
                      value="Entrar" 
                      className="btn btn-primary"/>
                </div>
            </form>
        </div>
    );
  }
}

export default App;
