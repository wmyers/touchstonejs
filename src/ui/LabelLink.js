var React = require('react/addons');
var classnames = require('classnames');
var Tappable = require('react-tappable');

module.exports = React.createClass({
	displayName: 'LabelLink',

	propTypes: {
		alignTop: React.PropTypes.bool,
		className: React.PropTypes.string,
		disabled: React.PropTypes.bool,
		first: React.PropTypes.bool,
		label: React.PropTypes.string,
		value: React.PropTypes.string,
		onTap: React.PropTypes.func
	},

	getDefaultProps: function () {
		return {
			type: 'text'
		};
	},

	render: function render() {
		var className = classnames(this.props.className, 'list-item', 'field-item', {
			'align-top': this.props.alignTop,
			'is-first': this.props.first,
			'u-selectable': this.props.disabled
		});

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
						Tappable,
						{ component: this.props.component, onTap: this.props.onTap },
						this.props.value
					)
				)
			)
		);
	}
});
