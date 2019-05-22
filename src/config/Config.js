let production = true
// module.exports = {
//     'Config': production ? require('./config.prod.json') : require('./config.dev.json')
// }

let Config = {
    'Config': production ? require('./config.prod.json') : require('./config.dev.json')
}

export default Config