import { describe, it, expect } from 'vitest';
import { isDrawModel } from './types';

describe('Api service types', () => {
  it('isDrawModel', () => {
    expect(isDrawModel(undefined)).toBeFalsy();
    expect(isDrawModel(null)).toBeFalsy();
    expect(isDrawModel(1)).toBeFalsy();
    expect(isDrawModel('')).toBeFalsy();
    expect(isDrawModel({})).toBeFalsy();
    expect(
      isDrawModel({
        __typename: 'something',
      }),
    ).toBeFalsy();

    /**
     * actually a false positiv as it would not satisfy
     * the DrawModel type but good enough for now
     */
    expect(
      isDrawModel({
        __typename: 'modelDraw',
      }),
    ).toBeTruthy();
  });
});
