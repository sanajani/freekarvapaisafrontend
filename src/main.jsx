import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { persistor, store } from './redux/store.js'
import {Provider} from 'react-redux'
import {PersistGate} from 'redux-persist/es/integration/react'
import 'react-toastify/dist/ReactToastify.css';
import { ErrorBoundary } from 'react-error-boundary'
import ErrorPage from './components/ErrorPage.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <PersistGate persistor={persistor} loading={null}>
      <ErrorBoundary FallbackComponent={ErrorPage}>
        <App />
      </ErrorBoundary>
    </PersistGate>
  </Provider>,
)
