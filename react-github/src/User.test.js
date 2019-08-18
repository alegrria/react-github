import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from "enzyme";
import User from './User';

beforeAll(() => {
  configure({adapter: new Adapter()});
  global.fetch = jest.fn();
});

let wrapper;

beforeEach(() => {
  wrapper = shallow(<User user="test"/>, { disableLifecycleMethods: true });
});

afterEach(() => {
  wrapper.unmount();
});

it("must render user divs when user is received", () => {
    expect(wrapper.find("div.user").exists()).toBeTruthy();
    expect(wrapper.find("div.user-name").exists()).toBeTruthy();
    expect(wrapper.find("div.user-username").exists()).toBeTruthy();
    expect(wrapper.find("div.user-avatar-url").exists()).toBeTruthy();
    expect(wrapper.find("div.user-followers").exists()).toBeTruthy();
});
