import React from 'react';

class SearchBar extends React.Component {
  state = {text: ''};

  onFormChange = e => {
    this.setState({text : e.target.value});
  }

  onFormSubmit = e => {
    e.preventDefault();
    this.props.onSearchSubmit(this.state.text);
  }

  render() {
    return (
    <div className="ui search">
      <form onSubmit={this.onFormSubmit} className="ui form ">
        <label htmlFor="search-bar">Search for an active player</label>
      <input id="search-bar" className="prompt" type="text" placeholder="LeBron James"
        onChange={this.onFormChange}
        value={this.state.text}
      />
      </form>
    </div>
    )
  }
}

export default SearchBar;