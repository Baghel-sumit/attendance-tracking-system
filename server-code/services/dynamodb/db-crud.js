import AWS from 'aws-sdk';
import { awsRegion } from '../../config/vars';

const client = new AWS.DynamoDB.DocumentClient({ region: awsRegion });

export const getDynamodbItem = (tableName, item) => {
  const params = {
    TableName: tableName,
    Key: item
  };
  return new Promise((resolve, reject)=> {
    client.get(params, (err, data)=> {
      if (err) reject(err);
      resolve(data);
    });
  });
};

export const putDynamodbItem = (tableName, item) => {
  const params = {
    TableName: tableName,
    Key: item
  };
  return new Promise((resolve, reject)=> {
    client.put(params, (err, data)=> {
      if (err) reject(err);
      resolve(data);
    });
  });
};

export const deleteDynamodbItem = (tableName, item) => {
  const params = {
    TableName: tableName,
    Key: item
  };
  return new Promise((resolve, reject)=> {
    client.delete(params, (err, data)=> {
      if (err) reject(err);
      resolve(data);
    });
  });
};