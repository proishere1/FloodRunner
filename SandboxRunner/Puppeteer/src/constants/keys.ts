import config = require("config");

export class Keys {
  // /* Flood Element Settings */
  static showBrowser =
    process.env.NODE_ENV == "Production" ? "" : "--no-headless";
  // static flood_maximumRetries =
  //   process.env.FLOOD_MAX_RETRIES ||
  //   config.get("flood.maxRetries") ||
  //   process.env.MAX_RETRIES;
  // static testId = process.env.FLOOD_TESTID || config.get("flood.testId");
  // static maximumAllowedScreenshots =
  //   process.env.FLOOD_MAXALLOWEDSCREENSHOTS ||
  //   config.get("flood.maximumAllowedScreenshots");
  static testResultFolderName = "testResult";
  static testScreenshotFolderName = "screenshots";
  // static testType = process.env.FLOOD_TEST_TYPE || config.get("flood.testType");
  // /*Azure Storage Settings*/
  // static azure_storageAccountName =
  //   process.env.AZURESTORAGE_ACCOUNTNAME ||
  //   config.get("azure-storage.accountName");
  // static azure_storageAccountAccessKey =
  //   process.env.AZURESTORAGE_ACCESSKEY || config.get("azure-storage.accessKey");
  // static azure_containerFolderName =
  //   process.env.AZURESTORAGE_CONTAINERFOLDERNAME ||
  //   config.get("azure-storage.containerFolderName");
  // /*RabbitMQ Settings*/
  // static rabbitmq_connectionString =
  //   process.env.RABBITMQ_CONNECTIONSTRING ||
  //   config.get("rabbitmq.connectionString");
  // static rabbitmq_queueName =
  //   process.env.RABBITMQ_QUEUENAME || config.get("rabbitmq.queueName");
  // /*System Settings*/
  static system_applicationLogFileName = "app.log";
  static system_systemLogFileName = "system.log";
}