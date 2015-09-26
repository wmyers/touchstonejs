'use strict';

var classnames = require('classnames');

var React = require('react/addons');
var Tappable = require('react-tappable');

module.exports = React.createClass({
	displayName: 'KeypadButton',
	propTypes: {
		action: React.PropTypes.func,
		aux: React.PropTypes.bool,
		className: React.PropTypes.string,
		disabled: React.PropTypes.bool,
		icon: React.PropTypes.string,
		primaryLabel: React.PropTypes.string,
		secondaryLabel: React.PropTypes.string,
		value: React.PropTypes.string
	},

	getDefaultProps: function getDefaultProps() {
		return {
			action: function action() {}
		};
	},

	render: function render() {
		var className = classnames('Keypad-button', {
			'is-auxiliary': this.props.aux,
			'disabled': this.props.disabled
		}, this.props.className);

		var primaryLabel = this.props.primaryLabel ? React.createElement(
			'div',
			{ className: 'Keypad-button-primary-label' },
			this.props.primaryLabel
		) : null;
		var secondaryLabel = this.props.secondaryLabel ? React.createElement(
			'div',
			{ className: 'Keypad-button-secondary-label' },
			this.props.secondaryLabel
		) : null;
		var icon = this.props.icon ? React.createElement('span', { className: 'Keypad-button-icon', dangerouslySetInnerHTML: { __html: this.props.icon } }) : null;

		return React.createElement(
			'div',
			{ className: 'Keypad-cell' },
			React.createElement(
				Tappable,
				{ onTap: this.props.action, className: className, component: 'div' },
				icon,
				primaryLabel,
				secondaryLabel
			)
		);
	}
});