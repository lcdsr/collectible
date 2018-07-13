import { CollectionDetailModule } from './collection-detail.module';

describe('CollectionDetailModule', () => {
  let collectionDetailModule: CollectionDetailModule;

  beforeEach(() => {
    collectionDetailModule = new CollectionDetailModule();
  });

  it('should create an instance', () => {
    expect(collectionDetailModule).toBeTruthy();
  });
});
