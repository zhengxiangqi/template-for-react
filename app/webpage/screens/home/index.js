import Header from '../../components/Header.js';


export default class Home extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <Header home={true} fixed={true}/>
                <div className="container-fluid">
                    <div className="row no-gutters mt-5 pt-5">
                        <a target="_blank" href="/docs">文档</a>
                        <span className="glyphicon glyphicon-heart text-success"></span>
                    </div>
                </div>
            </div>
        );
    }
}
