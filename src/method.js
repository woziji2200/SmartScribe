// let ipcRenderer = require('electron').ipcRenderer;
export const isElectron = false

export function CloseWindow() {
    if (isElectron) window.electron.ipcRenderer.send('window', {type: 'close'})
}

export function MinWindow() {
    if (isElectron) window.electron.ipcRenderer.send('window', {type: 'min'})
}

export function MaxWindow() {
    if (isElectron) window.electron.ipcRenderer.send('window',{type:  'max'})
}
