import type { ApolloError } from '@apollo/client/errors';
import type { Ref } from 'vue';

// Type is reduced to draw types uses for the task
export enum DrawType {
  EuroJackpot = 'eurojackpot',
}

// Type is reduced to fields that we can use for the task
export interface DrawModel {
  __typename: 'modelDraw';
  additionalNumbers: string[];
  gameAmount: string;
  jackpot: string;
  numbers: string[];
  date: string;
}

export interface DrawResult {
  __typename: 'draw';
  draws: DrawModel[];
}

// not as defensive as possible. We don't test for ALL props to exist
export const isDrawModel = (obj: DrawModel | unknown): obj is DrawModel =>
  obj !== undefined &&
  obj !== null &&
  typeof obj === 'object' &&
  Object.prototype.hasOwnProperty.call(obj, '__typename') &&
  // eslint-disable-next-line no-underscore-dangle
  (obj as DrawModel).__typename === 'modelDraw';

export interface ApiQuery<T> {
  loading: Ref<boolean>;
  result: Ref<T | undefined>;
  error: Ref<ApolloError | null>;
}
