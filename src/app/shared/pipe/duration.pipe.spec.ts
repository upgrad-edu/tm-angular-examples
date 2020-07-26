import { DurationPipe } from './duration.pipe';

describe('DurationPipe', () => {
  let durationPipe: DurationPipe;
  beforeEach(() => {
    durationPipe = new DurationPipe();
  });

  it('create an instance', () => {
    const pipe = new DurationPipe();
    expect(pipe).toBeTruthy();
  });

  it('Should return formatted duration', () => {
    const minutes = 155;
    expect(durationPipe.transform(minutes)).toBe('2 hr 35 mins');
  });
});
