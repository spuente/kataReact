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
  });
});
