import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import BaseModal from './@components/BaseModal';
import Resizer from './@components/Resizer';

import './FlexibleModal.scss';

class FlexibleModal extends Component {
	constructor(props) {
		super(props);
		this.state = {
			isDragging: false,
			isResizing: false,
			top:
				this.props.top !== undefined
					? this.props.top
					: this.props.initHeight
						? window.innerHeight / 2 - this.props.initHeight / 2 - 50
						: window.innerHeight / 2 - 400 / 2 - 50,
			left:
				this.props.left !== undefined
					? this.props.left
					: this.props.initWidth
						? window.innerWidth / 2 - this.props.initWidth / 2 - 21
						: window.innerWidth / 2 - 800 / 2 - 21,
			width: this.props.initWidth ? this.props.initWidth : 800,
			height: this.props.initHeight ? this.props.initHeight : 400,
			rel: null
		};
		this.baseModalRef = React.createRef();
	}

	componentDidMount() {
    	const { disableKeystroke } = this.props;
		document.addEventListener('mouseup', this.onMouseUp);
		document.addEventListener('touchend', this.onTouchEnd);
		if(!disableKeystroke) document.addEventListener('keydown', this.pressKey);
	}

	componentWillUnmount() {
		const { disableKeystroke } = this.props;
		if(document.removeEventListener){
		document.removeEventListener('mousemove', this.onMouseMove);
		document.removeEventListener('mouseup', this.onMouseUp);
		document.removeEventListener('touchmove', this.onTouchMove);
		document.removeEventListener('touchend', this.onTouchEnd);
		if(!disableKeystroke) document.removeEventListener('keydown', this.pressKey);
		}
	}

	onMouseDown = (e) => {
		// only left mouse button
		document.addEventListener('mousemove', this.onMouseMove);
		if (e.button !== 0) return;
		var pos = this.baseModalRef.current.node;
		this.setState({
			isDragging: true,
			rel: {
				x: e.pageX - pos.offsetLeft,
				y: e.pageY - pos.offsetTop
			}
		});
		e.stopPropagation();
		e.preventDefault();
	}

	onMouseUp = (e) => {
		document.removeEventListener('mousemove', this.onMouseMove);
		this.setState({ isDragging: false });
		this.setState({ isResizing: false });
		e.stopPropagation();
	}

	onMouseMove = (e) => {
		const { disableMove, disableVerticalMove, disableHorizontalMove } = this.props;
		if (this.state.isDragging) {
			if (disableMove) {
			} else if (disableVerticalMove && disableHorizontalMove) {
			} else if (!disableVerticalMove && disableHorizontalMove) {
				this.setState({
					top: e.pageY - this.state.rel.y
				});
			} else if (disableVerticalMove && !disableHorizontalMove) {
				this.setState({
					left: e.pageX - this.state.rel.x
				});
			} else if (!disableVerticalMove && !disableHorizontalMove) {
				this.setState({
					left: e.pageX - this.state.rel.x,
					top: e.pageY - this.state.rel.y
				});
			}
		} else if (this.state.isResizing) {
			this.funcResizing(e.clientX, e.clientY);
		} else {
			return;
		}
		e.stopPropagation();
		e.preventDefault();
	}

	onTouchStart = (e) => {
		document.addEventListener('touchmove', this.onTouchMove);
		// if (e.button !== 0) return;
		var pos = this.baseModalRef.current.node;
		this.setState({
			isDragging: true,
			rel: {
				x: e.touches[0].pageX - pos.offsetLeft,
				y: e.touches[0].pageY - pos.offsetTop
			}
		});
		e.stopPropagation();
	}

	onTouchEnd = (e) => {
		document.removeEventListener('touchmove', this.onTouchMove);
		this.setState({ isDragging: false });
		this.setState({ isResizing: false });
		e.stopPropagation();
	}

	onTouchMove = (e) => {
		const { disableMove, disableVerticalMove, disableHorizontalMove } = this.props;
		if (this.state.isDragging) {
			if (disableMove) {
			} else if (disableVerticalMove && disableHorizontalMove) {
			} else if (!disableVerticalMove && disableHorizontalMove) {
				this.setState({
					top: e.touches[0].pageY - this.state.rel.y
				});
			} else if (disableVerticalMove && !disableHorizontalMove) {
				this.setState({
					left: e.touches[0].pageX - this.state.rel.x
				});
			} else if (!disableVerticalMove && !disableHorizontalMove) {
				this.setState({
					left: e.touches[0].pageX - this.state.rel.x,
					top: e.touches[0].pageY - this.state.rel.y
				});
			}
		} else if (this.state.isResizing) {
			this.funcResizing(e.touches[0].clientX, e.touches[0].clientY);
		} else {
			return;
		}
		e.stopPropagation();
	}

	updateStateResizing = (isResizing) => {
		document.addEventListener('mousemove', this.onMouseMove);
		document.addEventListener('touchmove', this.onTouchMove);
		this.setState({ isResizing });
	}

