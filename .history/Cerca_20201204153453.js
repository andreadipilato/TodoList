import React, {Component} from 'react'

class Cerca extends Component {
    constructor(props) {
        super(props);
        this.state = { cerca: ""}
    }
    render() {
        return (
            <nav className = "navbar navbar-light bg-light">
                <form className = "form-inline" onSubmit = {this.addElement}>
                    <input 
                        className = "form-control mr-sm-2" 
                        type = "text" 
                        placeholder = "Cosa desideri comprare?" 
                        aria-label = "Search"
                        value = {this.state.cerca}
                        onChange = {}
                    />
                        
                    <button className = "btn btn-outline-success my-2 my-sm-0" type="submit">+</button>
                </form>
            </nav>
        )
    }
}
export default Cerca;