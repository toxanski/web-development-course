import {listingElements, storeElements, addNewElements, addToStoreElements} from './listing-store';

describe('add new elements in array', () => {
  beforeEach(() => {
    listingElements[0] = 'apple';
    listingElements[1] = 'orange';
    storeElements.length = 0;
  })

  test('should addNewElements add element', () => {
    addNewElements('blueberry');
    expect(listingElements).toContain('blueberry');
    expect(listingElements).toHaveLength(3);
    expect(listingElements[0]).toBe('apple');
  });
  
  test('addToStoreElements should add element to listingElements and remove from storeElements', () => {
    addToStoreElements('apple');
    expect(storeElements.length).toBeGreaterThan(0);
    expect(listingElements).toHaveLength(2);
    expect(storeElements).toContain('apple');
  });
  
});