	funcResizing = (clientX, clientY) => {
		const { minWidth: mWidth, minHeight: mHeight, disableVerticalResize, disableHorizontalResize } = this.props;
		var node = this.baseModalRef.current.node;
		let minWidth = mWidth ? mWidth : 200;
		let minHeight = mHeight ? mHeight : 100;
		if (!disableHorizontalResize && clientX > node.offsetLeft + minWidth) {
			this.setState({
				width: clientX - node.offsetLeft + 16 / 2
			});
		}
		if (!disableVerticalResize && clientY > node.offsetTop + minHeight) {
			this.setState({
				height: clientY - node.offsetTop + 16 / 2
			});
		}
	}

	updateStateDragging = (isDragging) => {
		this.setState({ isDragging });
	}

	pressKey = (e) => {
		const { onRequestClose, disableResize, disableMove, disableVerticalMove, disableHorizontalMove } = this.props;
		if (e.ctrlKey) {
			switch (e.keyCode) {
				case 37:
					!disableResize && this.setState((prevState) => ({ width: prevState.width - 20 }));
					break;
				case 38:
					!disableResize && this.setState((prevState) => ({ height: prevState.height - 20 }));
					break;
				case 39:
					!disableResize && this.setState((prevState) => ({ width: prevState.width + 20 }));
					break;
				case 40:
					!disableResize && this.setState((prevState) => ({ height: prevState.height + 20 }));
					break;
			}
		} else {
			switch (e.keyCode) {
				case 27:
					onRequestClose();
					break;
				case 37:
					!disableMove &&
						!disableHorizontalMove &&
						this.setState((prevState) => ({ left: prevState.left - 20 }));
					break;
				case 38:
					!disableMove && !disableVerticalMove && this.setState((prevState) => ({ top: prevState.top - 20 }));
					break;
				case 39:
					!disableMove &&
						!disableHorizontalMove &&
						this.setState((prevState) => ({ left: prevState.left + 20 }));
					break;
				case 40:
					!disableMove && !disableVerticalMove && this.setState((prevState) => ({ top: prevState.top + 20 }));
					break;
			}
		}
	}

	resize = (width, height) => {
		this.setState((prevState) => (
      { width: width || prevState.width, height: height || prevState.height }
    ));
	}

	render() {
		const { isOpen, isMinimised, onRequestClose, onRequestMinimise, onRequestRecover, disableResize,className,onFocus } = this.props;
		return (
			<div className="flexible-modal-container">
				{/*this mask is a must*/}
				{isOpen &&
				!isMinimised && (
					<div
						onClick={onRequestMinimise ? onRequestMinimise : onRequestClose}
						className="flexible-modal-mask"
					/>
				)}
				<BaseModal
					className = {className}
					onFocus={onFocus}
					width={this.state.width}
					height={this.state.height}
					top={this.state.top}
					left={this.state.left}
					isDragging={this.state.isDragging}
					onRequestRecover={onRequestRecover}
					isMinimised={isMinimised}
					isOpen={isOpen}
					updateStateDragging={this.updateStateDragging}
					transitionName="modal-anim"
					ref={this.baseModalRef}
				>
					{this.props.children}
					<div
						onMouseDown={this.onMouseDown}
						onTouchStart={this.onTouchStart}
						className="flexible-modal-drag-area"
						style={{
							width: this.state.width
						}}
						ref={(dragArea) => {
							this.dragArea = dragArea;
						}}
					/>
					<div
						onMouseDown={this.onMouseDown}
						onTouchStart={this.onTouchStart}
						className="flexible-modal-drag-area-left"
						style={{
							height: this.state.height
						}}
						ref={(dragArea) => {
							this.dragArea2 = dragArea;
						}}
					/>
					<div
						onMouseDown={this.onMouseDown}
						onTouchStart={this.onTouchStart}
						className="flexible-modal-drag-area-bottom"
						style={{
							width: this.state.width
						}}
						ref={(dragArea) => {
							this.dragArea3 = dragArea;
						}}
					/>
					<div
						onMouseDown={this.onMouseDown}
						onTouchStart={this.onTouchStart}
						className="flexible-modal-drag-area-right"
						style={{
							height: this.state.height
						}}
						ref={(dragArea) => {
							this.dragArea4 = dragArea;
						}}
					/>
					{!disableResize && <Resizer updateStateResizing={this.updateStateResizing} />}
				</BaseModal>
			</div>
		);
	}
}

// TextBox.propTypes = {
//   id: PropTypes.string.isRequired,
//   label: PropTypes.string.isRequired,
//   className: PropTypes.string,
//   required: PropTypes.bool,
//   value: PropTypes.string,
//   onChange: PropTypes.func,
// }

// TextBox.defaultProps = {
//   className: "",
//   required: false,
//   value: "",
//   onChange: () => {}
// }

export default FlexibleModal;