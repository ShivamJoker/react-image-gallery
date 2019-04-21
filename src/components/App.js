import React from "react";
import pexels from "../api/pexels";

import SearchBar from "./SearchBar";
import ImageList from './ImageList'
class App extends React.Component {
  state = { images: [] };

  onSearchSubmit = async term => {
    const response = await pexels.get("/v1/search", {
      params: { query: term }
    });

    this.setState({ images: response.data.photos });
  };

  render() {
    return (
      <div className="ui container" style={{ marginTop: "20px" }}>
        <SearchBar onSubmit={this.onSearchSubmit} />
        <ImageList images={this.state.images}/>
      </div>
    );
  }
}

export default App;
