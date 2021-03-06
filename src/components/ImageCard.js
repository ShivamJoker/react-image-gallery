import React from "react";

class ImageCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = { spans: 0, isScaled: false};

    this.imageRef = React.createRef();
  }
  componentDidMount() {
    this.imageRef.current.addEventListener("load", this.setSpans);
  }

  setSpans = () => {
    const height = this.imageRef.current.clientHeight;
    const spans = Math.ceil(height / 10 + 1);

    this.setState({ spans });
  };

  render() {
    const { author, src } = this.props.image;

    return (
      <div style={{ gridRowEnd: "span " + this.state.spans }}>
        <img ref={this.imageRef} alt={author} src={src.medium} />
      </div>
    );
  }
}

export default ImageCard;
