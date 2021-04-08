import React, {Component} from 'react';

class ListItem extends Component {
    constructor(props) {
        super(props);
        this.state = {checked: false};
    }


    //usare sempre la notazione freccia per i gestori di evento
    deleteItem = ()  => {
        this.props.delete(this.props.id);
    }

    checkItem = () => {
        console.log("Sto comprando "+ this.props.prodotto);
        this.props.check(this.props.id);
        this.setState({checked: !this.state.checked});
        
    }

    render() {
        const classitem = this.state.checked ? "list-group-item disabled" : "list-group-item";
        const classcheck = this.state.checked ? "bi bi-check-square-fill" : "bi bi-square";
        return (
        <React.Fragment>
            <li className={classitem}>
            <button type="button" className="btn btn-light" onClick={this.checkItem}><i className={classcheck}></i></button>     
            <span>{this.props.prodotto}</span>
            <button type="button" className="btn btn-light float-right" onClick={this.deleteItem}><i className="bi bi-trash"></i></button>
            </li>
        </React.Fragment>

            
        );
    }


}
export default ListItem;

