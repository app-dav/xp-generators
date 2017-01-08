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

    describe("GetArray returns 3 and done with .next()", () => {
        const arr = GetArray(3);

       // console.log(arr); console.log(arr.next().value);console.log(arr.next().value);console.log(arr.next().value);console.log(arr.next().value);
        it("first is item 0", () => { expect(arr.next().value).toBe("Item 0"); });
        it("second is item 1", () => { expect(arr.next().value).toBe("Item 1"); });
        it("third is item 2", () => { expect(arr.next().value).toBe("Item 2"); });
        it("this time the value should be undefined & the done should be true", () => {
            const item = arr.next();
            expect(item.value).toBeUndefined();
            expect(item.done).toBe(true);
        });
    })

    describe("GetArray as a spread operator functions similarly", () => {
        const arr = [...GetArray(3)];

        it("first is item 0", () => { expect(arr[0]).toBe("Item 0"); });
        it("second is item 1", () => { expect(arr[1]).toBe("Item 1"); });
        it("third is item 2", () => { expect(arr[2]).toBe("Item 2"); });
        it("wiht the spread op, we don't get the undefined object", () => {
            expect(arr[3]).toBeUndefined();
        });

    })

})