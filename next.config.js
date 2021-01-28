module.exports = {
  webpack: (config, { isServer }) => {
    // Fixes npm packages that depend on `fs` module
    if (!isServer) {
      config.node = { fs: 'empty' }
    }

    return config
  },
  images: {
    domains: ['landbunadarsafn.s3.eu-west-1.amazonaws.com'],
  },
}
