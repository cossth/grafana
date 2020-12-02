import { MlModelId } from './ids';
import { forecastingModel } from './forecasting';
import { anamolyModel } from './anamoly';
import { insightsModel } from './insights';
import { sesModel } from './ses';
import { opiModel } from './opi';
import { varModel } from './var';
import { emptyModel } from './empty';
import { vuMlModel } from './vuMlModel';

export function GetModels() {
  return [forecastingModel, anamolyModel, insightsModel, opiModel, sesModel, varModel, emptyModel];
}

export function GetModelById(id: MlModelId): vuMlModel<any> {
  return GetModels().find(a => a.id === id) || emptyModel;
}
