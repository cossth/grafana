import React from 'react';
import { ModelOptions } from './ids';
import { vuMlModel } from './vuMlModel';

export interface ForcastingOptions {}

export const forecastingModel: vuMlModel<ForcastingOptions> = {
  ...ModelOptions.forecasting,
  editor: () => {
    return (
      <>
        <input type="text" />
      </>
    );
  },
};
