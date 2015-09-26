'use strict';

var xtend = require('xtend/mutable');
var React = require('react/addons');
var UI = require('./ui');
var Transition = require('./mixins/Transition');

/**
 * Touchstone App
 * ==============
 *
 * This function should be called with your app's views.
 *
 * It returns a Mixin which should be added to your App.
 */
function createApp(argViews) {
	var viewFactories = {};

	for (var viewName in argViews) {
		var view = argViews[viewName];

		viewFactories[viewName] = React.createFactory(view);
	}

	return {
		mixins: [Transition],

		componentWillMount: function componentWillMount() {
			this.views = viewFactories;
		},

		childContextTypes: {
			currentView: React.PropTypes.string,
			app: React.PropTypes.object.isRequired
		},

		getChildContext: function getChildContext() {
			return {
				currentView: this.state.currentView,
				app: this
			};
		},

		getCurrentView: function getCurrentView() {
			var viewsData = {};
			viewsData[this.state.currentView] = this.getView(this.state.currentView);

			return React.addons.createFragment(viewsData);
		},

		getInitialState: function getInitialState() {
			return {
				viewTransition: this.getCSSTransition()
			};
		},

		getView: function getView(key) {
			var view = viewFactories[key];
			if (!view) return this.getViewNotFound();

			var props = xtend({ key: key }, this.state.currentViewProps);

			if (this.getViewProps) {
				xtend(props, this.getViewProps());
			}

			return view(props);
		},

		getViewNotFound: function getViewNotFound() {
			return React.createElement(
				UI.View,
				null,
				React.createElement(
					UI.ViewContent,
					null,
					React.createElement(UI.Feedback, {
						iconName: 'ion-alert-circled',
						iconType: 'danger',
						text: 'Sorry, the view <strong>"' + this.state.currentView + '"</strong> is not available.',
						actionText: 'Okay, take me home',
						actionFn: this.gotoDefaultView
					})
				)
			);
		},

		showView: function showView(key, transition, props, state) {
			if (typeof transition === 'object') {
				props = transition;
				transition = 'none';
			}

			if (typeof transition !== 'string') {
				transition = 'none';
			}

			console.log('Showing view |' + key + '| with transition |' + transition + '| and props ' + JSON.stringify(props));

			var newState = xtend({
				currentView: key,
				currentViewProps: props,
				previousView: this.state.currentView,
				viewTransition: this.getCSSTransition(transition)
			}, state);

			this.setState(newState);
		}
	};
}

module.exports = createApp;