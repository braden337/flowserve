#!/usr/bin/env node

const fs = require('fs')
const os = require('os')
const qr = require('qr-image')
const path = require('path')
const ip = require('internal-ip').v4.sync()
const open = require('open')
const server = require('http-server').createServer()

const port = 8080

server.listen(8080)

let url = `http://${ip}:${port}`

console.log(`Serving current directory on ${url}`)

let image = qr.image(url, {type: 'png'})
let png = path.join(os.tmpdir(), 'server.png')

image.pipe(fs.createWriteStream(png))

open(png)
