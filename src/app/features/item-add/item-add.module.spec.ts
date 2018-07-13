import { ItemAddModule } from './item-add.module';

describe('ItemAddModule', () => {
  let itemAddModule: ItemAddModule;

  beforeEach(() => {
    itemAddModule = new ItemAddModule();
  });

  it('should create an instance', () => {
    expect(itemAddModule).toBeTruthy();
  });
});
