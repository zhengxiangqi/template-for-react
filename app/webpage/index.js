import { BrowserRouter as Router, Route, IndexRoute, Switch } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop.js';
import HomeScreen from './screens/home/index.js';
import LoginScreen from './screens/login/index.js';
import RegisterScreen from './screens/register/index.js';
import UserCenterScreen from './screens/usercenter/index.js';
import ChangePasswordScreen from './screens/pwd/index.js';
import Popup from './components/Popup.js';


class App extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Router>
                <ScrollToTop>
                    <Switch>
                        <Route exact path='/' component={HomeScreen} />
                        <Route exact path='/login' component={LoginScreen} />
                        <Route exact path='/register' component={RegisterScreen} />
                        <Route exact path='/usercenter' component={UserCenterScreen} />
                        <Route exact path='/password' component={ChangePasswordScreen} />
                        <Route component={HomeScreen} />
                    </Switch>
                    <Popup />
                </ScrollToTop>
            </Router>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('root'));
