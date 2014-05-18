require.config({
	baseUrl: 'src',
	paths: {
		react: '../bower_components/react/react',
		underscore: '../bower_components/underscore/underscore',
		ical: '../bower_components/ical.js/build/ical',
	},
	shim: {
		underscore: {
			exports: '_',
		},
		ical: {
			exports: 'ICAL',
		},
	}
})

require(['react','underscore','ical'], function(React, _, ICAL) {

});