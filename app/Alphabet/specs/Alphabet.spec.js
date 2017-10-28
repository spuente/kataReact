import React from 'react';
import {shallow} from 'enzyme';
import Alphabet from '../Alphabet';

describe('Alphabet', () => {
  let component;
  let instance;

  beforeEach(() => {
    component = shallow(<Alphabet/>);
    instance = component.instance();
  });

  describe('on instance', () => {
    it('should defined state', () => {
      // let letters = [...'abcdefghijklmnopqrstuvwxyz'];
      let letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
      expect(instance.state).toEqual({
        letters: letters
      });
    });

    it('should display 25 list items to hold all alphabet entries starting from b to z', () => {
        expect(component.find('li').length).toBe(25);
    });

    describe('alphabetStartingWithIndex', () => {
      it('returns alphabet starting from first letter when index passed is 0', () => {
        let alphabet = instance.alphabetStartingWithIndex(0);
        expect(alphabet).toEqual('abcdefghijklmnopqrstuvwxyz');
      });

      it('returns alphabet starting from letter c when index passed is 2', () => {
        let alphabet = instance.alphabetStartingWithIndex(2);
        expect(alphabet).toEqual('cdefghijklmnopqrstuvwxyzab');
      });

      it('returns alphabet starting from letter p when index passed is 15', () => {
        let alphabet = instance.alphabetStartingWithIndex(15);
        expect(alphabet).toEqual('pqrstuvwxyzabcdefghijklmno');
      });

      it('returns alphabet starting from last letter when index passed is 25', () => {
        let alphabet = instance.alphabetStartingWithIndex(25);
        expect(alphabet).toEqual('zabcdefghijklmnopqrstuvwxy');
      });
    });
  });
});
