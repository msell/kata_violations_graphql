import { gql } from 'apollo-boost';

export default gql`
  {
  allViolations {
    violations {
      description
    }
  }
}`;

