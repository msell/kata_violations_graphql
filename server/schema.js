export default `
  type Infraction {
    date: String!
    product: String!
    violation: String!
    firm: String!
  }

  type Violation {
    total: Int!
    id: Int!
    description: String!    
  }

  type ViolationInfo {
    total: Int!
    violations: [Violation]!
  }

  type InfractionInfo {
    total: Int!
    violations: [Infraction]!
  }

  type Query {
    allViolations: ViolationInfo!
    infractions(skip: Int=0, take: Int): InfractionInfo!
  } 
`;
