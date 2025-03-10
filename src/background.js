'use strict'

// import { app, protocol, BrowserWindow } from 'electron'
// import { createProtocol } from 'vue-cli-plugin-electron-builder/lib'
// import installExtension, { VUEJS3_DEVTOOLS } from 'electron-devtools-installer'
// import { ipcMain } from 'electron'
// import path from 'path'
// import { type } from 'os'
const { app, protocol, BrowserWindow } = require('electron')
const { createProtocol } = require('vue-cli-plugin-electron-builder/lib')
// const installExtension = require('electron-devtools-installer').default
const { ipcMain } = require('electron')
const path = require('path')
const { type } = require('os')
const isDevelopment = process.env.NODE_ENV !== 'production'

// Scheme must be registered before the app is ready
protocol.registerSchemesAsPrivileged([
    { scheme: 'app', privileges: { secure: true, standard: true } }
])
let win = undefined;
async function createWindow() {
    // Create the browser window.
    win = new BrowserWindow({
        width: 800,
        height: 600,
        minWidth: 800,
        minHeight: 600,
        frame: false,
        webPreferences: {

            // Use pluginOptions.nodeIntegration, leave this alone
            // See nklayman.github.io/vue-cli-plugin-electron-builder/guide/security.html#node-integration for more info
            nodeIntegration: process.env.ELECTRON_NODE_INTEGRATION,
            contextIsolation: !process.env.ELECTRON_NODE_INTEGRATION,
            preload: path.join(__dirname, "preload.js"),
            webSecurity: false
        }
    })

    win.on('closed', () => { 
        win = null 
    })

    win.on('maximize', () => {
        win.webContents.send('render', {type: 'isMax', data: true})
    })

    win.on('unmaximize', () => {
        win.webContents.send('render', {type: 'isMax', data: false})
    })

    if (process.env.WEBPACK_DEV_SERVER_URL) {
        // Load the url of the dev server if in development mode
        await win.loadURL(process.env.WEBPACK_DEV_SERVER_URL)
        if (!process.env.IS_TEST) win.webContents.openDevTools()
    } else {
        createProtocol('app')
        // Load the index.html when not in development
        win.loadURL('app://./index.html')
    }
}

// Quit when all windows are closed.
app.on('window-all-closed', () => {
    // On macOS it is common for applications and their menu bar
    // to stay active until the user quits explicitly with Cmd + Q
    if (process.platform !== 'darwin') {
        app.quit()
    }
})

app.on('activate', () => {
    // On macOS it's common to re-create a window in the app when the
    // dock icon is clicked and there are no other windows open.
    if (BrowserWindow.getAllWindows().length === 0) createWindow()
})

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on('ready', async () => {
    //   if (isDevelopment && !process.env.IS_TEST) {
    //     // Install Vue Devtools
    //     try {
    //       await installExtension(VUEJS3_DEVTOOLS)
    //     } catch (e) {
    //       console.error('Vue Devtools failed to install:', e.toString())
    //     }
    //   }
    createWindow()
})



// Exit cleanly on request from parent process in development mode.
if (isDevelopment) {
    if (process.platform === 'win32') {
        process.on('message', (data) => {
            if (data === 'graceful-exit') {
                app.quit()
            }
        })
    } else {
        process.on('SIGTERM', () => {
            app.quit()
        })
    } 
}


ipcMain.on('window', (event, args) => {
    if (args.type === 'close') {
        win.close()
    }
    if (args.type === 'min') {
        win.minimize()
    }
    if (args.type === 'max') {
        if (win.isMaximized()) {
            win.unmaximize()
        } else {
            win.maximize()
        }
    }
})