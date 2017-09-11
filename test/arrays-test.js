/*global describe, it */

const expect = require('chai').expect
const fs = require('fs')
const jsdom = require('mocha-jsdom')
const path = require('path')

describe('arrays', () => {
  jsdom({
    src: fs.readFileSync(path.resolve(__dirname, '..', 'arrays.js'), 'utf-8')
  })

  describe('chocolateBars', () => {
    it('is an array containing "snickers", "hundred grand", "kitkat", and "skittles"', () => {
      expect(chocolateBars).to.eql['snickers', 'hundred grand', 'kitkat', 'skittles']
    })
  })

  describe('addElementToBeginningOfArray(array, element)', () => {
    it('adds an &#96;element&#96; to the beginning of an &#96;array&#96;', () => {
      expect(addElementToBeginningOfArray([1], 'foo')).to.eql(['foo', 1])
    })

    it('does not alter &#96;array&#96;', () => {
      const array = [1]

      addElementToBeginningOfArray(array, 'foo')

      expect(array).to.eql([1])
    })
  })

  describe('destructivelyAddElementToBeginningOfArray(array, element)', () => {
    it('adds an &#96;element&#96; to the beginning of an &#96;array&#96;', () => {
      expect(destructivelyAddElementToBeginningOfArray([1], 'foo')).to.eql(['foo', 1])
    })

    it('alters &#96;array&#96;', () => {
      const array = [1]

      destructivelyAddElementToBeginningOfArray(array, 'foo')

      expect(array).to.eql(['foo', 1])
    })
  })

  describe('addElementToEndOfArray(array, element)', () => {
    it('adds an &#96;element&#96; to the end of an &#96;array&#96;', () => {
      expect(addElementToEndOfArray([1], 'foo')).to.eql([1, 'foo'])
    })

    it('does not alter &#96;array&#96;', () => {
      const array = [1]

      addElementToEndOfArray(array, 'foo')

      expect(array).to.eql(array)
    })
  })

  describe('destructivelyAddElementToEndOfArray(array, element)', () => {
    it('adds an &#96;element&#96; to the end of an &#96;array&#96;', () => {
      expect(destructivelyAddElementToEndOfArray([1], 'foo')).to.eql([1, 'foo'])
    })

    it('alters &#96;array&#96;', () => {
      const array = [1]

      destructivelyAddElementToEndOfArray(array, 'foo')

      expect(array).to.eql([1, 'foo'])
    })
  })

  describe('accessElementInArray(array, index)', () => {
    it('accesses the element in &#96;array&#96; at the given &#96;index&#96;', () => {
      expect(accessElementInArray([1, 2, 3], 2)).to.equal(3)
    })
  })
  
  describe('destructivelyRemoveElementFromBeginningOfArray(array)', ()=>{
    it('returns the &#96;array&#96; with the first element removed', () => {
      expect(destructivelyRemoveElementFromBeginningOfArray([1, 2, 3])).to.eql([2, 3])
    })
    
    it('did not make a copy of the array when removing the first element', ()=>{
      const array = [1, 2, 3];
      destructivelyRemoveElementFromBeginningOfArray(array);
      expect(array).to.eql([2, 3]);
    })
  })

  describe('removeElementFromBeginningOfArray(array)', () => {
    it('removes the first element from the &#96;array&#96;', () => {
      expect(removeElementFromBeginningOfArray([1, 2, 3])).to.eql([2, 3])
    })
  })

  describe('destructivelyRemoveElementFromEndOfArray(array)', () => {
    it('returns the &#96;array&#96; with the last element removed', () => {
      expect(destructivelyRemoveElementFromEndOfArray([1, 2, 3])).to.eql([1, 2])
    })
    
    it('did not make a copy of the array when removing the last element', ()=>{
      const array = [1, 2, 3];
      destructivelyRemoveElementFromEndOfArray(array);
      expect(array).to.eql([1, 2]);
    })
  })
  
  describe('removeElementFromEndOfArray(array)', () => {
    it('removes the last element from the &#96;array&#96;', () => {
      expect(removeElementFromEndOfArray([1, 2, 3])).to.eql([1, 2])
    })
    
    it('does not alter the original array', () => {
      const array = [1, 2, 3];
      removeElementFromEndOfArray(array);
      expect(array).to.eql([1, 2, 3]);
    })
  })
})