import { Component} from 'react'
import { Searchbar } from './searchbar';
import { Loader } from './loader';
import { ImageGallery } from './imageGallery';
import { Modal } from './modal';
import { Button } from './button';
import { filteredImagesAxios } from 'helpers/filteredImagesAxios';

export class App extends Component {
  state = {
    filter: 'cat'
  }

  findImages = () => {
    
  }

  searchImages = (e) => {
    filteredImagesAxios(this.state.filter)
      .then(resp => resp.json())
        .then(data => console.log(data))
      .catch(err => console.log(err.message))
  }

  render() {
    return (
      <>
      <Searchbar searchImages={this.searchImages}></Searchbar>
        <Loader></Loader>
        <ImageGallery></ImageGallery>
        <Modal></Modal>
        <Button></Button>
      </>
        
  );
  }
  
};
