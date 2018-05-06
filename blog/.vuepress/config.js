const path = require('path');

module.exports = {
	title: 'CGA blog',
	description: 'security & software development',
	chainWebpack: (config, isServer) => {
		config.resolve.alias
			.set('@', __dirname)

		config.devServer
			.watchOptions({
				aggregateTimeout: 300,
				poll: 1000,
			})

		return config;
	},
	dest: 'dist',
}