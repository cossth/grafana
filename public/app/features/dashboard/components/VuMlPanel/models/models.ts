import { MlModelId } from './ids';
import { forecastingModel } from './forecasting';
import { emptyModel } from './empty';
import { vuMlModel } from './vuMlModel';

export function GetModels() {
  return [forecastingModel, emptyModel];
}

export function GetModelById(id: MlModelId): vuMlModel<any> {
  return GetModels().find(a => a.id === id) || emptyModel;
}
