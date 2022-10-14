import core from 'core/index.js';
const { FAUNA_SERVER_KEY } = process.env;

const workflow = async () => {
  const random_number = core.random.number();
  console.log('random_number', random_number);

  const random_letter = core.random.letter();
  console.log('random_letter', random_letter);

  const fauna_client = core.fauna.get_client({ secret: FAUNA_SERVER_KEY });
  const { Paginate, Collections } = core.fauna.query;
  const fauna_collections = await fauna_client.query(Paginate(Collections()));
  console.log('fauna_collections', fauna_collections);
};

workflow();
