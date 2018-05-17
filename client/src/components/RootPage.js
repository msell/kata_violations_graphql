import React from "react";
import { Link } from "react-router-dom";
import {List, ListItem, makeSelectable} from 'material-ui/List';
import { Query } from "react-apollo";
import getViolations from "../queries/getViolations";

let SelectableList = makeSelectable(List);

class RootPage extends React.Component {
  state = { ids: [{ id: 4 }, { id: 20 }] };
  render() {
    return (
      <div>
        <h1>Violations</h1>
        <Query query={getViolations}>
          {({ loading, error, data }) => {
            if (loading) return "Loading...";
            if (error) return `Error! ${error.message}`;

            return (
              <SelectableList>                                
                  {data.allViolations.violations.map(x => (                    
                      <ListItem value={x.id} key={x.id} primaryText={`${x.description} (${x.total})`} />
                  ))}                
              </SelectableList>
            );
          }}
        </Query>

        <ul>
          {this.state.ids.map(x => (
            <li key={x.id}><Link to={`/${x.id}`}>Go here: {x.id}</Link></li>
          ))}
        </ul>
      </div>
    );
  }
}

export default RootPage;
