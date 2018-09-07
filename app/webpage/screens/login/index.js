import Header from '../../components/Header.js';
import Auth from '../../components/Auth.js';
import Api from '../../components/Api.js';
import Http from '../../components/Http.js';
import Localization from '../../components/Localization.js';


export default class Login extends React.Component {
    constructor(props) {
        super(props);
        this.onLogin = this.onLogin.bind(this);
        this.onRegister = this.onRegister.bind(this);

        this.state = {
            phone: '',
            password: '',
        };
    }

    onLogin(event) {
        if (!this.state.phone || this.state.phone.length < 11) {
            alert(Localization.get('alert_title'), Localization.get('input_phone'));
            return;
        }
        if (!this.state.password) {
            alert(Localization.get('alert_title'), Localization.get('input_password'));
            return;
        }

        let data = {
            "phone":this.state.phone,
            "password":this.state.password
        };

        Http.post(Api.login, data, (result) => {
            if (result.code == 2000) {
                let user = result.data[0].fields;
                let token = result.data[1].fields;
                user.id = result.data[0].pk;
                Auth.login(user, token);

                alert(Localization.get('alert_title'), Localization.get('login_success'), () => {
                    this.props.history.push('/');
                });
            } else {
                alert(Localization.get('alert_title'), result.message);
            }
        });
    }

    onRegister(event) {
        this.props.history.push("/register");
    }

    render() {
        return (
            <div>
                <Header title={Localization.get('login')} onBack={this.props.history.goBack} />
                <div className="container-fluid">
                    <div className="form-group mt-3">
                        <input
                            onChange={(event)=>{this.setState({phone: event.target.value});}}
                            type="tel"
                            className="form-control"
                            placeholder={Localization.get('input_phone')}
                            value={this.state.phone}/>
                    </div>
                    <div className="form-group">
                        <input
                            onChange={(event)=>{this.setState({password: event.target.value});}}
                            type="password"
                            className="form-control"
                            placeholder={Localization.get('input_password')}
                            value={this.state.password}/>
                    </div>
                    <div className="form-group">
                        <button onClick={this.onLogin} className="btn btn-primary btn-block">{Localization.get('login')}</button>
                    </div>
                    <div className="form-group">
                        <button onClick={this.onRegister} className="btn btn-light btn-block">{Localization.get('register')}</button>
                    </div>
                </div>
            </div>
        );
    }
}
