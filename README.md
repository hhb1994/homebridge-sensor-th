<!--
 * @Author: 韩宏斌
 * @Description: this is the description
 * @version: 1.0.0
 * @LastEditors: 韩宏斌
 * @Date: 2020-10-23 09:34:27
 * @LastEditTime: 2020-10-23 09:35:56
 * @FilePath: /homebridge-sensor-th/README.md
-->
通过[Adafruit_Python_DHT](https://github.com/adafruit/Adafruit_Python_DHT)

检测相对湿度

# 支持的传感器(type)

`Adafruit_Python_DHT` 支持三种传感器:

- DHT11(type=11)
- DHT22(type=22)
- AM2302(type=2302)

通过 homebridge `config.json` 中的 `type` 进行选择(默认为 DHT 11)

# 引脚(source)

接到树莓派上的引脚通过 homebridge `config.json` 中的 `source` 进行选择,遵循 GPIO/BCM 方式,(默认为 4)

# 检测类型 (dataType)

* 0 温度(默认)

* 1 湿度
