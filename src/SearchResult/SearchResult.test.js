import React from "react";
import { shallow } from "enzyme";
import SearchResult from "../SearchResult/SearchResult";
import BeerCard from "../BeerCard/BeerCard";
import nock from "nock";
import fetchMock from "fetch-mock";

describe("ComponentDidMount() http operation", () => {
  it("managed to fetch data from the API", async () => {
    const fetcher = nock("https://api.punkapi.com/v2/beers?page=1&per_page=1")
      .get("beers?page=1&per_page=1")
      .reply(200, {
        name: "Buzz",
        description:
          "A light, crisp and bitter IPA brewed with English and American hops. A small batch brewed only once.",
        image_url: "https://images.punkapi.com/v2/keg.png",
        food_pairing: [
          "Spicy chicken tikka masala",
          "Grilled chicken quesadilla",
          "Caramel toffee cake"
        ]
      });
    fetcher.isDone();
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


