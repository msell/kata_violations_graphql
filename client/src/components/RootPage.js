import React from 'react';
import { Link } from 'react-router-dom';
import { List, ListItem, makeSelectable } from 'material-ui/List';
import { Query } from 'react-apollo';
import getViolations from '../queries/getViolations';
import Animate from './Animate';

const SelectableList = makeSelectable(List);

class RootPage extends React.Component {
  render() {
    return (
      <div>
        <h1>Violations</h1>
        <Query query={getViolations}>
          {({ loading, error, data }) => {
            if (loading) return 'Loading...';
            if (error) return `Error! ${error.message}`;

            return (
              <Animate>
                <SelectableList>
                  {data.allViolations.violations.map(x => (
                    <Link key={x.id} to={`/infractions/${x.id}`}>
                      <ListItem
                        value={x.id}
                        primaryText={`${x.description} (${x.total})`}
                      />
                    </Link>
                ))}
                </SelectableList>
              </Animate>
            );
          }}
        </Query>
      </div>
    );
  }
}

export default RootPage;
