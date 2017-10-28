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

    it('should display 25 div items to hold all alphabet entries starting from b to z', () => {
        expect(component.find('.alphabetEntry').length).toBe(25);
    });

    it('should display index number for each alphabet entry', () => {
        expect(component.find('.indexNumber').length).toBe(25);

        expect(component.find('.indexNumber').at(0).text()).toBe('1');
        expect(component.find('.indexNumber').at(2).text()).toBe('3');
        expect(component.find('.indexNumber').at(15).text()).toBe('16');
        expect(component.find('.indexNumber').at(24).text()).toBe('25');
    });

    it('should display text of the alphabet starting with each letter from b to z for each alphabet entry', () => {
        expect(component.find('.alphabet').length).toBe(25);

        expect(component.find('.alphabet').at(0).text()).toBe('bcdefghijklmnopqrstuvwxyza');
        expect(component.find('.alphabet').at(1).text()).toBe('cdefghijklmnopqrstuvwxyzab');
        expect(component.find('.alphabet').at(14).text()).toBe('pqrstuvwxyzabcdefghijklmno');
        expect(component.find('.alphabet').at(24).text()).toBe('zabcdefghijklmnopqrstuvwxy');
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
