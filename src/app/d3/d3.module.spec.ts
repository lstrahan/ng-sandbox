import { D3Module } from './d3.module';

describe('D3Module', () => {
  let d3Module: D3Module;

  beforeEach(() => {
    d3Module = new D3Module();
  });

  it('should create an instance', () => {
    expect(d3Module).toBeTruthy();
  });
});
