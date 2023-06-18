const path = require('path');

module.exports = {
    mode: 'development',
    entry: {
        bundle1: './src/L0019-exercise/L0019-exercise.ts',
        bundle2: './src/L0035-video-exercise/L0035-video-exercise.ts',
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                loader: 'ts-loader',
                exclude: /node_modules/,
                options: {
                    configFile: 'tsconfig.frontend.json',
                },
            },
        ],
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
    },
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'frontend', 'assets', 'js'),
    },
    devtool: 'source-map',
};
