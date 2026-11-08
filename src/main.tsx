import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { registerSW } from 'virtual:pwa-register'
import App from './app/App'
import { startSync } from './lib/sync/engine'
import { store } from './lib/storage/store'
import { lastSection, startIeltsBridge } from './ielts/storage/bridge'
import './index.css'

registerSW({ immediate: true })
startIeltsBridge()
startSync()

// Reopen the section (Swedish or IELTS) the learner used last on this device.
const active = store.get().activeProfileId
if (active && (location.hash === '' || location.hash === '#/') && lastSection(active) === 'ielts')
  history.replaceState(null, '', '#/ielts')

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
