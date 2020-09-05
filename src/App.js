import React, {Component} from 'react';
import {Route} from 'react-router-dom';
import Home from './components/Home/Home';
import Stats from './containers/Stats/Stats';
import Symptoms from './components/Symptoms/Symptoms';
import Prevention from './components/Prevention/Prevention';

class App extends Component{
    render(){
        return(
            <div>
                <Route path = "/" exact component = {Home} />
                <Route path = "/stats" component = {Stats} />
                <Route path = "/symptoms" component = {Symptoms} />
                <Route path = "/prevention" component = {Prevention} />
            </div>
        );
    }
}

export default App;