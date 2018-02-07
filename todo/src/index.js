import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Header } from './components/Header';
import { Main } from './components/Main';

class App extends React.Component{
    render(){
        return(
            <div className="app">
                <Header />
                <Main />
            </div>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('root'));