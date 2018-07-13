import { CollectionAddModule } from './collection-add.module';

describe('CollectionAddModule', () => {
  let collectionAddModule: CollectionAddModule;

  beforeEach(() => {
    collectionAddModule = new CollectionAddModule();
  });

  it('should create an instance', () => {
    expect(collectionAddModule).toBeTruthy();
  });
});
