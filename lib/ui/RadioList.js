'use strict';

var React = require('react');
var Tappable = require('react-tappable');

var classnames = require('classnames');

module.exports = React.createClass({
	displayName: 'RadioList',

	propTypes: {
		options: React.PropTypes.array,
		value: React.PropTypes.oneOfType([React.PropTypes.string, React.PropTypes.number]),
		icon: React.PropTypes.string,
		onChange: React.PropTypes.func
	},

	onChange: function onChange(value) {
		this.props.onChange(value);
	},

	render: function render() {
		var self = this;
		var options = this.props.options.map(function (op, i) {
			var iconClassname = classnames('item-icon primary', op.icon);
			var tappableClassname = classnames('list-item', { 'is-first': i === 0 });
			var checkMark = op.value === self.props.value ? React.createElement(
				'div',
				{ className: 'item-note primary' },
				React.createElement('div', { className: 'item-note-icon ion-checkmark' })
			) : null;
			var icon = op.icon ? React.createElement(
				'div',
				{ className: 'item-media' },
				React.createElement('span', { className: iconClassname })
			) : null;

			function onChange() {
				self.onChange(op.value);
			}

			return React.createElement(
				Tappable,
				{ key: 'option-' + i, onTap: onChange, className: tappableClassname },
				icon,
				React.createElement(
					'div',
					{ className: 'item-inner' },
					React.createElement(
						'div',
						{ className: 'item-title' },
						op.label
					),
					checkMark
				)
			);
		});

		return React.createElement(
			'div',
			null,
			options
		);
	}
});