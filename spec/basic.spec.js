/**
 * Created by appel on 1/6/2017.
 */

describe("Basic generators", function(){

const sillyObj = {title: "Hello", desc: "world", import: "midlin"}

describe("get props returns values", () => {

    for(const [key,value] of getProps(sillyObj)){
       it("key not undefined: " + `${key}`, () => { expect(key).toBeDefined(); });
       it("value not undefined: " + `${value}`, () => { expect(value).toBeDefined(); })
    }
})

describe("let's check out the Generator obj", () =>{
    const gen = getProps(sillyObj);

    for (let prop of gen) {
        it(`${prop.key}`, ()=>{expect(true).toBeTruthy()});
        it(`${prop.valueOf()}`, ()=>{expect(true).toBeTruthy()});
    }

    it("proto: "+Object.getPrototypeOf(gen), ()=>{expect(true).toBeTruthy()});
    it("type: " +typeof(gen) , ()=>{expect(true).toBeTruthy()});
})

})