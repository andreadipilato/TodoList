import React, {Component} from 'react'

class Cerca extends Component {
    constructor(props) {
        super(props);
        this.state = { cerca: ""}
    }

    onInputChange = e => {
        this.setState({cerca: e.target.value})
    }

    render() {
        return (      
                <form className = "searchbar" onSubmit = {this.addElement}>
                    <input 
                        className = "search" 
                        type = "text" 
                        placeholder = "Cosa desideri comprare?" 
                        aria-label = "Search"
                        value = {this.state.cerca}
                        onChange = {this.onInputChange}
                    />
                        
                    <button className = "button" 
                            type="submit"
                            //onFocus = {}
                    >+
                    </button>
                </form>
        )
    }
}
export default Cerca;