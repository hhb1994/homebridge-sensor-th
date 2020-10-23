


通过[Adafruit_Python_DHT](https://github.com/adafruit/Adafruit_Python_DHT),
来实现传感器接到树莓派,并接入 homebridge 的功能.


可以获取到当前传感器的温度和湿度数据:



![img](https://i.loli.net/2020/10/23/KuOcdXD6B87ATZV.png)


![img](https://i.loli.net/2020/10/23/BHLAVnFRyv4ilXC.png)





# 支持的传感器(type)

`Adafruit_Python_DHT` 支持三种传感器:

- DHT11(type=11)
- DHT22(type=22)
- AM2302(type=2302)

通过 homebridge `config.json` 中的 `type` 进行选择(默认为 DHT 11)

# 引脚(source)

传感器信号源接到树莓派上的引脚.

通过 homebridge `config.json` 中的 `source` 进行选择,遵循 GPIO/BCM 方式,(默认为 4)

# 检测类型 (dataType)

通过 homebridge `config.json` 中的 `dataType` 进行选择,默认为 0(温度)

- 0 温度

- 1 湿度
