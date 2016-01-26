import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';
import FieldType from '../lib/FieldType.jsx';

describe('FieldType', function () {
  const renderFieldType = function ({ name, type, value, defaultValue, handleChange }) {
    return ReactDOM.findDOMNode(TestUtils.renderIntoDocument(<FieldType
      key={Date.now()}
      name={name}
      type={type}
      defaultValue={defaultValue}
      onChange={handleChange} />));
  };

  it('should render input type text for `string`', function () {
    let domNode = renderFieldType({ type: 'string', name: 'StringField', defaultValue: 'My string' });
    let element = domNode.querySelector('textarea');
    expect(element.nodeName).toEqual('TEXTAREA');
  });

  it('should render input type number for `number`', function () {
    let domNode = renderFieldType({ type: 'number', name: 'NumberField', defaultValue: 123 });
    let input = domNode.querySelector('[type="number"]');
    expect(input.nodeName).toEqual('INPUT');
  });

  it('should render input type checkbox for `bool`', function () {
    let domNode = renderFieldType({ type: 'bool', name: 'StringField', defaultValue: true });
    let input = domNode.querySelector('.attelier-toggle');
    expect(input.nodeName).toEqual('DIV');
  });

  it('should render input type select for `array`', function () {
    let domNode = renderFieldType({ type: 'array', name: 'StringField', defaultValue: ['a', 'b', 'c'] });
    let input = domNode.querySelector('select');
    console.log(input.nodeName)
    expect(input.nodeName).toEqual('SELECT');
  });
});
