'use server';

import { Family } from '@/types/family';
import { CosmosClient } from '@azure/cosmos';

const endpoint = process.env.DB_URL as string;
const key = process.env.DB_KEY as string;

const databaseId = 'ToDoList';
const containerId = 'Items';
const partitionKey = { kind: 'Hash', paths: ['/partitionKey'] };

const options = {
  endpoint,
  key,
  userAgentSuffix: 'CosmosDBJavascriptQuickstart',
};

export async function getFamily(name: string): Promise<Family> {
  const querySpec = {
    query: 'SELECT * FROM root r WHERE r.parents[0].familyName = @lastName',
    parameters: [
      {
        name: '@lastName',
        value: name,
      },
    ],
  };

  const client = new CosmosClient(options);

  const { resources: results } = await client
    .database(databaseId)
    .container(containerId)
    .items.query(querySpec)
    .fetchAll();

  if (results.length === 0) {
    throw new Error('Family not found');
  } else {
    return results[0] as Family;
  }
}
