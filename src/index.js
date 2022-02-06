import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/principal/App';
import "./index.css"
import "./style/App.scss"

//Context
import { provider, ProviderComposer } from './context/Compose'
import UserProvider from './context/users/UserProvider'
import ProfileProvider from './context/profile/ProfileProvider'


ReactDOM.render(
  <React.StrictMode>
    <ProviderComposer
        providers={[
            provider(UserProvider),
            provider(ProfileProvider)
        ]}
    >
        <App/>
    </ProviderComposer>
  </React.StrictMode>,
  document.getElementById('root')
);