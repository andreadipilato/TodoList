import React, { Component } from 'react';
import './App.css';
import Cerca from './Cerca';
import ListItem from './ListItem';


const listaelementi = [];


class App extends Component {
  constructor(props){
    super(props);
    //this.listaelementi = [];
    //inizializzazione variabili di stato
    this.state = {prodotto: "", listaelementi: listaelementi, cont: 0};
    }

  mostraElemento = (el) => {
    //alert("Hai aggiunto: " + el);
    this.setState({prodotto: el});
    const contatore = this.state.cont+1;
    this.setState({cont: contatore});
    listaelementi.push({id: contatore, prodotto: el, comprato: false});
    console.log(listaelementi);
  }

  onDeleteItem = (id) => {
    //alert("Sicuro di voler eliminare " + id + " ?");
    console.log(id);
    listaelementi.splice(id,1);
    this.setState({listaelementi: listaelementi});
    console.log(listaelementi);
  }

  onCheckItem = (id) => {
    //alert("Stai acquistando "+ id);
    //alert("Hai acquistato " + this.listaelementi[id]);
    //alert("Vuoi comprare "+ this.listaelementi[id].prodotto + " ?");
    
    listaelementi[id].comprato = !listaelementi[id].comprato;
//    console.log(listaelementi[id].comprato);
//    console.log("hai cliccato su id: " + id);
 
    if (this.state.listaelementi[id].comprato) {
        console.log("check");
        listaelementi.push(listaelementi[id]);
        listaelementi.splice(id,1);
      
    } else {
        console.log("decheck");     
        listaelementi.unshift(listaelementi[id]);
        listaelementi.splice(id+1,1);      
    }

    console.log(listaelementi);
    this.setState({listaelementi: listaelementi});
    
  }

  render() {
      return (
        <div className="App">
          <header className="App-header">
            <h3 className="text-center">Lista Spesa</h3>
            <Cerca onInputSearch = {this.mostraElemento}/>
            {/*<p>Elemento da aggiungere: {this.state.prodotto}</p>*/}
            <br></br>
            <div className="container col-sm-4">
              <ul className="list-group">
                {this.state.listaelementi.map((item, index) => <ListItem key={item.id} 
                                                                         id={index} //prima era item.id
                                                                         prodotto={item.prodotto} 
                                                                         delete={this.onDeleteItem}
                                                                         check={this.onCheckItem}                                                                                                       
                                                               />)}
              </ul>
            </div>
            
          </header>
        </div>
      );
    }
}

export default App;
