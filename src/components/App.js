import React, { Component } from 'react';
import PropTypes from "prop-types";
import Header from './Header';
import Inventory from './Inventory';
import Order from './Order'; 
import samplefishes from '../sample-fishes';
import Fish from './Fish';
import base from '../base';
import * as admin from "firebase-admin";



// var serviceAccount = require("serviceAccountKey.json");


// admin.initializeApp({
//   credential: admin.credential.cert(serviceAccount),
//   databaseURL: "https://catch-of-the-day-sanjit-kurar.firebaseio.com"
// });


// // As an admin, the app has access to read and write all data, regardless of Security Rules
// var db = admin.database();
// var ref = db.ref("restricted_access/secret_document");
// ref.once("value", function(snapshot) {
//   console.log(snapshot.val());
// });


class App extends Component{

    state={
        fishes:{},
        order:{}
    }

    static propTypes={
        match:PropTypes.object
    };


    componentDidMount() {
        const { params } = this.props.match;
        
        const localStorageRef=localStorage.getItem(params.storeId);
        if(localStorageRef)
        {
            this.setState({order:JSON.parse(localStorageRef)});
        }
        this.ref = base.syncState(`${params.storeId}/pizzas`, {
          context: this,
          state: "fishes"
        });
      }
    
    componentDidUpdate(){
        localStorage.setItem(this.props.match.params.storeId,JSON.stringify(this.state.order));
    }
    
    componentWillUnmount(){
        base.removeBinding(this.ref);
    }

   

    addFish = fish =>{
        // 1. Take a copy of the existing state
        const fishes={...this.state.fishes};
        // 2. Add our own fish to that fishes variable
        fishes[`fish${Date.now()}`]=fish;
        // 3. Set the new fishes object to state
        this.setState({
            fishes:fishes
        });
    }

    updateFish=(key,updatedFish)=>{
       
        // 1. TAKE A COPY OF THE CURRENT STATE
        const fishes={...this.state.fishes};

        // 2.UPDATE THAT STATE
        fishes[key]=updatedFish;

        // 3.SET THAT STATE
        this.setState({fishes});
    }

    deleteFish = (key) =>{
        // 1.TAKE A COPY OF THE STATE
        const fishes={...this.state.fishes};
        // 2. DELETE THE FISH USING KEY
        fishes[key]=null;
        // 3. SET THE STATE
        this.setState({fishes});
    }

    loadSampleFishes = () =>{
      this.setState({fishes:samplefishes});
      console.log("Sample Fishes added");
    }

    addtoOrder = key =>{
        // 1. Take a copy of the state
        const order={...this.state.order};
        // 2. Either add to the order or update the number in our order
        order[key]=order[key]+1||1;
        // 3. call setState to update our state object
        this.setState({order});
    };

    removeFromOrder = (key) =>{
        // 1. TAKE A COPY OF THE STATE
        const order={...this.state.order};
        // 2. DELETE THE PARTICULAR ITEM FROM ORDER
        delete order[key];
        // 3.SET THE STATE
        this.setState({order});
    }

    removeItem = (key) =>{
        // 1. TAKE A COPY OF THE STATE
        const order={...this.state.order};
        // 2. Decrease the particular item by 1
        if(order[key]!==1)
        {
            order[key]=order[key]-1;
        }
        else{
            delete order[key];
        }
         // 3.SET THE STATE
         this.setState({order});
        }

    render(){
        return(
            <div className="catch-of-the-day">
                <div className="menu">
                    <Header tagline="Fresh Pizza Store" />
                    <ul className="fishes">
                       {Object.keys(this.state.fishes).map(key=> <Fish key={key} index={key} details={this.state.fishes[key]} addtoOrder={this.addtoOrder}/>)}
                    </ul>
                 </div>   
                    <Order fishes={this.state.fishes} order={this.state.order} removeFromOrder={this.removeFromOrder} removeItem={this.removeItem} addtoOrder={this.addtoOrder} />
                    <Inventory addFish={this.addFish} loadSampleFishes={this.loadSampleFishes} fishes={this.state.fishes} updateFish={this.updateFish} deleteFish={this.deleteFish} storeId={this.props.match.params.storeId}/>
                
            </div>
        );
    }
}

export default App;