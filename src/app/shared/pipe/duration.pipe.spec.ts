import { DurationPipe } from './duration.pipe';

describe('Duration Pipe', () => {

  let durationPipe: DurationPipe;

  beforeEach(() => {
    durationPipe = new DurationPipe();
  });

  it('create a instance', () => {
    const pipe = new DurationPipe();
    expect(pipe).toBeTruthy();
  });

  it('should return formatted duration', () => {
    const minutes = 155;
    expect(durationPipe.transform(minutes)).toBe('2 hr 35 mins');
  });
});
