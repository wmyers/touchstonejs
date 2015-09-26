'use strict';

var React = require('react');
var Tappable = require('react-tappable');

var classnames = require('classnames');

module.exports = React.createClass({
	displayName: 'Switch',

	propTypes: {
		className: React.PropTypes.string,
		on: React.PropTypes.bool,
		onTap: React.PropTypes.func,
		type: React.PropTypes.string
	},

	getDefaultProps: function getDefaultProps() {
		return {
			type: 'default'
		};
	},

	render: function render() {
		var className = classnames('switch', 'switch-' + this.props.type, { 'on': this.props.on });

		return React.createElement(
			Tappable,
			{ onTap: this.props.onTap, className: className, component: 'label' },
			React.createElement(
				'div',
				{ className: 'track' },
				React.createElement('div', { className: 'handle' })
			)
		);
	}
});