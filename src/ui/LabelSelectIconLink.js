var React = require('react/addons');
var classnames = require('classnames');
var Tappable = require('react-tappable');

module.exports = React.createClass({
	displayName: 'LabelSelectIconLink',
	propTypes: {
		className: React.PropTypes.string,
		label: React.PropTypes.string,
		first: React.PropTypes.bool,
		onChange: React.PropTypes.func,
		icon: React.PropTypes.string,
		onIconTap: React.PropTypes.func
	},
	getDefaultProps: function () {
		return {
			className: ''
		};
	},
	getInitialState: function () {
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
	render: function () {
		// Set Classes
		var className = classnames(this.props.className, {
			'list-item': true,
			'is-first': this.props.first
		});

		// Map Options
		var options = this.props.options.map(function (op) {
			return React.createElement(
				'option',
				{ key: 'option-' + op.value, value: op.value },
				op.label
			);
		}.bind(this));

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
						Tappable,
						{ className:'select-field-icon', component:'div', onTap:this.props.onIconTap },
						React.createElement(
							'span',
							{className:this.props.icon, style:{marginLeft:'2'}}
						)
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
