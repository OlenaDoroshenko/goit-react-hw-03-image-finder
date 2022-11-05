import css from './ImageGalleryItem.module.css';
import PropTypes from 'prop-types';
import { Component } from 'react';
import Modal from 'components/Modal/Modal';


class ImageGalleryItem extends Component {
  state = {
    isModalOpen: false,
  };

  toggleModal = () =>
    this.setState({
      isModalOpen: !this.state.isModalOpen,
    });

  render() {
    const { url, largeImageURL } = this.props;

    return (
      <li className={css.ImageGalleryItem} onClick={this.toggleModal}>
        <img src={url} alt="" className={css.ImageGalleryItemImage} />
        {this.state.isModalOpen && (
          <Modal onClick={this.toggleModal} largeImageURL={largeImageURL} />
        )}
      </li>
    );
  }
}

export default ImageGalleryItem;

ImageGalleryItem.propTypes = {
  url: PropTypes.string.isRequired,
}
