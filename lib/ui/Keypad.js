'use strict';

var classnames = require('classnames');
var icons = {
	del: require('../icons/delete')
};

var ViewContent = require('./ViewContent');
var KeypadButton = require('./KeypadButton');
var React = require('react/addons');

module.exports = React.createClass({
	displayName: 'Keypad',
	propTypes: {
		action: React.PropTypes.func,
		className: React.PropTypes.string,
		stowed: React.PropTypes.bool,
		enableDel: React.PropTypes.bool,
		type: React.PropTypes.oneOf(['black-translucent', 'white-translucent']),
		wildkey: React.PropTypes.string
	},

	getDefaultProps: function getDefaultProps() {
		return {
			type: 'default'
		};
	},

	render: function render() {
		var action = this.props.action;
		var typeName = 'Keypad--' + this.props.type;
		var keypadClassName = classnames(this.props.className, typeName, 'Keypad', {
			'is-stowed': this.props.stowed
		});

		var wildkey;

		if (this.props.wildkey === 'decimal') {
			wildkey = React.createElement(KeypadButton, { value: 'decimal', primaryLabel: '·', aux: true });
		} else {
			wildkey = React.createElement(KeypadButton, { aux: true, disabled: true });
		}

		return React.createElement(
			ViewContent,
			{ className: keypadClassName },
			React.createElement(KeypadButton, { action: function () {
					return action('1');
				}, primaryLabel: '1' }),
			React.createElement(KeypadButton, { action: function () {
					return action('2');
				}, primaryLabel: '2', secondaryLabel: 'ABC' }),
			React.createElement(KeypadButton, { action: function () {
					return action('3');
				}, primaryLabel: '3', secondaryLabel: 'DEF' }),
			React.createElement(KeypadButton, { action: function () {
					return action('4');
				}, primaryLabel: '4', secondaryLabel: 'GHI' }),
			React.createElement(KeypadButton, { action: function () {
					return action('5');
				}, primaryLabel: '5', secondaryLabel: 'JKL' }),
			React.createElement(KeypadButton, { action: function () {
					return action('6');
				}, primaryLabel: '6', secondaryLabel: 'MNO' }),
			React.createElement(KeypadButton, { action: function () {
					return action('7');
				}, primaryLabel: '7', secondaryLabel: 'PQRS' }),
			React.createElement(KeypadButton, { action: function () {
					return action('8');
				}, primaryLabel: '8', secondaryLabel: 'TUV' }),
			React.createElement(KeypadButton, { action: function () {
					return action('9');
				}, primaryLabel: '9', secondaryLabel: 'WXYZ' }),
			wildkey,
			React.createElement(KeypadButton, { action: function () {
					return action('0');
				}, primaryLabel: '0' }),
			React.createElement(KeypadButton, { action: function () {
					return action('delete');
				}, icon: icons.del, disabled: !this.props.enableDel, aux: true })
		);
	}
});