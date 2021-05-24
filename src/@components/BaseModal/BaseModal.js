import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { FaBars } from 'react-icons/fa';
import { CSSTransition } from 'react-transition-group';

import './BaseModal.scss';

class BaseModal extends Component {
	render() {
		const { isDragging, width, height, top, left, isOpen, isMinimised, onRequestRecover, className, onFocus } = this.props;
		if (isOpen) {
			return (
				<>
					<CSSTransition in={!isMinimised} timeout={300} classNames="minimise" unmountOnExit>
						<div
							onClick={onFocus}
							ref={(node) => {
								this.node = node;
							}}
							draggable={isDragging}
							className={!className ? "flexible-modal" : "flexible-modal " + className}
							style={{ width, height, top, left }}
						>
							{this.props.children}
						</div>
					</CSSTransition>
					{isMinimised && (
						<button className="flexible-modal-rebound-btn" onClick={onRequestRecover}>
							<FaBars />
						</button>
					)}
				</>
			);
		} else {
			return null;
		}
	}
}

BaseModal.propTypes = {
  width: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired,
  top: PropTypes.number.isRequired,
  left: PropTypes.number.isRequired,
  className: PropTypes.string,
  onFocus: PropTypes.func,
  onRequestRecover: PropTypes.func,
  isDragging: PropTypes.bool,
  isMinimised: PropTypes.bool,
  isOpen: PropTypes.bool,
  transitionName: PropTypes.string
}

BaseModal.defaultProps = {
	className: "",
	onFocus: () => {},
	onRequestRecover: () => {},
	isDragging: false,
	isMinimised: false,
	isOpen: false,
	transitionName: "modal-anim"
}

export default BaseModal;