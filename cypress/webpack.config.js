module.exports = {
    resolve: {
        extensions: [".ts", ".js", ".feature"],
        fallback: {
            fs: false,
            child_process: false,
            readline: false
        }
    },
    module: {
        rules: [
            {
                test: /\.ts$/,
                exclude: [/node_modules/],
                use: [
                    {
                        loader: "ts-loader"
                    }
                ]
            },
            {
                test: /\.feature$/,
                use: [
                    {
                        loader: "cypress-cucumber-preprocessor/loader"
                    }
                ]
            },
            {
                test: /\.features$/,
                use: [
                    {
                        loader: "cypress-cucumber-preprocessor/lib/featuresLoader"
                    }
                ]
            }
        ]
    }
};