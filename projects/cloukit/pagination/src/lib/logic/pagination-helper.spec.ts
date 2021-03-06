/*!
 * @license MIT
 * Copyright (c) 2017 Bernhard Grünewaldt - codeclou.io
 * https://github.com/cloukit/legal
 */
import { calculatePaginationItems, createFiller } from './pagination-helper';
import { PaginationItem } from '../pagination.model';

describe('pagination-helper', () => {

  it('should be possible to calculate valid pagination for total=7 and page=2 (CASE 1)', async () => {
    const result = calculatePaginationItems(7, 2);
    expect(Array.isArray(result)).toBeTruthy();
    expect(result.length).toEqual(7);
    expect(result[0]).toEqual(new PaginationItem(1, false, false, '1'));
    expect(result[1]).toEqual(new PaginationItem(2, true, false, '2'));
    expect(result[2]).toEqual(new PaginationItem(3, false, false, '3'));
    expect(result[3]).toEqual(new PaginationItem(4, false, false, '4'));
    expect(result[4]).toEqual(new PaginationItem(5, false, false, '5'));
    expect(result[5]).toEqual(new PaginationItem(6, false, false, '6'));
    expect(result[6]).toEqual(new PaginationItem(7, false, false, '7'));
  });

  it('should be possible to calculate valid pagination for total=5 and page=2 (CASE 1)', async () => {
    const result = calculatePaginationItems(5, 2);
    expect(Array.isArray(result)).toBeTruthy();
    expect(result.length).toEqual(5);
    expect(result[0]).toEqual(new PaginationItem(1, false, false, '1'));
    expect(result[1]).toEqual(new PaginationItem(2, true, false, '2'));
    expect(result[2]).toEqual(new PaginationItem(3, false, false, '3'));
    expect(result[3]).toEqual(new PaginationItem(4, false, false, '4'));
    expect(result[4]).toEqual(new PaginationItem(5, false, false, '5'));
  });

  it('should be possible to calculate valid pagination for total=11 and page=3 (CASE 2)', async () => {
    const result = calculatePaginationItems(11, 3);
    expect(Array.isArray(result)).toBeTruthy();
    expect(result.length).toEqual(7);
    expect(result[0]).toEqual(new PaginationItem(1, false, false, '1'));
    expect(result[1]).toEqual(new PaginationItem(2, false, false, '2'));
    expect(result[2]).toEqual(new PaginationItem(3, true, false, '3'));
    expect(result[3]).toEqual(new PaginationItem(4, false, false, '4'));
    expect(result[4]).toEqual(new PaginationItem(5, false, false, '5'));
    expect(result[5]).toEqual(createFiller());
    expect(result[6]).toEqual(new PaginationItem(11, false, false, '11'));
  });

  it('should be possible to calculate valid pagination for total=50 and page=47 (CASE 3)', async () => {
    const result = calculatePaginationItems(50, 47);
    expect(Array.isArray(result)).toBeTruthy();
    expect(result.length).toEqual(7);
    expect(result[0]).toEqual(new PaginationItem(1, false, false, '1'));
    expect(result[1]).toEqual(createFiller());
    expect(result[2]).toEqual(new PaginationItem(46, false, false, '46'));
    expect(result[3]).toEqual(new PaginationItem(47, true, false, '47'));
    expect(result[4]).toEqual(new PaginationItem(48, false, false, '48'));
    expect(result[5]).toEqual(new PaginationItem(49, false, false, '49'));
    expect(result[6]).toEqual(new PaginationItem(50, false, false, '50'));
  });

  it('should be possible to calculate valid pagination for total=50 and page=48 (CASE 3)', async () => {
    const result = calculatePaginationItems(50, 48);
    expect(Array.isArray(result)).toBeTruthy();
    expect(result.length).toEqual(7);
    expect(result[0]).toEqual(new PaginationItem(1, false, false, '1'));
    expect(result[1]).toEqual(createFiller());
    expect(result[2]).toEqual(new PaginationItem(46, false, false, '46'));
    expect(result[3]).toEqual(new PaginationItem(47, false, false, '47'));
    expect(result[4]).toEqual(new PaginationItem(48, true, false, '48'));
    expect(result[5]).toEqual(new PaginationItem(49, false, false, '49'));
    expect(result[6]).toEqual(new PaginationItem(50, false, false, '50'));
  });

  it('should be possible to calculate valid pagination for total=90 and page=50 (CASE 4)', async () => {
    const result = calculatePaginationItems(90, 50);
    expect(Array.isArray(result)).toBeTruthy();
    expect(result.length).toEqual(7);
    expect(result[0]).toEqual(new PaginationItem(1, false, false, '1'));
    expect(result[1]).toEqual(createFiller());
    expect(result[2]).toEqual(new PaginationItem(49, false, false, '49'));
    expect(result[3]).toEqual(new PaginationItem(50, true, false, '50'));
    expect(result[4]).toEqual(new PaginationItem(51, false, false, '51'));
    expect(result[5]).toEqual(createFiller());
    expect(result[6]).toEqual(new PaginationItem(90, false, false, '90'));
  });

});
