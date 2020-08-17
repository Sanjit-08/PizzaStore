import React , { Component }  from 'react';
import PropTypes from "prop-types";
import { getFunName } from '../helpers';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart} from "@fortawesome/free-solid-svg-icons";
import Navbar from "./Navbar";

class StorePicker extends Component{

    static propTypes={
        history:PropTypes.object
    };
 
    myInput=React.createRef();

    constructor(){
        super();
        this.myInput=React.createRef();
    }


    gotoStore = event => {
        // 1. Stop the form from submitting
        event.preventDefault();
        // 2. Get the text from that input
        const storeName = this.myInput.current.value;
        // 3. Change the page to /store/whatever-they-entered
        this.props.history.push(`/store/${storeName}`);

       
    };

    render(){
        return(
         <React.Fragment>
             <header className="collage"></header>
             <Navbar />
        <div className="storeimage">
        <div className="storeform">   
        <form className="store-selector" onSubmit={this.gotoStore}>
        <h2>Please Enter the Store</h2>
        <input 
        type="text" 
        ref={this.myInput}
        required 
        placeholder="Store Name" 
        defaultValue={getFunName()}
        />
        <button type="submit" className="storevisit"><span className="storefont">Visit Store<FontAwesomeIcon icon={faShoppingCart}/></span></button>
        </form>
        </div>
        </div>
        </React.Fragment>
        );
    }
}

export default StorePicker;