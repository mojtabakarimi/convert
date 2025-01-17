const config = {
	extensions: {
		ts: 'module',
	},
	files: ['test/**/*.test.ts'],
	nodeArguments: ['--loader=ts-node/esm'],
	timeout: '45s',
};

export default config;
