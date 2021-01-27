import React from 'react';
import nba from '../api/nba';
import SearchBar from './SearchBar';

class App extends React.Component {

  onSearchSubmit = async (text) => {
    const spaceIndex = text.search(' ');
    const firstName = text.substring(0, spaceIndex);
    const lastName = text.substring(spaceIndex+1);

    const res = await nba.get(`/players?search=${lastName}&per_page=100`);
    console.log(res.data.data);

    const findPlayer = (arr, f) => {
      // arr is an array of player objects
      for (let i = 0; i < arr.length; i++){
        if (arr[i].first_name.toLowerCase() === f.toLowerCase()){
          return arr[i]
        }
      }
    }

    const player = await findPlayer(res, firstName);

    const {id} = player;

    // res.data.data.filter((p) => {
    //   console.log(p.first_name);
    //   if (p.first_name.toLowerCase() === firstName.toLowerCase()){
    //     console.log(`found it sir: ${p}`)
    //     return p;
    //   } 
    // })[0];
    // should be saving the player id so it's easy to access stats
    console.log(id);
  }

  render() {
    return (
      <div className="ui centered container" style={{marginTop: '10px'}}>
        <SearchBar onSearchSubmit={this.onSearchSubmit}/>
      </div>
    )
  }
}

export default App;