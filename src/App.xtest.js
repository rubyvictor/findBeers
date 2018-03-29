// import React from "react";
// import ReactDOM from "react-dom";
// import { shallow } from "enzyme";
// import App from "./App";
// import SearchResult from "../src/SearchResult/SearchResult";
// import fetchMock from "fetch-mock";

// let myMock;

// beforeAll(() => {
//   myMock = fetchMock
//     .sandbox()
//     .mock("https://api.punkapi.com/v2/beers?page=1&per_page=1", 200);
//   expect(myMock.called("https://api.punkapi.com/v2/beers?page=1&per_page=1")).to
//     .be.true;
// });

// // it("renders without crashing", () => {
// //   const div = document.createElement("div");
// //   ReactDOM.render(<App />, div);
// //   ReactDOM.unmountComponentAtNode(div);
// // });

// it("should test for structural elements and components", () => {
//   const wrapper = shallow(<SearchResult />);
//   console.log(wrapper.find("div"));
//   expect(wrapper.find("div")).toHaveLength(1);
//   expect(wrapper.find(SearchResult)).toHaveLength(1);
// });
