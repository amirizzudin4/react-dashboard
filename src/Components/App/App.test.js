import React from "react";
import { configure, shallow } from "enzyme";
import App from "./App";
import Adapter from "enzyme-adapter-react-16";

configure({ adapter: new Adapter() });

describe("App", () => {
    it("should work", () => {
        shallow(<App />);
    });
});