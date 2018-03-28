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
