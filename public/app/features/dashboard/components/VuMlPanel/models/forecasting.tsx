import React from 'react';
import { ModelOptions } from './ids';
import { vuMlModel } from './vuMlModel';

export interface ForcastingOptions {}

export const fmEditor: React.FC<{}> = () => {
  return <input type="text" />;
};

export const forecastingModel: vuMlModel<ForcastingOptions> = {
  ...ModelOptions.forecasting,
  editor: () => <input type="text" />,
};
