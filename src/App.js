import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'

import reducers from './reducers'
import SignIn from './components/SignIn'

const store = createStore(
  reducers,
  {
      auth: { authenticated: localStorage.getItem('token') }
  },
  applyMiddleware(thunk)
)

class App extends Component{

  componentDidMount() {

  }

  componentDidUpdate() {

  }

  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
            <div>
                <Route path='/' exact component={SignIn} />
            </div>
        </BrowserRouter>
      </Provider>
    )
  }
}

export default App;
