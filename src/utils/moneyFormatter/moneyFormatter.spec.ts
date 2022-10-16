import { beforeEach, describe, expect, it, vi, type SpyInstance } from 'vitest';
import { moneyFormatter } from '@/utils/moneyFormatter/moneyFormatter';

describe('moneyFormatter', () => {
  let langGetter: SpyInstance;
  beforeEach(() => {
    langGetter = vi.spyOn(navigator, 'language', 'get');
  });

  it('should format money in en-EN euro notation', () => {
    langGetter.mockReturnValue('en');

    expect(moneyFormatter(1000000)).toBe('€1,000,000.00');
    expect(moneyFormatter(1000000.23)).toBe('€1,000,000.23');
    expect(moneyFormatter(2000.23)).toBe('€2,000.23');
    expect(moneyFormatter(20)).toBe('€20.00');
  });

  it('should format money in de-DE euro notation', () => {
    langGetter.mockReturnValue('de');

    expect(moneyFormatter(1000000)).toBe('1.000.000,00 €');
    expect(moneyFormatter(1000000.23)).toBe('1.000.000,23 €');
    expect(moneyFormatter(2000.23)).toBe('2.000,23 €');
    expect(moneyFormatter(20)).toBe('20,00 €');
  });
});
