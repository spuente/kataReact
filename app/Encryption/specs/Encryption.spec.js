import React from 'react';
import {shallow} from 'enzyme';
import Encryption from '../Encryption';

describe('Encryption', () => {
  let component;
  let instance;

  beforeEach(() => {
    component = shallow(<Encryption/>);
    instance = component.instance();
  });

  describe('on instance', () => {
    it('should have alphabet for hint 14 as state', () => {
      expect(instance.state).toEqual({
        alphabet: 'OPQRSTUVWXYZABCDEFGHIJKLMN'
      });
    });
  });
});
