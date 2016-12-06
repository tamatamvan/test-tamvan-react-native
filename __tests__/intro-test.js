'use strict'

import 'react-native';
import React from 'react';
import Intro from '../intro';
// import {shallow} from 'enzyme';

import renderer from 'react-test-renderer';

it('render correctly', () => {
  const tree = renderer.create(
    <Intro />
  ).toJSON();
  expect(tree).toMatchSnapshot();
})

it('renders the ActivityIndicator component', () => {
  const ActivityIndicator = require('ActivityIndicator');
  const tree = renderer.create(
    <ActivityIndicator animating={true} size="small" />
  ).toJSON();
  expect(tree).toMatchSnapshot();
})

it('renders the Image component', done => {
  const Image = require('Image');
  Image.getSize('path.jpg', (width, height) => {
    const tree = renderer.create(<Image style={{width, height}} />).toJSON();
    expect(tree).toMatchSnapshot();
    done();
  })
})

it('renders the ListView component', () => {
  const ListView = require('ListView');
  const Text = require('Text');
  const dataSource = new ListView.DataSource({
    rowHasChanged: (r1, r2) => r1 !== r2
  }).cloneWithRows(['apple', 'banana', 'kiwi']);
  const tree = renderer.create(
    <ListView
      dataSource={dataSource}
      renderRow={(rowData) => <Text>{rowData}</Text>}
      />
  ).toJSON()
  expect(tree).toMatchSnapshot();
})
