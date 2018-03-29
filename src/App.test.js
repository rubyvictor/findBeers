import React from "react";
import ReactDOM from "react-dom";
import { shallow } from "enzyme";
import App from "./App";
import SearchResult from "../src/SearchResult/SearchResult";
import fetchMock from "fetch-mock";

it("renders without crashing", () => {
  const myMock = fetchMock.mock("https://api.punkapi.com/v2/beers?", {
    status: 200,
    body: [{ name: "ABC Beer" }]
  });

  const div = document.createElement("div");
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});
