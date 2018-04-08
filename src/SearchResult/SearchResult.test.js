import React from "react";
import { shallow, render } from "enzyme";
import SearchResult, { searchBeers } from "./SearchResult";
import BeerCard from "../BeerCard/BeerCard";
import fetchMock from "fetch-mock";
import SearchBar from "../SearchBar/SearchBar";

describe("componentDidMount() http operation", () => {
  it("was able to do a simple http GET request via fetch", async () => {
    const myMock = fetchMock.mock(
      "https://api.punkapi.com/v2/beers?page=3&per_page=80",
      {
        status: 200,
        body: [{ name: "ABC Beer" }]
      }
    );
    const wrapper = shallow(<SearchResult />);
    await wrapper.instance().componentDidMount();
    expect(wrapper.instance().state.beers).toEqual([{ name: "ABC Beer" }]);
  });
});

describe("SearchResult should load properly", () => {
  it("should render SearchResult properly", () => {
    const wrapper = shallow(<BeerCard />);
    expect(wrapper.find(BeerCard)).toHaveLength(0);
    expect(wrapper.find("imageUrl")).toHaveLength(0);
    expect(wrapper.find("name")).toHaveLength(0);
    expect(wrapper.find("description")).toHaveLength(0);
    expect(wrapper.find("foodPairing")).toHaveLength(0);
  });
});

describe("searchBeer func test", () => {
  it("is able to set State if a valid searchTerm is supplied and returns a beer", () => {
    const wrapper = shallow(<SearchResult />);

    wrapper.setState({ filterBeers: [{ name: "ABC beer" }] });
    expect(wrapper.state().filterBeers).toHaveLength(1);
  });

  it("should filter the beers array", async () => {
    const wrapper = shallow(<SearchResult />);
    wrapper.setState({ beers: [{ name: "ABC beer" }] });
    await wrapper.instance().searchBeers("ABC beer");

    expect(wrapper.instance().state.beers).toEqual([{ name: "ABC beer" }]);
  });
});
