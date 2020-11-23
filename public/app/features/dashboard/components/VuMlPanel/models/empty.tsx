import { ModelOptions } from './ids';
import { vuMlModel } from './vuMlModel';

export const emptyModel: vuMlModel<{}> = {
  ...ModelOptions.none,
};
