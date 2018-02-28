import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
        providers: [
          {
            id: '9guo2jlub',
            name: 'Jack'
          },
          {
            id: 'uh12u9gu',
            name: 'John'
          },
          {
            id: 'u12768f71',
            name: 'Kamila'
          },
          {
            id: 'bu9u0iu1',
            name: 'Lena'
          },
          {
            id: '120hjio',
            name: 'Marlyn'
          }
        ],
        services: [
          {
            id: 'xsg22huhixn',
            name: 'Haircut',
            price: 20,
            durationInMinutes: 40,
            providers: ['9guo2jlub', 'uh12u9gu', 'u12768f71']
          },
          {
            id: 'kjhi20hn',
            name: 'Nails',
            price: 15,
            durationInMinutes: 45,
            providers: ['bu9u0iu1', '120hjio']
          },
          {
            id: '98g68ouj8g',
            name: 'Spa',
            price: 35,
            durationInMinutes: 90,
            providers: ['uh12u9gu', '9guo2jlub']
          },
          {
            id: '89gfo9uli',
            name: 'Makeup',
            price: 50,
            durationInMinutes: 120,
            providers: ['uh12u9gu']
          }
        ],
        providerItem: [],
        serviceID: '',
        message: {}
      }
  }
  info(services){
      let list = services;
      let newProviderItem = [];
      list.providers.map((x) => {
          return this.state.providers.map((y) => {
              if(x === y.id){ 
                newProviderItem.push({ name: y.name, id: y.id});
              }
          })
      })
      this.setState({ providerItem: newProviderItem});
      this.setState({ serviceID: list.id });
      document.getElementById('providers').checked = true;
  }
  choose(providers) {
    let prov = providers;
    let serviceId = this.state.serviceID;
    let allServices = this.state.services;
    let result;
    allServices.map(x => {
        if(x.id === serviceId){
            result ={service: x.name, name: prov.name, price: x.price, duration: x.durationInMinutes};
        }
    });
    this.setState({ message: result })
  }
  showMessage(){
      let from = this.state.message;
      let show =`You just selected ${from.service} with ${from.name}. Total price will be - ${from.price}, Duration ${from.duration} minutes`;
      document.getElementById('finalMessage').innerHTML = show;
  }
  toStart(){
      this.setState({ providerItem: []});
      this.setState({ serviceID: ''});
      this.setState({ message: {} });
      document.getElementById('services').checked = true;
  }
  render() {
    return (
      <div className="App">
        <label htmlFor='services'>Services</label>
        <input type='radio' name='app' id='services' defaultChecked></input>
        <div className="serv">
          {this.state.services.map((x) => {
            return (
                <div className="item" key={x.id} onClick={this.info.bind(this, x)}>{x.name}</div>
            )})}
        </div>
        <label htmlFor='providers'>Providers</label>
        <input type='radio' name='app' id='providers'></input>
        <div className="prov">
          {this.state.providerItem.map((x) => {
            return (
                <div className="item" key={x.id} onClick={this.choose.bind(this, x)}>{x.name}</div>
            )})}
            <div>{this.state.result}</div>
            <div>
                <button type="button" onClick={this.showMessage.bind(this)}>Create Event</button>
                <button type="button" onClick={this.toStart.bind(this)}>Another Service</button>
            </div>
            <div id="finalMessage"></div>
        </div>
      </div>
    );
  }
}

export default App;
