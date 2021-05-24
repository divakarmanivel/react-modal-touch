import React, { Component, Fragment } from 'react';
import { FaBars } from 'react-icons/fa';
import { CSSTransition } from 'react-transition-group';
import PropTypes from 'prop-types';

import './BaseModal.scss';

class BaseModal extends Component {
	render() {
		const { isDragging, width, height, top, left, isOpen, isMinimised, onRequestRecover,className,onFocus } = this.props;
		if (isOpen) {
			return (
				<Fragment>
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
				</Fragment>
			);
		} else {
			return null;
		}
	}
}

// BaseModal.propTypes = {
//   id: PropTypes.string.isRequired,
//   label: PropTypes.string.isRequired,
//   className: PropTypes.string,
//   required: PropTypes.bool,
//   value: PropTypes.string,
//   onChange: PropTypes.func,
// }

// BaseModal.defaultProps = {
//   className: "",
//   required: false,
//   value: "",
//   onChange: () => {}
// }

export default BaseModal;