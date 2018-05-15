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
    infractions: async (parent, { skip, take }, ctx, info) => {
      let url = `https://cpsc-api.herokuapp.com/api?skip=${skip}`;
      if (take) {
        url += `&take=${take}`;
      }

      const res = await axios.get(url);
      console.log(res.data);
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
