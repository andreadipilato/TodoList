import React, {Component} from 'react';

class Cerca extends Component {
    constructor(props) {
        super(props);
        this.props = props;
        this.state = {cerca: ""};   //stato iniziale
    }

    //il compito di questo gestore evento è quello di farmi visualizzare ciò che scrivo nella barra di ricerca
    onInputChange = e => {
        this.setState({cerca: e.target.value})
    }
    
    addElement = e => {
        e.preventDefault();
        //alert("Stai cercando: "+this.state.cerca);
        this.props.onInputSearch(this.state.cerca);
        this.setState({cerca: ""});
    }

    onFocus = (e) => {
        e.target.blur();
    }

    render() {
        return (   
            <div className="container col-sm-4">         
                <form className = "form-inline" onSubmit = {this.addElement}>
                    <input 
                        className = "form-control col-10" 
                        type = "text" 
                        name = "search"
                        placeholder = "Cosa desideri comprare?" 
                        aria-label = "Search"
                        value = {this.state.cerca} //visualizza il contenuto di cerca
                        onChange = {this.onInputChange}
                    />  
                    <button className = "btn btn-primary col-2" 
                            type="submit"
                            onFocus = {this.onFocus}
                    ><i className="bi bi-plus"></i>
                    </button>
                </form>
            </div>  
        );
    }
}
export default Cerca;