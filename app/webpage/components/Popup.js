export default class Popup extends React.Component {
    constructor(props) {
        super(props);
        this.onCancel = this.onCancel.bind(this);
        this.onConfirm = this.onConfirm.bind(this);

        this.alert = this.alert.bind(this);
        this.confirm = this.confirm.bind(this);

        window.alert = this.alert;
        window.confirm = this.confirm;

        this.state = {
            type: 'alert',
            title: '温馨提示',
            content: '',
            onCancel: null,
            onConfirm: null
        };
    }

    alert(title, content, onConfirm) {
        this.setState({
            type: 'alert',
            title: title,
            content: content,
            onConfirm: onConfirm
        });
        $("#popup").modal('show');
    }

    confirm(title, content, onConfirm) {
        this.setState({
            type: 'confirm',
            title: title,
            content: content,
            onConfirm: onConfirm
        });
        $("#popup").modal('show');
    }

    onCancel(event) {
        this.setState({
            title: '',
            content: '',
            onCancel: null,
            onConfirm: null
        });
        if (this.state.onCancel) {
            this.state.onCancel();
        }
    }

    onConfirm(event) {
        this.setState({
            title: '',
            content: '',
            onCancel: null,
            onConfirm: null
        });
        if (this.state.onConfirm) {
            this.state.onConfirm();
        }
    }

    renderButton() {
        if (this.state.type == 'alert') {
            return (
                <div className="modal-footer">
                    <button
                        onClick={this.onConfirm}
                        type="button"
                        data-dismiss="modal"
                        className="btn btn-block btn-primary"
                    >
                        确认
                    </button>
                </div>
            );
        } else if (this.state.type == 'confirm') {
            return (
                <div className="modal-footer">
                    <button
                        onClick={this.onCancel}
                        type="button"
                        data-dismiss="modal"
                        className="btn btn-default w-50"
                    >
                        取消
                    </button>
                    <button
                        onClick={this.onConfirm}
                        type="button"
                        data-dismiss="modal"
                        className="btn btn-primary w-50"
                    >
                        确认
                    </button>
                </div>
            );
        }
    }

    render() {
        return (
            <div className="modal fade" id="popup" tabIndex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="w-100 text-center" id="exampleModalLongTitle">{this.state.title}</h5>
                        </div>
                        <div className="modal-body">{this.state.content}</div>
                        {this.renderButton()}
                    </div>
                </div>
            </div>
        );
    }
}
