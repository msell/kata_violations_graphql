import React from 'react'
import { Link } from 'react-router-dom'

class RootPage extends React.Component {
  state = {ids: [{id: 4}, {id: 20}]}
  render() {
    return (
      <div><h1>Root Page</h1>
      <ul>
      {        
        this.state.ids.map((x) => <li><Link to={`/${x.id}`}>Go here: {x.id}</Link></li>)
      }
        </ul>
    </div>
    )
  }
}

export default RootPage;

