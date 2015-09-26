'use strict';

var classnames = require('classnames');

var React = require('react/addons');

module.exports = React.createClass({
	displayName: 'Headerbar',

	propTypes: {
		className: React.PropTypes.string,
		height: React.PropTypes.string,
		label: React.PropTypes.string,
		fixed: React.PropTypes.bool,
		type: React.PropTypes.string
	},

	render: function render() {
		var className = classnames('Headerbar', this.props.className, this.props.type, { 'fixed': this.props.fixed });

		var label;
		if (this.props.label !== undefined) {
			label = React.createElement(
				'div',
				{ className: 'Headerbar-label' },
				this.props.label
			);
		}

		return React.createElement(
			'div',
			{ height: this.props.height, className: className },
			this.props.children,
			label
		);
	}
});