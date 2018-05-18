import { gql } from 'apollo-boost';

export default gql`
  query infractionsById($id: Int!) {
    infractionsById(id: $id){
    violation
    infractions {
      date      
      product
      firm
    }
  }
}`;

