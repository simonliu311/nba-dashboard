import React from 'react';

class SearchBar extends React.Component {
  render() {
    return (
    <div className="ui search">
      <form className="ui form">
      <input class="prompt" type="text" placeholder="LeBron James"/>
      </form>
    </div>
    )
  }
}

export default SearchBar;