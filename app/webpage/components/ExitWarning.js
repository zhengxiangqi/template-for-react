/*
 * 该组件用来增加浏览器关闭或刷新时的监听事件，以便在用户的操作还未保存时提醒用户
 */
export default class ExitWarning extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.warn = this.warn.bind(this);
        window.addEventListener("beforeunload", this.warn);
    }

    warn(e) {
        if (this.props.disabled) {
            return null;
        }
        let confirmationMessage = '确认离开页面？';
        confirmationMessage = this.props.message ? this.props.message : confirmationMessage;

        (e || window.event).returnValue = confirmationMessage; //Gecko + IE
        return confirmationMessage; //Gecko + Webkit, Safari, Chrome etc.
    }

    componentWillUnmount() {
        window.removeEventListener("beforeunload", this.warn);
    }

    render() {
        return null;
    }
}
