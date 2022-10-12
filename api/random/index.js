import core from 'core/index.js';

const handler = async event => {
  try {
    const { httpMethod } = event;
    const { queryStringParameters } = event;
    const { type } = queryStringParameters;

    switch (httpMethod) {
      case 'GET': {
        if (['number', 'letter'].includes(type)) {
          const random = core.random[type]();
          return {
            statusCode: 200,
            body: JSON.stringify({ random }),
          };
        } else {
          return {
            statusCode: 400,
            body: `400 Bad Request: Invalid type: ${type}`,
          };
        }
      }
      default: {
        return {
          statusCode: 400,
          body: '400 Bad Request',
        };
      }
    }
  } catch (error) {
    return {
      statusCode: 500,
      body: '500 Server Error',
    };
  }
};

export { handler };
