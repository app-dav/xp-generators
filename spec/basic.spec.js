/**
 * Created by appel on 1/6/2017.
 */

describe("Basic generators", function(){

describe("first test", function() {
    it("should pass", function() {expect(true).toBe(true)})
})


const sillyObj = {title: "Hello", desc: "world", import: "midlin"}

describe("get props", () => {

    for(const [key,value] of getProps(sillyObj)){
       it("key not undefined: " + `${key}`, () => { expect(key).toBeDefined(); });
       it("value not undefined: " + `${value}`, () => { expect(value).toBeDefined(); })
    }
})



})