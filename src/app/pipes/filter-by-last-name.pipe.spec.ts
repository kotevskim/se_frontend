import { FilterByLastNamePipe } from './filter-by-name.pipe';

describe('FilterByLastNamePipe', () => {
  it('create an instance', () => {
    const pipe = new FilterByLastNamePipe();
    expect(pipe).toBeTruthy();
  });
});
