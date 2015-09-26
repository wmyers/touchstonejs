'use strict';

var React = require('react/addons'),
    classnames = require('classnames'),
    Tappable = require('react-tappable'),
    Navigation = require('../mixins/Navigation');

module.exports = React.createClass({
	displayName: 'LoadingButton',
	mixins: [Navigation],
	propTypes: {
		className: React.PropTypes.string,
		showView: React.PropTypes.string,
		viewTransition: React.PropTypes.string,
		viewProps: React.PropTypes.object,
		component: React.PropTypes.string,
		onTap: React.PropTypes.func,
		type: React.PropTypes.string,
		disabled: React.PropTypes.bool,
		loading: React.PropTypes.bool,
		label: React.PropTypes.string
	},
	getDefaultProps: function getDefaultProps() {
		return {
			disabled: false,
			loading: false
		};
	},
	render: function render() {
		// Class Name
		var className = classnames(this.props.className, this.props.type, {
			'loading-button': true,
			'disabled': this.props.disabled,
			'is-loading': this.props.loading
		});

		// Set Variables
		var label = this.props.label && !this.props.loading ? React.createElement(
			'div',
			{ className: 'loading-button-text' },
			this.props.label
		) : null;
		var onTap = this.props.showView ? this.showViewFn(this.props.showView, this.props.viewTransition, this.props.viewProps) : this.props.onTap;
		var loadingElements = this.props.loading ? React.createElement(
			'span',
			{ className: 'loading-button-icon-wrapper' },
			React.createElement('span', { className: 'loading-button-icon' })
		) : null;

		// Output Component
		return React.createElement(
			Tappable,
			{ className: className, component: this.props.component, onTap: onTap },
			loadingElements,
			label,
			this.props.children
		);
	}
});