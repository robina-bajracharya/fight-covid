import React, {Component} from 'react';
import {Route} from 'react-router-dom';
import Home from './components/Home/Home';
import Stats from './containers/Stats/Stats';

class App extends Component{
    render(){
        return(
            <div>
                <Route path = "/" exact component = {Home} />
                <Route path = "/stats" component = {Stats} />
            </div>
        );
    }
}

export default App;