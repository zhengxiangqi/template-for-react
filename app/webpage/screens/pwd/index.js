import Header from '../../components/Header.js';
import Auth from '../../components/Auth.js';
import Api from '../../components/Api.js';
import Http from '../../components/Http.js';
import Localization from '../../components/Localization.js';


export default class ChangePassword extends React.Component {
    constructor(props) {
        super(props);
        this.onChangePassword = this.onChangePassword.bind(this);

        this.state = {
            old_password: '',
            new_password: '',
            new_password_confirm: ''
        };
    }

    onChangePassword(event) {
        if (!this.state.old_password) {
            alert(Localization.get('alert_title'), Localization.get('input_old_password'));
            return;
        }
        if (!this.state.new_password) {
            alert(Localization.get('alert_title'), Localization.get('input_new_password'));
            return;
        }
        if (!this.state.new_password_confirm) {
            alert(Localization.get('alert_title'), Localization.get('input_new_password_again'));
            return;
        }
        if (this.state.new_password != this.state.new_password_confirm) {
            this.setState({
                new_password: '',
                new_password_confirm: ''
            });
            alert(Localization.get('alert_title'), Localization.get('password_different'));
            return;
        }

        let url = Api.password + '?token=' + Auth.auth().token.token_text;
        let data = {
            old_password: this.state.old_password,
            new_password: this.state.new_password
        };
        Http.put(url, data, (result) => {
            if (result.code == 2000) {
                alert(Localization.get('alert_title'), Localization.get('password_modified'), () => {
                    this.props.history.goBack();
                });
            } else {
                alert(Localization.get('alert_title'), result.message);
            }
        });
    }

    render() {
        return (
            <div>
                <Header title={Localization.get('modify_password')} onBack={this.props.history.goBack} />
                <div className="container-fluid">
                    <div className="form-group mt-3">
                        <input
                            type="password"
                            className="form-control"
                            placeholder={Localization.get('input_old_password')}
                            value={this.state.old_password}
                            onChange={(event) => {this.setState({old_password: event.target.value});}}/>
                    </div>
                    <div className="form-group">
                        <input
                            type="password"
                            className="form-control"
                            placeholder={Localization.get('input_new_password')}
                            value={this.state.new_password}
                            onChange={(event) => {this.setState({new_password: event.target.value});}}/>
                    </div>
                    <div className="form-group">
                        <input
                            type="password"
                            className="form-control"
                            placeholder={Localization.get('input_new_password_again')}
                            value={this.state.new_password_confirm}
                            onChange={(event) => {this.setState({new_password_confirm: event.target.value});}}/>
                    </div>
                    <div className="form-group">
                        <button onClick={this.onChangePassword} className="btn btn-primary btn-block">{Localization.get('modify_confirm')}</button>
                    </div>
                </div>
            </div>
        );
    }
}
