var React = require('react');
var PropTypes = React.PropTypes;
import { Dimmer, Loader, Image, Segment, Message, Icon } from 'semantic-ui-react'

var styles = {
	container:{
		position: 'fixed',
		left: 0,
		right: 0,
		top: 0,
		bottom: 0,
		fontsize: '55px'
	},
	content: {
		textAlign: 'center',
		position: 'absolute',
		width: '100px',
		marginTop: '30px',
	}
};

var loadingimage = React.createClass({
	propTypes: {
		text: PropTypes.string,
		speed:PropTypes.number
	},
	getDefaultProps: function () {
		return {
			text: 'Loading.. please wait.',
			speed: 150
		}
	},
	getInitialState: function () {
		this.originalText = this.props.text;
		return {
			text: this.originalText
		}
	},
	componentDidMount: function() {
		var stopper = this.originalText + '...';
		this.interval = setInterval(function () {
			if (this.state.text === stopper) {
				this.setState({
					text: this.originalText
				})
			} else {
				this.setState({
					text: this.state.text + '.'
				})
			}
		}.bind(this), this.props.speed)
	},
	componentWillUnmount: function () {
		clearInterval(this.interval);
	},	

	render: function() {
		return (
			<Dimmer active>
			      <Message.Header>{this.state.text}</Message.Header>
			 </Dimmer>
		);
	}

});

module.exports = loadingimage;

