import { IndexPageModule } from './index-page.module';

describe('IndexPageModule', () => {
  let indexPageModule: IndexPageModule;

  beforeEach(() => {
    indexPageModule = new IndexPageModule();
  });

  it('should create an instance', () => {
    expect(indexPageModule).toBeTruthy();
  });
});
