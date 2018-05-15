import React from 'react';
import { Card, CardHeader } from 'material-ui/Card';

const Header = () => (
  <Card>
    <CardHeader
      title="CPSC App"
      subtitle="OT Univiersity"
      actAsExpander={false}
      showExpandableButton={false}
    />

  </Card>
);

export default Header;
