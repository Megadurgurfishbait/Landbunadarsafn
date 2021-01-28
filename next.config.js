// const BundleAnalyzerPlugin = require('webpack-bundle-analyzer')
//   .BundleAnalyzerPlugin
module.exports = {
  webpack: (config, { isServer }) => {
    // Fixes npm packages that depend on `fs` module
    if (!isServer) {
      config.node = { fs: 'empty' }
    }

    // config.plugins.push(
    //   new BundleAnalyzerPlugin({
    //     analyzerMode: 'server',
    //     analyzerPort: isServer ? 8888 : 8889,
    //     openAnalyzer: true,
    //   })
    // )

    return config
  },
  images: {
    domains: ['landbunadarsafn.s3.eu-west-1.amazonaws.com'],
  },
}
