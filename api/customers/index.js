import core from 'core/index.js';
const { FAUNA_SERVER_KEY } = process.env;

const handler = async event => {
  try {
    const { httpMethod } = event;

    switch (httpMethod) {
      case 'GET': {
        const fauna_client = core.fauna.get_client({ secret: FAUNA_SERVER_KEY });
        const { Map, Paginate, Documents, Collection, Lambda, Get, Var } = core.fauna.query;
        const stores = await fauna_client.query(Map(Paginate(Documents(Collection('customers'))), Lambda(['ref'], Get(Var('ref')))));
        return {
          statusCode: 200,
          body: JSON.stringify({ data: stores.data }),
        };
      }
      default: {
        return {
          statusCode: 400,
          body: '400 Bad Request',
        };
      }
    }
  } catch (error) {
    console.error('error', error);
    return {
      statusCode: 500,
      body: '500 Server Error',
    };
  }
};

export { handler };
