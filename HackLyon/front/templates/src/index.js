import { AppContainer } from 'react-hot-loader';
import React, { Component } from 'react';
import { Provider } from 'react-redux'
import reducers from './Reducer/reducers';
import { createStore } from 'redux'
import ReactDOM from 'react-dom';
import RouteSys from './RouteSys';
import registerServiceWorker from './registerServiceWorker';
import NavBar from './Components/NavBar/NavBar';

const store = createStore(reducers);

const navRender = Component => {
    ReactDOM.render(
        <AppContainer>
            <Provider store={store}>
                <Component />
            </Provider>
        </AppContainer>,
        document.getElementById('nav'),
    );
};

const routeSystem = Component => {
    ReactDOM.render(
    <div>
        <Provider store={store}>
            <Component />
        </Provider>
    </div>,
    document.getElementById('root')
    );
};

routeSystem(RouteSys)
navRender(NavBar);

if (module.hot)
{
    module.hot.accept('./Components/Home/Home', () => { navRender(NavBar), routeSystem(RouteSys)});
}

registerServiceWorker();
