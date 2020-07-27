const PROX_CONFIG = [
    {
        context: ['/api'],
        target: "http://localhost:3080/",
        secure: false,
        logLevel: 'debug',
        pathRewrite: {'^/api': ''} 
    }
]

module.exports = PROX_CONFIG;