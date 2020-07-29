import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Home from './pages/home/home';
import Video from './pages/register/video';
import Category from './pages/register/category';

import { BrowserRouter, Switch, Route} from 'react-router-dom';

ReactDOM.render(

  <BrowserRouter>
    <Switch>
      <Route path='/' component={Home} exact/>

      <Route path='/register/video' component={Video} exact/>

      <Route path='/category' component={Category} exact/>

      <Route component={() => (<div> Erro 404</div>)}/>

    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);
