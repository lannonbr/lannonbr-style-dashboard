require("dotenv").config();

const AWS = require("aws-sdk");
AWS.config.update({ region: "us-east-1" });
const docClient = new AWS.DynamoDB.DocumentClient({ apiVersion: "2012-08-10" });

exports.sourceData = async () => {
  const month = "2020-07";

  const params = {
    TableName: "lannonbr.com-css-stats",
    ExpressionAttributeValues: {
      ":m": month,
    },
    ExpressionAttributeNames: {
      "#m": "month",
    },
    KeyConditionExpression: "#m = :m",
  };

  let entries = await docClient
    .query(params, function (err, data) {
      if (err) {
        if (err.statusCode === 200) {
          // boop
        } else {
          console.log(err);
        }
      } else {
        let entries = data.Items;
        return entries;
      }
    })
    .promise();

  return { entries };
};
