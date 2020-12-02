import React from 'react';
import { ModelOptions } from './ids';
import { ModelProps, vuMlModel, vuMLModelOptions } from './vuMlModel';

export const varEditor: React.FC<ModelProps> = ({ modelId }) => {
  return (
    <div>
      <h1>No configuration required</h1>
      <p>{modelId}</p>
    </div>
  );
};

export const varModel: vuMlModel<vuMLModelOptions> = {
  ...ModelOptions.var,
  editor: varEditor,
};
