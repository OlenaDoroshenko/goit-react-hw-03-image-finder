import css from './Modal.module.css';
import PropTypes from 'prop-types';
import { Component } from 'react';

class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyDown);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyDown);
  }

  handleKeyDown = e => {
    if (e.code === 'Escape') {
      this.props.onClick();
    }
  };

  handleOverlayClick = e => {
    if (e.currentTarget === e.target) {
      this.props.onClick();
    }
  };

  render() {
    const { largeImageURL } = this.props;
    return (
      <div className={css.Overlay} onClick={this.handleOverlayClick}>
        <div className={css.Modal}>
          <img src={largeImageURL} alt="" />
        </div>
      </div>
    );
  }
}

export default Modal;

Modal.propTypes = {
  largeImageURL: PropTypes.string.isRequired,
}