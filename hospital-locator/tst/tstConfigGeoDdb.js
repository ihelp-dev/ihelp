const AWS = require('aws-sdk');
const ddbGeo = require('dynamodb-geo');
const TableName = "TST_INDIA_LOCATION_TBL_1";
const REGION = process.env.AWS_REGION || 'us-west-2';
const akk = "AKIA3JLM5U5LID3ZBTOD"
const skk = "6WW1h1174KOFJeqdcgSZ1USJUsdIbro3yC7BNUTO"
const DDB_HOST = 'http://localhost:3005'

var awsConfig = {
    region: REGION,
    accessKeyId: akk,
    secretAccessKey: skk,
};

AWS.config.update(awsConfig);

function TableManager(dynamodb = new AWS.DynamoDB()) {
    const ddb = dynamodb;
    const config = new ddbGeo.GeoDataManagerConfiguration(ddb, TableName);
    config.rangeKeyAttributeName = "objectId";
    config.hashKeyLength = 5;
    config.longitudeFirst = true;;
    const tableManager = new ddbGeo.GeoDataManager(config);
    ddbGeo.GeoDataManager.prototype.createTable = createTableInput => {
      return ddb.createTable(createTableInput).promise();
    }
    return tableManager;
  }
  
  export default TableManager;
