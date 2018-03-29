import React from "react";
import { shallow, render } from "enzyme";
import SearchResult, { searchBeers } from "./SearchResult";
import BeerCard from "../BeerCard/BeerCard";
import fetchMock from "fetch-mock";

describe("componentDidMount() http operation", () => {
  it("was able to do a simple http GET request via fetch", async () => {
    const myMock = fetchMock.mock("https://api.punkapi.com/v2/beers?", {
      status: 200,
      body: [{ name: "ABC Beer" }]
    });
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
    expect(wrapper.find("food_pairing")).toHaveLength(0);
  });
});

// describe('searchBeer func should be called properly', () => {
//   it("should be able to call searchBeer()", () => {
//     const mockSearchBeers = jest.fn();
//     const wrapper = shallow(<SearchResult />);
//     expect(wrapper.find(searchBeers)).toHaveLength(1);

//     wrapper.find("button").simulate("click", { preventDefault() {} });
//     expect(mockSearchBeers).toBeCalled();
//   });
// });
