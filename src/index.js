import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Home from './pages/Home';

import {BrowserRouter, Switch,Route} from 'react-router-dom';//essa importaçao da agilidade
import CadastroVideo from './pages/cadastro/Video';
import CadastroCategoria from './pages/cadastro/cadastrocategoria';

const Pagina404 = () => (<div>Página 404</div>)

ReactDOM.render( //essa importaçao da agilidade ,e a função exact deixa tela em branco, 
                //e route sem path error404 quando nao tiver rota especifica certa
  <BrowserRouter>
     <Switch>
        <Route path="/" component={Home} exact /> 
        <Route path="/cadastro/video" component= {CadastroVideo} />
        <Route path="/cadastro/categoria" component= {CadastroCategoria} />
        <Route component={Pagina404}/>  
          
                                                 
     </Switch>
         </BrowserRouter>,
  document.getElementById('root')
);




