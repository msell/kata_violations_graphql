import React from 'react';
import { Query } from 'react-apollo';
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
} from 'material-ui/Table';

import getInfractions from '../queries/getInfractions';

const InfractionsPage = ({ match }) => (

  <Query query={getInfractions} variables={{ id: match.params.id }}>
    {({ loading, data, error }) => {
            if (loading) return 'Loading...';
            if (error) return `Error! ${error.message}`;

            return (
              <div>
                <h1>{data.infractionsById.violation}</h1>
                <Table>
                  <TableHeader displaySelectAll={false}>
                    <TableHeaderColumn>Product</TableHeaderColumn>
                    <TableHeaderColumn>Violation</TableHeaderColumn>
                    <TableHeaderColumn>Firm</TableHeaderColumn>
                  </TableHeader>
                  <TableBody displayRowCheckbox={false}>
                    {data.infractionsById.infractions.map((x, i) => (
                      <TableRow key={i}>
                        <TableRowColumn>{x.product}</TableRowColumn>
                        <TableRowColumn>{data.infractionsById.violation}</TableRowColumn>
                        <TableRowColumn>{x.firm}</TableRowColumn>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>

              </div>
            );
          }

          }
  </Query>


);

export default InfractionsPage;
