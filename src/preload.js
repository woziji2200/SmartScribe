import { contextBridge, ipcRenderer } from "electron";
import { isElectron } from "./method";

if(isElectron) {
    contextBridge.exposeInMainWorld("electron", {
        ipcRenderer,
        ipcRendererOn: (name,fn) => {
            ipcRenderer.on(name, (event, args) => fn(event, args));
        }
    });
}



