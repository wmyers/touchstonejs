'use strict';

var React = require('react/addons'),
    classnames = require('classnames');

module.exports = React.createClass({
	displayName: 'LabelSelect',
	propTypes: {
		className: React.PropTypes.string,
		label: React.PropTypes.string,
		first: React.PropTypes.bool
	},
	getDefaultProps: function getDefaultProps() {
		return {
			className: ''
		};
	},
	getInitialState: function getInitialState() {
		return {
			value: this.props.value,
			selectedOption: this.props.selectedOption
		};
	},
	updateInputValue: function updateInputValue(event) {
		this.setState({
			value: event.target.value,
			selectedOption: event.target.value
		});

		//wm-20150720 hook to parent component
		this.props.onChange(event.target.value);
	},
	render: function render() {
		// Set Classes
		var className = classnames(this.props.className, {
			'list-item': true,
			'is-first': this.props.first
		});

		// Map Options
		var options = this.props.options.map((function (op) {
			return React.createElement('option', { key: 'option-' + op.value, value: op.value }, op.label);
		}).bind(this));

		return React.createElement(
			'label',
			{ className: className },
			React.createElement(
				'div',
				{ className: 'item-inner' },
				React.createElement(
					'div',
					{ className: 'field-label' },
					this.props.label
				),
				React.createElement(
					'div',
					{ className: 'field-control' },
					React.createElement(
						'select',
						{ value: this.state.value, onChange: this.updateInputValue, className: 'select-field', ref: 'select' },
						options
					),
					React.createElement(
						'div',
						{ className: 'select-field-indicator' },
						React.createElement('div', { className: 'select-field-indicator-arrow' })
					)
				)
			)
		);
	}
});