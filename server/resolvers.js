/* eslint no-unused-vars: 0 */
/* eslint no-param-reassign: 0 */
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
    infractions: async (parent, args, ctx, info) => {
      const url = Object.keys(args).reduce((acc, key, i) => {
        acc += i === 0 ? '?' : '&';
        acc += `${key}=${args[key]}`;
        return acc;
      }, 'https://cpsc-api.herokuapp.com/api');

      const res = await axios.get(url);
      return {
        total: res.data.total,
        violations: res.data.violations.map(x => ({
          ...x,
          description: x.violation,
        })),
      };
    },
    infractionsById: async (parent, { id }, ctx, info) => {
      const url = `https://cpsc-api.herokuapp.com/api/violation/${id}`;
      const res = await axios.get(url);
      return {
        total: res.data.total,
        violation: res.data.violation,
        infractions: res.data.infractions.map(x => ({
          ...x,
          description: x.violation,
        })),
      };
    },
  },
};
