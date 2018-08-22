import Localization from '../../components/Localization.js';


export default class SendButton extends React.Component {
    constructor(props) {
        super(props);
        this.countDown = this.countDown.bind(this);
        this.sendCode = this.sendCode.bind(this);
        this.startCounting = this.startCounting.bind(this);

        let tick = localStorage.getItem("register.timer");
        tick = tick ? tick : 0;
        this.state = {
            tick: tick
        };
        if (tick > 0) {
            this.timer = setInterval(this.countDown, 1000);
        }
    }

    countDown() {
        if (this.state.tick <= 0) {
            clearInterval(this.timer);
        } else {
            let tick = this.state.tick - 1;
            this.setState({tick: tick});
            localStorage.setItem("register.timer", tick);
        }
    }

    sendCode(event) {
        if (this.props.onClick) {
            this.props.onClick();
        }
    }

    startCounting() {
        this.setState({tick: 60});
        this.timer = setInterval(this.countDown, 1000);
    }

    render() {
        return (
            <button
                ref={(btn) => {this.btnSend = btn;}}
                onClick={this.sendCode}
                className="btn btn-success"
                type="button"
                disabled={this.state.tick == 0 ? false : true}
            >
            {this.state.tick == 0 ? Localization.get('send') : this.state.tick}
            </button>
        );
    }
}
