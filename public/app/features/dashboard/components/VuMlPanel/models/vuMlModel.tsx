import { ComponentType } from 'react';
import { MlModelId } from './ids';

export interface vuMLModelOptions {
  id: string;
  name: string;
  active: boolean;
  options?: any;
}

export interface vuMlModel<TOptions extends vuMLModelOptions> {
  id: MlModelId;
  name: string;
  description: string;
  options?: TOptions;
  editor?: ComponentType<ModelProps>;
}
export interface ModelProps {
  modelId: string;
  updateModel: (id: string, data: vuMLModelOptions) => void;
  modelData: vuMLModelOptions;
}
