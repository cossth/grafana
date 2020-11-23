import { MlModelId } from './ids';

export interface ModelOptions {}

export interface vuMlModel<TOptions extends ModelOptions = {}> {
  id: MlModelId;
  name: string;
  description: string;
  options: TOptions;
  editor?: React.FC;
}
