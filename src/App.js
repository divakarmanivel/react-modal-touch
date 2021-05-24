import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import FlexibleModal from 'react-modal-touch';

class App extends Component {
    constructor() {
        super();

        this.state = {
            modalIsOpen: false
        };

        this.openModal = this.openModal.bind(this);
        this.closeModal = this.closeModal.bind(this);
    }

    openModal() {
        this.setState({modalIsOpen: true});
    }

    closeModal() {
        this.setState({modalIsOpen: false});
    }

    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <h1 className="App-title">Welcome to React</h1>
                </header>
                <button
                    style={{marginTop: 100, padding: 15, backgroundColor:'black', color: '#ffffff'}}
                    onClick={this.openModal}
                >
                    Open modal
                </button>
                <FlexibleModal initWidth={400} initHeight={300} onRequestClose={this.closeModal}
                            isOpen={this.state.modalIsOpen}>
                    <h3>Flexible Modal</h3>
                    <div className="body">
                        <p>Mouse hover to move the modal :)</p>
                        <p>Use the right bottom arrow to resize me ^_^</p>
                    </div>
                    <button
                        onClick={this.closeModal}
                    >
                        Close modal
                    </button>
                </FlexibleModal>
            </div>
        );
    }
}

export default App;