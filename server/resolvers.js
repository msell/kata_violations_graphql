/* eslint no-unused-vars: 0 */
import axios from 'axios';

export default {
  Query: {
    allViolations: async (parent, args, ctx, info) => {
      const url = 'https://cpsc-api.herokuapp.com/api/violations';
      const res = await axios.get(url);
      return {
        total: res.data.total,
        violations: res.data.violations.map(x => ({
          ...x,
          description: x.violation,
        })),
      };
    },
    infractions: async (parent, { skip, take, product }, ctx, info) => {
      let url = `https://cpsc-api.herokuapp.com/api?skip=${skip}`;
      if (take) {
        url += `&take=${take}`;
      }

      if (product) {
        url += `&product=${product}`;
      }

      const res = await axios.get(url);
      return {
        total: res.data.total,
        violations: res.data.violations.map(x => ({
          ...x,
          description: x.violation,
        })),
      };
    },
  },
};
