import React from 'react';
import { ModelOptions } from './ids';
import { ModelProps, vuMlModel, vuMLModelOptions } from './vuMlModel';

export const insightsEditor: React.FC<ModelProps> = ({ modelId }) => {
  return (
    <div>
      <h1>No configuration required</h1>
      <p>{modelId}</p>
    </div>
  );
};

export const insightsModel: vuMlModel<vuMLModelOptions> = {
  ...ModelOptions.insights,
  editor: insightsEditor,
};
