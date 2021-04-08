import React, {Component} from 'react'

class Cerca extends Component {
    constructor(props) {
        super(props);
        this.state = { cerca: ""}
    }
    render() {
        return (  
            <div className = "row">      
                <form className = "form-inline" onSubmit = {this.addElement}>
                    <input 
                        className = "form-control mb-4 mr-sm-2" 
                        type = "text" 
                        placeholder = "Cosa desideri comprare?" 
                        aria-label = "Search"
                        value = {this.state.cerca}
                        //onChange = {}
                    />
                        
                    <button className = "btn btn-outline-success my-2 my-sm-0" 
                            type="submit"
                            //onFocus = {}
                    >+
                    </button>
                </form>
            </div> 
        )
    }
}
export default Cerca;