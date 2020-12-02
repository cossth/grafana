import { Button, HorizontalGroup } from '@grafana/ui';
import React from 'react';
import { ModelOptions } from './ids';
import { ModelProps, vuMlModel, vuMLModelOptions } from './vuMlModel';

export interface ForcastingOptions {}

export const ForecastingEditor: React.FC<ModelProps & {}> = ({ modelId, updateModel, modelData }) => {
  let { id, name, options } = modelData;
  return (
    <HorizontalGroup>
      <h1>{name}</h1>
      <Button onClick={e => updateModel(id, options)}>Update</Button>
    </HorizontalGroup>
  );
};

export const forecastingModel: vuMlModel<vuMLModelOptions & ForcastingOptions> = {
  ...ModelOptions.forecasting,
  editor: ForecastingEditor,
};
