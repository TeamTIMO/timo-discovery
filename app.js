/**
 * @overview Discovery Microservice Server File
 * @module index
 * @author Dominik Sigmund
 * @version 0.1
 * @description Starts the Server and keeps it running
 * @memberof timo-discovery
 */
console.log('Starting up TIMO-Discovery...')
 
var http = require('http')
var server = http.createServer(function (req,res) {
	res.end('TIMO is here')
})

// Listen to Port
 if (process.argv.length >= 4) {
   config.port = process.argv[3]
 }
 server.listen(config.port)
 console.log('TIMO-Discovery running on ' + config.port)

/** Handles exitEvents by destroying open connections first
 * @function
* @param {object} options - Some Options
* @param {object} err - An Error Object
*/
 function exitHandler (options, err) {
   console.log('Exiting...')
   process.exit()
 }
  // catches ctrl+c event
 process.on('SIGINT', exitHandler)
  // catches uncaught exceptions
 process.on('uncaughtException', function (err) {
   console.error(err)
   exitHandler(null, err)
 })

  // keep running
 process.stdin.resume()

