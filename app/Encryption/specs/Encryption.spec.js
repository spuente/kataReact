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
    it('should have original alphabet and alphabet for hint 14 as state', () => {
      expect(instance.state).toEqual({
        alphabetForHint: 'OPQRSTUVWXYZABCDEFGHIJKLMN',
        originalAlphabet: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
      });
    });

    it('should display decrypted result for PCAPO on a div', () => {
      expect(component.find('.decryptedResult').text()).toBe('BOMBA');
    });
  });

  describe('decryptWithAlphabet', () => {
    it('should decrypt POHAOB using the alphabets from the state', () => {
      let encryptedText = 'POHAOB';
      let expectedDecryptedText = 'BATMAN';

      let decryptedText = instance.decryptWithAlphabet(encryptedText);

      expect(decryptedText).toBe(expectedDecryptedText);
    });

    it('should decrypt VCZO using the alphabets from the state', () => {
      let encryptedText = 'VCZO';
      let expectedDecryptedText = 'HOLA';

      let decryptedText = instance.decryptWithAlphabet(encryptedText);

      expect(decryptedText).toBe(expectedDecryptedText);
    });
  });
});
