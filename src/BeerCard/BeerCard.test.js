import React from "react";
import { shallow } from "enzyme";
import BeerCard from "./BeerCard";

describe('BeerCard', () => {
    it('should load BeerCard component properly', () => {
        const wrapper = shallow(<BeerCard />)
        expect(wrapper.find("div")).toHaveLength(1);
        expect(wrapper.find("h1")).toHaveLength(1);
        expect(wrapper.find("h2")).toHaveLength(1);
        expect(wrapper.find("h3")).toHaveLength(1);

    });

    it('should have imageUrl of "someImageUrl.com"', () => {
        const wrapper = shallow(<BeerCard imageUrl="someImageUrl.com" name="a beer" description="Some beer description" food_pairing="good for meat"/>)
       
        expect(wrapper.find("img").props().src).toEqual("someImageUrl.com");
        expect(wrapper.find("h1.beerCardTitles").props().children).toEqual("a beer");
        expect(wrapper.find("h2.beerCardDescriptions").props().children).toEqual("Some beer description");
        expect(wrapper.find("h3.beerCardFoodPairs").props().children).toEqual("good for meat");


    });
});

