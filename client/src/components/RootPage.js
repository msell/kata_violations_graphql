import React from 'react'
import { Link } from 'react-router-dom'
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
} from 'material-ui/Table';
import { Query } from 'react-apollo'
import getViolations from '../queries/getViolations'

class RootPage extends React.Component {
  state = {ids: [{id: 4}, {id: 20}]}
  render() {
    return (
      <div><h1>Root Page</h1>
      <Query query={getViolations}>
        {({ loading, error, data }) => {
          if(loading) return "Loading...";
          if(error) return `Error! ${error.message}`

          return (
            data.allViolations.violations.map(x => <div>{x.description}</div>)
          )
        }}
      </Query>
      <Table>
    <TableHeader>
      <TableRow>
        <TableHeaderColumn>ID</TableHeaderColumn>
        <TableHeaderColumn>Name</TableHeaderColumn>
        <TableHeaderColumn>Status</TableHeaderColumn>
      </TableRow>
    </TableHeader>
    <TableBody>
      <TableRow>
        <TableRowColumn>1</TableRowColumn>
        <TableRowColumn>John Smith</TableRowColumn>
        <TableRowColumn>Employed</TableRowColumn>
      </TableRow>
      <TableRow>
        <TableRowColumn>2</TableRowColumn>
        <TableRowColumn>Randal White</TableRowColumn>
        <TableRowColumn>Unemployed</TableRowColumn>
      </TableRow>
      <TableRow>
        <TableRowColumn>3</TableRowColumn>
        <TableRowColumn>Stephanie Sanders</TableRowColumn>
        <TableRowColumn>Employed</TableRowColumn>
      </TableRow>
      <TableRow>
        <TableRowColumn>4</TableRowColumn>
        <TableRowColumn>Steve Brown</TableRowColumn>
        <TableRowColumn>Employed</TableRowColumn>
      </TableRow>
      <TableRow>
        <TableRowColumn>5</TableRowColumn>
        <TableRowColumn>Christopher Nolan</TableRowColumn>
        <TableRowColumn>Unemployed</TableRowColumn>
      </TableRow>
    </TableBody>
  </Table>
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

