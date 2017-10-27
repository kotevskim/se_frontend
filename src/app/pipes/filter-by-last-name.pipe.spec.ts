import { FilterByLastNamePipe } from './filter-by-last-name.pipe';

describe('FilterByLastNamePipe', () => {
  it('create an instance', () => {
    const pipe = new FilterByLastNamePipe();
    expect(pipe).toBeTruthy();
  });
});
