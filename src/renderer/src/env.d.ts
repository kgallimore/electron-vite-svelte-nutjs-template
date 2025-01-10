/// <reference types="svelte" />
/// <reference types="vite/client" />

import type { electronAPI } from '@electron-toolkit/preload'
import type { Api } from '../../preload'

declare global {
  interface Window {
    api: Api
    electron: typeof electronAPI
  }
}
