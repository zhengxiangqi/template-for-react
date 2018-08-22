import { Link } from 'react-router-dom';
import Auth from './Auth.js';


export default class Header extends React.Component {
    constructor(props) {
        super(props);
        this.auth = Auth.auth();
        this.onBack = this.onBack.bind(this);
    }

    onBack(event) {
        if (this.props.onBack) {
            this.props.onBack();
        }
    }

    render() {
        let className = "navbar navbar-light justify-content-between bg-primary";
        if (this.props.fixed) {
            className += " fixed-top";
        }
        if (this.props.home) {
            let btnUser = (
                <Link to="/login">
                    <button type="button" className="btn btn-light">登录</button>
                </Link>
            );

            if (this.auth.is_login) {
                btnUser = (
                    <span>
                        <span className="text-right col">{this.auth.user.nickname || this.auth.user.phone}</span>
                        <Link to="/usercenter">
                            <img className="icon-sm border border-secondary rounded-circle" src={this.auth.user.avatar_url || 'images/img_user.png'} alt="user"/>
                        </Link>
                    </span>
                );
            }

            return (
                <nav className={className}>
                    <a className="navbar-brand text-white">React</a>
                    {btnUser}
                </nav>
            );
        } else {
            return (
                <nav className={className}>
                    <button onClick={this.onBack} className="btn btn-light" type="button">返回</button>
                    <span className="col text-white text-center pl-0 pr-5">{this.props.title || 'React'}</span>
                </nav>
            );
        }
    }
}
