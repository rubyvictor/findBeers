import React from "react";
import { shallow } from "enzyme";
import { componentDidMount } from "../SearchResult/SearchResult";
import BeerCard from "../BeerCard/BeerCard";
import nock from "nock";
import fetchMock from "fetch-mock";

describe("ComponentDidMount() http operation", () => {
  it("was able to do a simple http GET request via fetch", () => {
    const myMock = fetchMock.mock("https://api.punkapi.com/v2/beers?", "GET", {
      status: 200,
      body: {
        name: "ABC stout",
        description: "local beer",
        imageUrl: "abc.com",
        food_pair: "great with seafood"
      }
    });
  });
});

describe("SearchResult should load properly", () => {
  it("should render SearchResult properly", () => {
    const wrapper = shallow(<BeerCard />);
    expect(wrapper.find(BeerCard)).toHaveLength(0);
    expect(wrapper.find("imageUrl")).toHaveLength(0);
    expect(wrapper.find("name")).toHaveLength(0);
    expect(wrapper.find("description")).toHaveLength(0);
    expect(wrapper.find("food_pairing")).toHaveLength(0);
  });
});
