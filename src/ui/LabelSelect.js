var React = require('react/addons'),
	classnames = require('classnames');

module.exports = React.createClass({
	displayName: 'LabelSelect',
	propTypes: {
		className: React.PropTypes.string,
		label: React.PropTypes.string,
		first: React.PropTypes.bool
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
			//wm 20150814 reverted to old syntax to implement optional selected parameter
			var props = { key: 'option-' + op.value, value: op.value };
      if(op.value === this.state.selectedOption){
        props.selected = 'selected';
      }
			return React.createElement(
				'option',
				props,
				op.label
			);
		}.bind(this));

		return (
			<label className={className}>
				<div className="item-inner">
					<div className="field-label">{this.props.label}</div>
					<div className="field-control">
						<select value={this.state.value} onChange={this.updateInputValue} className="select-field">
							{options}
						</select>
						<div className="select-field-indicator">
							<div className="select-field-indicator-arrow" />
						</div>
					</div>
				</div>
			</label>
		);
	}
});
