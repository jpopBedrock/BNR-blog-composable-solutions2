import faunadb from 'faunadb';
const { query } = faunadb;

const get_client = ({ secret }) => {
  const client = new faunadb.Client({
    domain: 'db.us.fauna.com',
    scheme: 'https',
    port: 443,
    secret,
  });
  return client;
};

export default {
  get_client,
  query,
};
