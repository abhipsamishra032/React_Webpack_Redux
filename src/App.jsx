
import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {connect} from 'react-redux';
import {changeText} from './actions/changeTextAction';

// Create a root element
 class App extends Component {
    changeText() {
        this.props.changeText === "Hello" 
        ? this.props.dispatch(changeText("Hi"))
        : this.props.dispatch(changeText("Hello"));
    }
    render() {
        return(
            <div className="root">
                <h1>{this.props.changeText}</h1>
                <button onClick = {this.changeText.bind(this)}>Click Here to change Text</button>
            </div>
        );
    }
}
function mapDispatchToProps(state) {
    return { 
        changeText: state.changeText
    }
}
export default connect(mapDispatchToProps)(App);