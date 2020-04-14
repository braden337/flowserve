#!/usr/bin/env node

const ip = require('internal-ip').v4.sync()
const portfinder = require('portfinder')
const httpServer = require('http-server')
const qrcode = require('qrcode-terminal')
const path = require('path');


let dir = path.resolve(process.argv.length > 2 ? process.argv[2] : '.') 

let server = httpServer.createServer({
  root: dir
})

portfinder.basePort = 8080

portfinder.getPort(function (err, port) {

  if (err) { throw err }

  server.listen(port, function() {
    let url = `http://${ip}:${port}`
    qrcode.generate(url, { small: true }, function (qrcode) {
      console.log(qrcode)
      console.log(`Serving files from ${dir}/ at ${url}`)
    });
  })

})
