/*
 * @Author: 韩宏斌
 * @Description: this is the description
 * @version: 1.0.0
 * @LastEditors: 韩宏斌
 * @Date: 2020-10-23 09:33:58
 * @LastEditTime: 2020-10-26 10:20:46
 * @FilePath: /homebridge-sensor-th/index.js
 */
let sensor = require("node-dht-sensor").promises;
module.exports = (api) => {
  api.registerAccessory("SensorPlugin", SensorAccessory);
};
class SensorAccessory {
  constructor(log, config, api) {
    this.log = log;
    this.config = config;
    this.api = api;
    this.Service = this.api.hap.Service;
    this.Characteristic = this.api.hap.Characteristic;

    /////////获取配置参数/////////////////////
    // 传感器类型
    this.type = config.type || 11;
    //引脚
    this.source = config.source || 4;
    //数据类型
    this.dataType = config.dataType || 0;
    //服务名称
    this.name = config.name;
    ///////////////配件信息服务///////////////
    this.informationService = new this.Service.AccessoryInformation()
      .setCharacteristic(this.Characteristic.Manufacturer, "raspiberry&DHT")
      .setCharacteristic(this.Characteristic.Model, "unknown Model");
    ////////////////////创建服务///////////////////////////////
    //温度传感器
    if (!this.dataType) {
      this.service = new this.Service.TemperatureSensor(this.name);
      this.service
        .getCharacteristic(this.Characteristic.CurrentTemperature)
        .on("get", this.handleDataGet.bind(this));
    }
    //湿度传感器
    else {
      this.service = new this.Service.HumiditySensor(this.name);
      this.service
        .getCharacteristic(this.Characteristic.CurrentRelativeHumidity)
        .on("get", this.handleDataGet.bind(this));
    }
  }
  handleDataGet(callback) {
    sensor
      .read(this.type, this.source)
      .then((res) => {
        this.log(
          this.dataType
            ? `当前湿度:${res.humidity.toFixed(1)}`
            : `当前温度:${res.temperature.toFixed(1)}`
        );
        callback(
          null,
          this.dataType ? res.humidity.toFixed(1) : res.temperature.toFixed(1)
        );
      })
      .catch((err) => {
        this.log(err);
        callback(null, 0);
      });
  }
  //暴露服务
  getServices() {
    return [this.service, this.informationService];
  }
}
