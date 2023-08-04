import React from 'react';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { Searchbar } from './searchbar';
import { Loader } from './loader';
import { ImageGallery } from './imageGallery';
import { Modal } from './modal';
import { Button } from './button';
import { Error } from './searchbar/Searchbar.styled';
import * as API from 'services/fetchImages';


class App extends React.Component {
  state = {
    page: 1,
    filter: '',
    images: [],
    isLoading: false,
    hasError: false,
    isModalOpen: false,
    currentImage: { src: '', alt: '' }
  }

  componentDidMount() {
    window.addEventListener('keydown', (e) => {
      if (e.code === 'Escape') {
        this.setState({ isModalOpen: false });
      }
    })
  }

  componentDidUpdate(prevProps, prevState) {
    const { page, filter} = this.state;

    if (prevState.page !== this.state.page) {
      this.setState({ isLoading: true });
      this.loadImages(page, filter);

    } else if (prevState.filter !== this.state.filter) {
      this.setState({
        isLoading: true,
        images: []
      });
      
      this.loadImages(page, filter);
    }
  }

  loadImages = async (page, filter) => {    
    try {
        const fetchedImages = await API.fetchImages(page, filter);
       if (!fetchedImages.hits.length) {
          this.setState({ hasError: true });
       } else {
          this.setState(prevState => {
          return {
            images: [...prevState.images, ...fetchedImages.hits],
          };
        });
        }
        
      } finally {
        this.setState({ isLoading: false })
      }

  }


  onSubmit = (filter) => {
    if (!filter) {
      Notify.info('Please write you request')
    }

    this.setState({
      filter,
      hasError: false,
    })
  }

  handleLoadMoreBtn = () => {
    this.setState(prevState => {
      return {
        page: prevState.page + 1,
      }
    })
  }

  onModalToggle = (src, alt) => {
    this.setState(prevState => {
      return {
        isModalOpen: !prevState.isModalOpen,
        currentImage: { src: src, alt: alt }
      }
    })
  }

  getCurrentImage = () => {
    return this.state.currentImage;
  }


  render() {
    const { images, hasError, isLoading, isModalOpen } = this.state;
    
    return (
      <>
        <Searchbar onSubmit={this.onSubmit}></Searchbar>
        {hasError && <Error> Ой, лишенько, спробуйте інший запит </Error>}
        {isLoading && <Loader></Loader>}
        <ImageGallery images={images} onModalToggle={this.onModalToggle}></ImageGallery>
        {isModalOpen && <Modal onModalToggle={this.onModalToggle} currentImage={this.getCurrentImage}></Modal>}
        {!images.length ? null : <Button handleLoadMoreBtn={this.handleLoadMoreBtn}></Button >}
      </>

    );
  }

};

export { App };