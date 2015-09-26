'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var blacklist = require('blacklist');
var classnames = require('classnames');

var React = require('react/addons');

module.exports = React.createClass({
	displayName: 'Input',
	propTypes: {
		first: React.PropTypes.bool
	},

	getDefaultProps: function getDefaultProps() {
		return {
			type: 'text'
		};
	},

	render: function render() {
		var className = classnames('field-item list-item', {
			'is-first': this.props.first,
			'u-selectable': this.props.disabled
		}, this.props.className);

		var inputProps = blacklist(this.props, 'children', 'className', 'first');

		return React.createElement(
			'div',
			{ className: className },
			React.createElement(
				'div',
				{ className: 'item-inner' },
				React.createElement(
					'label',
					{ className: 'item-content' },
					React.createElement('input', _extends({ className: 'field' }, inputProps))
				),
				this.props.children
			)
		);
	}
});