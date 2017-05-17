import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Match, Miss} from 'react-router';
import App from './app';
import NotFound from './components/NotFound';


const Index = () => {
    return (
        <BrowserRouter>
            <div>
                <Match exactly pattern='/' component={App}/>
                <Match pattern='/app/' component={App}/>
                <Miss component={NotFound}/>
            </div>
        </BrowserRouter>
    )
}

ReactDOM.render(<App />,document.getElementById('root'));