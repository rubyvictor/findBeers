import React from "react";
import { shallow } from "enzyme";
import SearchResult from "../SearchResult/SearchResult";
import fetchMock from "fetch-mock";
import SearchBar from "./SearchBar";

describe("SearchBar tests for structure", () => {
  it("should render search bar properly", () => {
    const wrapper = shallow(<SearchBar />);
    expect(wrapper.find("div")).toHaveLength(1);
    expect(wrapper.find("form")).toHaveLength(1);
    expect(wrapper.find("input")).toHaveLength(1);
    expect(wrapper.find("button")).toHaveLength(1);
  });
});

describe("SearchBar tests for handlers", () => {
  it("should be able to call handleChange", () => {
    const wrapper = shallow(<SearchBar />);
    wrapper.find("input").simulate("change", { target: { value: "a" } });
    expect(wrapper.state().searchTerm).toEqual("a");
  });

  it("should be able to call handleSummit", () => {
    const mockSearchBeers = jest.fn();
    const wrapper = shallow(<SearchBar searchBeers={mockSearchBeers} />);
    console.log(wrapper.find("button"));
    expect(wrapper.find("button")).toHaveLength(1);

    wrapper.find("button").simulate("click", { preventDefault() {} });
    expect(mockSearchBeers).toBeCalled();
  });
});
