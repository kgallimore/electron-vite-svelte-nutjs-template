import { contextBridge, ipcRenderer } from 'electron'
import { electronAPI } from '@electron-toolkit/preload'

export interface Api {
  runTest: () => Promise<false | Error>
}

// Custom APIs for renderer
const api: Api = { runTest: (): Promise<false | Error> => ipcRenderer.invoke('runFunction') }

// Use `contextBridge` APIs to expose Electron APIs to
// renderer only if context isolation is enabled, otherwise
// just add to the DOM global.
contextBridge.exposeInMainWorld('electron', electronAPI)
contextBridge.exposeInMainWorld('api', api)
