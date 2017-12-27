# flowserve

This is a command line utility that serves the current directory.
After the server starts, it will open image, a QR code that is the
local IP address and port number of the server. In iOS 11 they added
support for QR codes in the camera app. So you you just launch the
camera and point it at the QR code image that opened up, you'll be
able to open the link in Safari.

## Install

Make the command available globally

```shell
npm install -g flowserve
```

or if you like Yarn

```shell
yarn global add flowserve
```

## Usage

If `./public/` exists, serve files from there, otherwise serve the
current directory

```shell
flowserve
```
