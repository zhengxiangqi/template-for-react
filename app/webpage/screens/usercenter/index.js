import { Link } from 'react-router-dom';
import Header from '../../components/Header.js';
import Auth from '../../components/Auth.js';
import Localization from '../../components/Localization.js';


export default class UserCenter extends React.Component {
    constructor(props) {
        super(props);
        this.auth = Auth.auth();
        this.onLogout = this.onLogout.bind(this);
    }

    onLogout(event) {
        confirm(Localization.get('alert_title'), Localization.get('is_logout'), () => {
            Auth.logout();
            this.props.history.goBack();
        });
    }

    render() {
        return (
            <div>
                <Header title={Localization.get('user_center')} onBack={this.props.history.goBack} />
                <div className="container-fluid px-0">
                    <div className="jumbotron jumbotron-fluid mb-0 usercenter-top">
                        <div className="container position-relative text-center">
                            <img className="border border-secondary rounded-circle icon" src={this.auth.user.avatar_url || 'images/img_user.png'} alt="user icon"/>
                            <p className="lead mt-2 mb-0">{this.auth.user.nickname || this.auth.user.phone}</p>
                        </div>
                    </div>
                    <div className="list-group list-group-flush border-bottom">
                        <Link to="/password">
                            <button className="btn list-group-item list-group-item-action">
                                <label className="float-left pl-2 mb-0">{Localization.get('modify_password')}</label>
                                <img className="float-right icon-xs-h" src="images/personal_img09.png" alt=""/>
                            </button>
                        </Link>
                        <button onClick={this.onLogout} className="btn list-group-item list-group-item-action">
                            <label className="float-left pl-2 mb-0">{Localization.get('logout')}</label>
                        </button>
                    </div>
                </div>
            </div>
        );
    }
}
