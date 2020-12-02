import { vuMlModel, vuMLModelOptions } from './vuMlModel';

export enum MlModelId {
  Empty = 'none',
  Forecasting = 'forecasting',
  Anamoly = 'anamoly',
  OPI = 'opi',
  Insights = 'insights',
  VAR = 'var',
  SES = 'ses',
}

type ModelDictionary<U> = {
  [K in MlModelId]: U;
};

export const ModelDescription: ModelDictionary<string> = {
  [MlModelId.Anamoly]:
    'Anomaly detection (or outlier detection) is the identification of rare items, events or observations which raise suspicions by differing significantly from the majority of the data.',
  [MlModelId.Forecasting]: 'Trains a model and start forecasting values for the metric.',
  [MlModelId.Insights]: 'Insights',
  [MlModelId.Empty]: 'Simple Model that does nothing.',
  [MlModelId.OPI]: 'Operational Predictive Modelling',
  [MlModelId.SES]:
    'The Simple Exponential Smoothing (SES) method models the next time step as an exponentially weighted linear function of observations at prior time steps.',
  [MlModelId.VAR]:
    'The Vector Autoregression (VAR) method models the next step in each time series using an AR model. It is the generalization of AR to multiple parallel time series, e.g. multivariate time series.',
};

export const ModelOptions: ModelDictionary<vuMlModel<vuMLModelOptions>> = {
  [MlModelId.Anamoly]: {
    id: MlModelId.Anamoly,
    description: ModelDescription.anamoly,
    name: 'Anamoly Detection',
  },
  [MlModelId.Forecasting]: {
    id: MlModelId.Forecasting,
    description: ModelDescription.forecasting,
    name: 'Forecasting Model',
  },
  [MlModelId.Insights]: {
    id: MlModelId.Insights,
    description: ModelDescription.insights,
    name: 'Insights',
  },
  [MlModelId.Empty]: {
    id: MlModelId.Empty,
    description: ModelDescription.none,
    name: 'Empty',
  },
  [MlModelId.OPI]: {
    id: MlModelId.OPI,
    description: ModelDescription.opi,
    name: 'OPI Index',
  },
  [MlModelId.SES]: {
    id: MlModelId.SES,
    description: ModelDescription.ses,
    name: 'Simple Exponential Smoothing',
  },
  [MlModelId.VAR]: {
    id: MlModelId.VAR,
    description: ModelDescription.var,
    name: 'Vector Autoregression',
  },
};
