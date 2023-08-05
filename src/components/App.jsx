import { useEffect, useState } from 'react';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { Searchbar } from './searchbar';
import { Loader } from './loader';
import { ImageGallery } from './imageGallery';
import { Modal } from './modal';
import { Button } from './button';
import { Error } from './searchbar/Searchbar.styled';
import * as API from 'services/fetchImages';


export const App = () => {

  const [page, setPage] = useState(1);
  const [filter, setFilter] = useState('');
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState({ src: '', alt: '' });

  useEffect(() => {
    window.addEventListener('keydown', (e) => {
      if (e.code === 'Escape') {
        setIsModalOpen(false)
      }
    });

    return () => {
      window.removeEventListener('keydown', (e) => {
      if (e.code === 'Escape') {
        setIsModalOpen(false)
      }
    });
    }
  }, []);


  // componentDidUpdate(prevProps, prevState) {
  //   const { page, filter} = this.state;

  //   if (prevState.page !== this.state.page) {
  //     this.setState({ isLoading: true });
  //     this.loadImages(page, filter);

  //   } else if (prevState.filter !== this.state.filter) {
  //     this.setState({
  //       isLoading: true,
  //       images: []
  //     });
      
  //     this.loadImages(page, filter);
  //   }
  // };

  useEffect(() => {
    if (filter) {
      setIsLoading(true);
      loadImages(page, filter)
    } else {
      setImages([]);
    }    
  }, [page, filter])
  


  
  async function loadImages (page, filter) {
    try {
      const fetchedImages = await API.fetchImages(page, filter);
      if (!fetchedImages.hits.length) {
        setHasError(true);
      }
      else {
        (page === 1) ? (setImages([...fetchedImages.hits])) : (setImages(prevState =>
          [...prevState, ...fetchedImages.hits]));
      }
    } finally {
      setIsLoading(false);
    }
  };

  const onSubmit = (filter) => {
    if (!filter) {
      Notify.info('Please write you request')
    }
    setFilter(filter);
    setHasError(false);
  };

  const handleLoadMoreBtn = () => {
    setPage(prevState => prevState + 1)
  };

  const onModalToggle = (src, alt) => {
    setIsModalOpen(prevState => !prevState);
    setCurrentImage({ src: src, alt: alt });
  };

  const getCurrentImage = () => {
    return currentImage;
  }

  return (
      <>
        <Searchbar onSubmit={onSubmit}></Searchbar>
        {hasError && <Error> Ой, лишенько, спробуйте інший запит </Error>}
        {isLoading && <Loader></Loader>}
        <ImageGallery images={images} onModalToggle={onModalToggle}></ImageGallery>
        {isModalOpen && <Modal onModalToggle={onModalToggle} currentImage={getCurrentImage}></Modal>}
        {!images.length ? null : <Button handleLoadMoreBtn={handleLoadMoreBtn}></Button >}
      </>

    );
}
// class App extends React.Component {
//   state = {
//     page: 1,
//     filter: '',
//     images: [],
//     isLoading: false,
//     hasError: false,
//     isModalOpen: false,
//     currentImage: { src: '', alt: '' }
//   }

//   componentDidMount() {
//     window.addEventListener('keydown', (e) => {
//       if (e.code === 'Escape') {
//         this.setState({ isModalOpen: false });
//       }
//     })
//   }

//   componentDidUpdate(prevProps, prevState) {
//     const { page, filter} = this.state;

//     if (prevState.page !== this.state.page) {
//       this.setState({ isLoading: true });
//       this.loadImages(page, filter);

//     } else if (prevState.filter !== this.state.filter) {
//       this.setState({
//         isLoading: true,
//         images: []
//       });
      
//       this.loadImages(page, filter);
//     }
//   }

//   loadImages = async (page, filter) => {    
//     try {
//         const fetchedImages = await API.fetchImages(page, filter);
//        if (!fetchedImages.hits.length) {
//           this.setState({ hasError: true });
//        } else {
//           this.setState(prevState => {
//           return {
//             images: [...prevState.images, ...fetchedImages.hits],
//           };
//         });
//         }
        
//       } finally {
//         this.setState({ isLoading: false })
//       }

//   }


//   onSubmit = (filter) => {
//     if (!filter) {
//       Notify.info('Please write you request')
//     }

//     this.setState({
//       filter,
//       hasError: false,
//     })
//   }

//   handleLoadMoreBtn = () => {
//     this.setState(prevState => {
//       return {
//         page: prevState.page + 1,
//       }
//     })
//   }

//   onModalToggle = (src, alt) => {
//     this.setState(prevState => {
//       return {
//         isModalOpen: !prevState.isModalOpen,
//         currentImage: { src: src, alt: alt }
//       }
//     })
//   }

//   getCurrentImage = () => {
//     return this.state.currentImage;
//   }


//   render() {
//     const { images, hasError, isLoading, isModalOpen } = this.state;
    
//     return (
//       <>
//         <Searchbar onSubmit={this.onSubmit}></Searchbar>
//         {hasError && <Error> Ой, лишенько, спробуйте інший запит </Error>}
//         {isLoading && <Loader></Loader>}
//         <ImageGallery images={images} onModalToggle={this.onModalToggle}></ImageGallery>
//         {isModalOpen && <Modal onModalToggle={this.onModalToggle} currentImage={this.getCurrentImage}></Modal>}
//         {!images.length ? null : <Button handleLoadMoreBtn={this.handleLoadMoreBtn}></Button >}
//       </>

//     );
//   }

// };

// export { App };