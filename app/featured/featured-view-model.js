import { fromObject, Observable } from '@nativescript/core'
import { SelectedPageService } from '../shared/selected-page-service'
import { AndroidSensors, AndroidSensorListener, SensorDelay } from 'nativescript-android-sensors';

export function FeaturedViewModel() {
    const viewModel = new Observable()
    viewModel.temperature = 0
    var sensors = new AndroidSensors();
    const sensorType = sensors.TYPE_AMBIENT_TEMPERATURE;
      sensors.startSensorUpdates(sensorType, function(data) {
          viewModel.set('temperature', data.values[0]);
      });
    return viewModel
  }
