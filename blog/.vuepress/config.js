module.exports = {
	title: 'testing title',
	chainWebpack: (config, isServer) => {
		config.devServer
			.watchOptions({
				aggregateTimeout: 300,
				poll: 1000,
			})

		return config;
	},
	host: 'localhost',
}