import React, {Component} from 'react';
import FlexibleModal from 'react-modal-touch';

import './App.css';

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            modalIsOpen: false
        };
    }

    openModal = () => {
        this.setState({modalIsOpen: true});
    }

    closeModal = () => {
        this.setState({modalIsOpen: false});
    }

    render() {
        const { modalIsOpen } = this.state;

        return (
            <div className="App">
                <header className="App-header">
                    <h1 className="App-title">Welcome to Flexible Modal</h1>
                    {!modalIsOpen && <button onClick={this.openModal}>Open modal</button>}
                </header>
                <FlexibleModal
                    onRequestClose={this.closeModal}
                    isOpen={this.state.modalIsOpen}>
                        <h3>Modal</h3>
                        <div className="body">
                            <p>Use mouse/touch and drag to move the modal :)</p>
                            <p>Use the right bottom arrow to resize ^_^</p>
                        </div>
                        <button onClick={this.closeModal}>Close modal</button>
                </FlexibleModal>
            </div>
        );
    }
}

export default App;