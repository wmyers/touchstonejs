'use strict';

var React = require('react/addons');
var Tappable = require('react-tappable');
var Navigation = require('../mixins/Navigation');

var transitions = require('../constants/transitions');
var validTransitions = Object.keys(transitions);

/**
 * Touchstone Link Component
 * =========================
 */

module.exports = React.createClass({
	displayName: 'Link',

	mixins: [Navigation],

	propTypes: {
		to: React.PropTypes.string.isRequired,
		params: React.PropTypes.object,
		viewTransition: React.PropTypes.oneOf(validTransitions),
		component: React.PropTypes.any,
		className: React.PropTypes.string
	},

	getDefaultProps: function getDefaultProps() {
		return {
			viewTransition: 'none',
			component: 'span'
		};
	},

	action: function action() {
		var params = this.props.params;

		if ('function' === typeof params) {
			params = params.call(this);
		}

		this.showView(this.props.to, this.props.viewTransition, params);
	},

	render: function render() {
		return React.createElement(
			Tappable,
			{ onTap: this.action, className: this.props.className, component: this.props.component },
			this.props.children
		);
	}
});