import Header from '../../components/Header.js';
import SendButton from './SendButton.js';
import Auth from '../../components/Auth.js';
import Api from '../../components/Api.js';
import Http from '../../components/Http.js';
import Localization from '../../components/Localization.js';


export default class Register extends React.Component {
    constructor(props) {
        super(props);
        this.sendCode = this.sendCode.bind(this);
        this.onRegister = this.onRegister.bind(this);

        this.state = {
            phone: '',
            verify_code: '',
            password: '',
            password_confirm: '',
        };
    }

    sendCode(event) {
        if (this.state.phone == '' || this.state.phone.length < 11) {
            alert(Localization.get('alert_title'), Localization.get('input_phone'));
            return;
        }
        let url = Api.verifycode + '?phone=' + this.state.phone;
        Http.get(url, (result) => {
            if (result.code == 2000) {
                this.btnSend.startCounting();
                alert(Localization.get('alert_title'), Localization.get('send_code_success'));
            } else {
                alert(Localization.get('alert_title'), result.message);
            }
        });
    }

    onRegister(event) {
        if (!this.state.phone || this.state.phone.length < 11) {
            alert(Localization.get('alert_title'), Localization.get('input_phone'));
            return;
        }
        if (!this.state.verify_code || this.state.verify_code.length != 6) {
            alert(Localization.get('alert_title'), Localization.get('input_verify_code'));
            return;
        }
        if (!this.state.password) {
            alert(Localization.get('alert_title'), Localization.get('input_password'));
            return;
        }
        if (this.state.password != this.state.password_confirm) {
            this.setState({
                password: '',
                password_confirm: ''
            });
            alert(Localization.get('alert_title'), Localization.get('password_different'));
            return;
        }

        let data = {
            "phone":this.state.phone,
            "verify_code":this.state.verify_code,
            "password":this.state.password
        };

        Http.post(Api.register, data, (result) => {
            if (result.code == 2000) {
                let user = result.data[0].fields;
                let token = result.data[1].fields;
                user.id = result.data[0].pk;
                Auth.login(user, token);

                alert(Localization.get('alert_title'), Localization.get('register_success'), () => {
                    this.props.history.push('/');
                });
            } else if (result.code == 4005) {
                alert(Localization.get('alert_title'), Localization.get('user_exists'));
            } else {
                alert(Localization.get('alert_title'), result.message);
            }
        });
    }

    render() {
        return (
            <div className="fullscreen">
                <Header title={Localization.get('register')} onBack={this.props.history.goBack} />
                <div className="px-5 py-5">
                    <div className="form-group">
                        <input
                            type="tel"
                            className="form-control"
                            placeholder={Localization.get('input_phone')}
                            value={this.state.phone}
                            onChange={(event)=>{this.setState({phone: event.target.value});}}/>
                    </div>
                    <div className="input-group mb-3">
                        <input
                            type="text"
                            className="form-control"
                            placeholder={Localization.get('input_verify_code')}
                            value={this.state.code}
                            onChange={(event)=>{this.setState({code: event.target.value});}}/>
                        <div className="input-group-append">
                            <SendButton ref={(btn) => {this.btnSend = btn;}} onClick={this.sendCode}/>
                        </div>
                    </div>
                    <div className="form-group">
                        <input
                            type="password"
                            className="form-control"
                            placeholder={Localization.get('input_password')}
                            value={this.state.password}
                            onChange={(event)=>{this.setState({password: event.target.value});}}/>
                    </div>
                    <div className="form-group">
                        <input
                            type="password"
                            className="form-control"
                            placeholder={Localization.get('input_password_again')}
                            value={this.state.password_confirm}
                            onChange={(event)=>{this.setState({password_confirm: event.target.value});}}/>
                    </div>
                    <div className="form-group">
                        <button onClick={this.onRegister} className="btn btn-primary btn-block">{Localization.get('register')}</button>
                    </div>
                    <div className="form-group">
                        <button onClick={this.props.history.goBack} className="btn btn-light btn-block">{Localization.get('account_already')}</button>
                    </div>
                </div>
            </div>
        );
    }
}
