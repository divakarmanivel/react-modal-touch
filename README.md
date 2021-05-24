# react-modal-touch

Accessible modal dialog component for React.JS

# Demo
* [link to demo](https://divakarmanivel.github.io/react-modal-touch/)

# Touch feature support
* touch drag to move the modal
* touch drag on the cursor in bottom to resize

# Keyboard feature support
* arrowLeft: move left 20px
* arrowRight: move right 20px
* arrowUp: move up 20px
* arrowDown: move down 20px
* ctrl + arrowLeft: decrease width 20px
* ctrl + arrowRight: increase width 20px
* ctrl + arrowUp: increase height 20px
* ctrl + arrowDown: decrease height 20px

## Table of Contents

* [Installation](#installation)
* [Usage](#usage)
* [Styles](#styles)
* [Examples](#examples)
* [Testing](#testing)
* [Demos](#demos)

## Installation

To install, you can use [npm](https://npmjs.org/) or [yarn](https://yarnpkg.com):


    $ npm install react-modal-touch
    $ yarn add react-modal-touch


## Usage

The Modal object has two required prop:

- `isOpen` to render its children.
- `onRequestClose` to close the modal.

Optional prop:

- `minWidth` The minimum width of the modal(default 0).
- `minHeight` The minimum height of the modal(default 0).
- `initWidth` The initial width of the modal(default 800).
- `initHeight` The initial width of the modal(default 400).
- `top` The position of the modal.
- `left` The position of the modal.
- `disableMove` to disable the drag function(default false).
- `disableResize` to disable the resize function(default false).
- `disableVerticalResize` to disable the vertical resize function(default false).
- `disableHorizontalResize` to disable the horizontal resize function(default false).
- `disableVerticalMove` to disable the vertical drop function(default false).
- `disableHorizontalMove` to disable the horizontal drop function(default false).
- `disableKeystroke` to disable keystroke listener(default false).
- `onFocus` called when the modal is clicked.
- `className` The additional class to the modal.


Example:

```jsx
<FlexibleModal
  isOpen={bool}
  onRequestClose={this.closeModal}
  onFocus={() => console.log("Modal is clicked")}
  className={"my-modal-custom-class"}
  initWidth={800} 
  initHeight={400}
>
  <h1>Modal Content</h1>
  <p>Etc.</p>
</FlexibleModal>
```


## Examples

Inside an app:

```jsx
import React, {Component} from 'react';
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
                <button
                    onClick={this.openModal}
                >
                    Open modal
                </button>
                <FlexibleModal initWidth={800} initHeight={400} 
                onFocus={() => console.log("Modal is clicked")}
                className={"my-modal-custom-class"}
                onRequestClose={this.closeModal} 
                isOpen={this.state.modalIsOpen}>
                    <h3>Flexible Modal</h3>
                    <div className="body">
                        <p>This is the modal&apos;s body.</p>
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

```

