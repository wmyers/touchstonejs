'use strict';

var React = require('react/addons');
var ReactCSSTransitionGroup = React.addons.CSSTransitionGroup;
var Transition = require('../mixins/Transition');

var classnames = require('classnames');

module.exports = React.createClass({
	displayName: 'Popup',
	mixins: [Transition],

	propTypes: {
		className: React.PropTypes.string,
		visible: React.PropTypes.bool
	},

	getDefaultProps: function getDefaultProps() {
		return {
			transition: 'none'
		};
	},

	renderBackdrop: function renderBackdrop() {
		if (!this.props.visible) return null;
		return React.createElement('div', { className: 'Modal-backdrop' });
	},

	renderDialog: function renderDialog() {
		if (!this.props.visible) return null;

		// Set classnames
		var dialogClassName = classnames('Modal-dialog', this.props.className);

		return React.createElement(
			'div',
			{ className: dialogClassName },
			this.props.children
		);
	},

	render: function render() {
		return React.createElement(
			'div',
			{ className: 'Modal' },
			React.createElement(
				ReactCSSTransitionGroup,
				{ transitionName: 'Modal-dialog', component: 'div' },
				this.renderDialog()
			),
			React.createElement(
				ReactCSSTransitionGroup,
				{ transitionName: 'Modal-background', component: 'div' },
				this.renderBackdrop()
			)
		);
	}
});