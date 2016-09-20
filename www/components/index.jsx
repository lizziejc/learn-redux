const React = require('react');
const ReactDOM = require('react-dom');
const Redux = require('redux');
const rdc = require('../reducers/rdc.js'); 

const store = Redux.createStore (rdc.counter);

const Counter = React.createClass({
	incrementIfOdd: function(){
		if (this.props.value % 2 !== 0) {
      this.props.onIncrement()
    }
	},

	incrementAsync:function(){
		setTimeout(this.props.onIncrement, 1000)
	},

	render: function(){
		return (
			<p> Clicked: {this.props.value} times
			    <button onClick={this.props.onIncrement}>+</button>
			    <button onClick={this.props.onDecrement}>-</button>
			    <button onClick={this.incrementIfOdd}>Increment if odd</button>
			    <button onClick={this.incrementAsync}>Increment async</button>
			</p>
		);
	}
});

const App = React.createClass({
	render: function() {
		return (
			<Counter value={store.getState()}
		    onIncrement={() => store.dispatch({ type: 'INCREMENT' })}
		    onDecrement={() => store.dispatch({ type: 'DECREMENT' })}
		  />
		)
	}
});

const render = () => ReactDOM.render((<App />), document.getElementById('page'));
render();
store.subscribe(render);