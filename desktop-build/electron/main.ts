import { app, BrowserWindow } from 'electron' 
import path from 'node:path'


const createWindow = () => {
	const mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js')
    }
  })

  mainWindow.loadFile('index.html')
} 
