const path = require('path')
module.exports = {
    webpack: {
        alias: {
            modules: path.resolve(__dirname, 'src/modules/'),
            helpers: path.resolve(__dirname, 'src/helpers/'),
            infra: path.resolve(__dirname, 'src/infra/'),
            core: path.resolve(__dirname, 'src/core/'),
            pages: path.resolve(__dirname, 'src/pages/'),
        },
    },
}
