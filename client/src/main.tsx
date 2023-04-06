import React, {createContext} from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Store from './store/store';
import {BrowserRouter} from 'react-router-dom';

interface State {
    store: Store
}

const store = new Store()
export const Context = createContext<State>({
    store
})

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
      <Context.Provider value={{store}}>
          <BrowserRouter>
              <App />
          </BrowserRouter>
      </Context.Provider>
)
