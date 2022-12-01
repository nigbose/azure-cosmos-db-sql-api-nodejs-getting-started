// @ts-check

const config = {
  endpoint: "https://mslearn-build-api-azure-functions-throughput.documents.azure.com:443/",
  key: "fF0rbddhYIQhHb8fnOMCO6IVjYYyMLUz8dNFJ2tdcbFvAGVzyy7rqH8y65xGzPjoTPDbUyh4UlQ2ACDb6JdzhA==",
  databaseId: "Tasks",
  containerId: "Items",
  partitionKey: { kind: "Hash", paths: ["/category"] }
};

module.exports = config;
