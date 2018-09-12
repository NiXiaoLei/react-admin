import React from 'react'
import { HashRouter, Route, Switch } from 'react-router-dom'
import App from './pages/App'
import Admin from './admin'
import NoMatch from './pages/nomatch'
import Modals from './pages/ui/modals'
import Buttons from './pages/ui/buttons'
import Loading from './pages/ui/loading'

export default class IRouter extends React.Component{

  render(){
    return (
      <HashRouter>
        <App>
          <Switch>
            <Route path="/logo" exact component={Admin} />
            <Route path="/admin" render={()=>
              <Admin>
                <Switch>
                  <Route  path='/admin/ui/buttons' component={Buttons} />
                  <Route  path='/admin/ui/modals' component={Modals} />
                  <Route  path='/admin/ui/loadings' component={Loading} />
                  <Route component={NoMatch} />
                </Switch>
              </Admin>
            }  />
          </Switch>
          
          {/* <Route path="/login" render={()=>'login'} /> */}
        </App>
      </HashRouter>
    )
  }

}