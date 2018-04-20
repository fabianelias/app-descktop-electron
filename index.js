  const {app, BrowserWindow} = require('electron')
  const path = require('path')
  const url = require('url')

  function createWindow () {
    // Create the browser window.
    win = new BrowserWindow({width:950, height: 750})

    win.loadURL('{url-app-web}')

  }

  app.on('ready', createWindow)
