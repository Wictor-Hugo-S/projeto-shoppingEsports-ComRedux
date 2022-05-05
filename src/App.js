import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './components/store'

import MainRoutes from './route/routes'

import { Container} from '@material-ui/core/';

import Header from './components/Header'


const App = () => {
 
  const localCart=JSON.parse(localStorage.getItem('shoping: cart'))
  
  console.log(localCart)
    if(localCart!==null){
      store.dispatch({type:'CHANGE_TO_CART',localCart})
    }

  return(
    <Provider store={store}>
    <Container maxWidth="xl">
        <Router>
            <Header/>
            <MainRoutes/>
     
        </Router>
    </Container>
    </Provider>
    
  )
}

export default App;
