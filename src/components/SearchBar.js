import React from "react";

class SearchBar extends React.Component {
  state = { term: "" };

  onFormSubmit = (e) => {
      e.preventDefault();
      this.props.onSubmit(this.state.term)
      
  }

  render() {
    return (
      <div className="segment ui">
        <form onSubmit={this.onFormSubmit} className="ui form">
          <div className="field">
            <label htmlFor="search">Search Images</label>
            <input
              type="text"
              name="search"
              placeholder="Type here"
              autoComplete="off"
              id="search"
              value={this.state.term}
              onChange={e => this.setState({ term: e.target.value })}
            />
          </div>
        </form>
      </div>
    );
  }
}
export default SearchBar;
