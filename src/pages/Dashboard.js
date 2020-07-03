import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom'
import Navigation from '../components/Navigation/Navigation';
import Cooperative from '../components/Cooperative/Cooperative';
import Thrift from '../components/Thrift/Thrift';
import Support from '../components/Support/Support';

const DashBoard = () => {
  return (
    <BrowserRouter>
      <div>

        <Navigation />
        <Switch>
          <Route exact path='/dashboard' component={Cooperative} />
          <Route path='/dashboard/thrift' component={Thrift} />
          <Route path='/dashboard/support' component={Support} />
          <div>Welcome to our world</div>
        </Switch>
      </div>
    </BrowserRouter>
  )
}

export default DashBoard;