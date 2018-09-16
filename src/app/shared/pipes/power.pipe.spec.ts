import { PowerPipe } from './power.pipe';

fdescribe('PowerPipe test suite', () => {
  it('create an instance test case ', () => {
    const pipe = new PowerPipe();
    expect(pipe).toBeTruthy();
  });

  it('power pipe test case ', () => {
    const pipe = new PowerPipe();
    expect(pipe.transform(2, 3)).toBe(8);
  });


  it('power pipe default  ', () => {
    const pipe = new PowerPipe();
    expect(pipe.transform(2)).toBe(2);
  });
});
