'use strict';

var React = require('react/addons');
var Tappable = require('react-tappable');

var classnames = require('classnames');

module.exports = React.createClass({
	displayName: 'exports',

	propTypes: {
		className: React.PropTypes.string,
		iconName: React.PropTypes.string,
		iconType: React.PropTypes.string,
		header: React.PropTypes.string,
		subheader: React.PropTypes.string,
		text: React.PropTypes.string,
		actionText: React.PropTypes.string,
		actionFn: React.PropTypes.func
	},

	render: function render() {
		var viewClassName = classnames('view-feedback', this.props.className);
		var iconClassName = classnames('view-feedback-icon', this.props.iconName, this.props.iconType);

		var icon = this.props.iconName ? React.createElement('div', { className: iconClassName }) : null;
		var header = this.props.header ? React.createElement(
			'div',
			{ className: 'view-feedback-header' },
			this.props.header
		) : null;
		var subheader = this.props.subheader ? React.createElement(
			'div',
			{ className: 'view-feedback-subheader' },
			this.props.subheader
		) : null;
		var text = this.props.text ? React.createElement('div', { className: 'view-feedback-text', dangerouslySetInnerHTML: { __html: this.props.text } }) : null;
		var action = this.props.actionText ? React.createElement(
			Tappable,
			{ onTap: this.props.actionFn, className: 'view-feedback-action' },
			this.props.actionText
		) : null;

		return React.createElement(
			'div',
			{ className: viewClassName },
			icon,
			header,
			subheader,
			text,
			action
		);
	}
});