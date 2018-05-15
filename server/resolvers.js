/* eslint no-unused-vars: 0 */
import axios from 'axios';

export default {
  Query: {
    allViolations: async (parent, args, ctx, info) => {
      const res = await axios.get('https://cpsc-api.herokuapp.com/api/violations');

      return {
        total: res.data.total,
        violations: res.data.violations.map(x => ({
          id: x.id,
          total: x.total,
          description: x.violation,
        })),
      };
    },
  },
};
