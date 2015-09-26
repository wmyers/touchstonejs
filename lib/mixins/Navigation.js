'use strict';

var React = require('react/addons');

/**
 * Touchstone Navigation Mixin
 * ===========================
 */

module.exports = {

	displayName: 'Navigation',

	contextTypes: {
		currentView: React.PropTypes.string,
		app: React.PropTypes.object.isRequired
	},

	showView: function showView() {
		this.context.app.showView.apply(this.context.app, arguments);
	},

	showViewFn: function showViewFn() {
		var args = arguments;
		return (function () {
			this.context.app.showView.apply(this.context.app, args);
		}).bind(this);
	}

};