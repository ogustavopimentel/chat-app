import { createSwitchNavigator, createStackNavigator, createAppContainer } from 'react-navigation'

import Login from './components/Login'
import CreateAccount from './components/CreateAccount'
import Chat from './components/Chat'

const Routes = createSwitchNavigator({
    Login,
    CreateAccount,
    App: createStackNavigator({
        Chat
    })
})

export default createAppContainer(Routes)