'use strict';
const React = require('react');

const App = React.createClass({
    getInitialState(){
        return {
            hello : 'world'
        };
    },

    render(){
        return {
            <h1>Erpa!</h1>
            <div className = 'hello-world'>
                <h1> Hello {this.state.hello} </h1>
            </div>
        };
    }
});

React.render(<App/>, document.getElementById('example'));
