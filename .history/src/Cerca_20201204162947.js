import React, {Component} from 'react'

class Cerca extends Component {
    constructor(props) {
        super(props);
        this.state = { cerca: ""}
    }

    onInputChange = e => {
        this.setState({cerca: e.target.value})
    }
    
    addElement = e => {
        e.preventDefault();
        this.props.onInputSearch(this.state.cerca);
        this.setState({cerca: ""});
    }

    render() {
        return (      
                <form className = "form-inline" onSubmit = {this.addElement}>
                    <input 
                        className = "form-control mr-sm-2" 
                        type = "text" 
                        placeholder = "Cosa desideri comprare?" 
                        aria-label = "Search"
                        value = {this.state.cerca}
                        onChange = {this.onInputChange}
                    />  
                    <button className = "btn btn-outline-success my-2 my-sm-0" 
                            type="submit"
                            //onFocus = {}
                    >+
                    </button>
                </form>
        )
    }
}
export default Cerca;