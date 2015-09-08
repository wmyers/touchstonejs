'use strict';

var React = require('react');
var Tappable = require('react-tappable');

var classnames = require('classnames');

module.exports = React.createClass({
	displayName: 'CheckList',

	propTypes: {
		options: React.PropTypes.array,
		icon: React.PropTypes.string,
		onChange: React.PropTypes.func
	},

	onChange: function onChange(index) {
		this.props.onChange(index);
	},

	render: function render() {
		var self = this;
		var options = this.props.options.map(function (op, i) {
			var iconClassname = classnames('item-icon primary', op.icon);
			var tappableClassname = classnames('list-item', { 'is-first': i === 0 });

			var checkMark = !!self.props.options[i].selected ? React.createElement(
				'div',
				{ className: 'item-note primary' },
				React.createElement('div', { className: 'item-note-icon ion-checkmark' })
			) : null;
			var icon = op.icon ? React.createElement(
				'div',
				{ className: 'item-media' },
				React.createElement('span', { className: iconClassname })
			) : null;

			var onChange = (function(index) {
				return self.onChange.bind(self, index);
			})(i);

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
