// This file is generated, manual changes will be lost - read more on https://github.com/algolia/api-clients-automation.

import type { GetModelInstanceConfigStatus } from './getModelInstanceConfigStatus';
import type { ModelAttributes } from './modelAttributes';
import type { ModelsToRetrieve } from './modelsToRetrieve';

export type ModelInstance = {
  /**
   * ID of the model.
   */
  modelID: string;

  /**
   * Name of model instance.
   */
  name: string;

  type: ModelsToRetrieve;

  sourceID: string;

  index: string;

  modelAttributes?: ModelAttributes[];

  contentAttributes?: string[];

  /**
   * The date and time this model instance was last trained.
   */
  lastTrained: string;

  /**
   * The date and time this model instance generated its last inference.
   */
  lastInference: string;

  errorMessage?: string;

  modelStatus: GetModelInstanceConfigStatus;
};
