import Cesium from '@/cesiumUtils/cesium'
import RainEffect from '@/cesiumUtils/importRain'
import SnowEffect from '@/cesiumUtils/importSnow'
import FogEffect from '@/cesiumUtils/importFog'

export const setRain = (viewer) => new RainEffect(viewer, { // 构造一个下雨的后处理着色器
  tiltAngle: 0.6, // tiltAngle 倾斜角度
  rainSize: 0.6, // rainSize 大小
  rainSpeed: 100.0, // speed of rain 速度
})

export const setSnow = (viewer) => new SnowEffect(viewer, {
  snowSize: 0.03, // size of snow
  snowSpeed: 600.0 // speed of snow
})

export const setFog = (viewer) => new FogEffect(viewer, {
  visibility: 0.2,
  color: new Cesium.Color(0.8, 0.8, 0.8, 0.3)
})
