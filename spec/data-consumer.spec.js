/**
 * Created by appel on 1/7/2017.
 */
describe("using generators as data consumers", () => {

    describe("Using a gen to add to a cache", () => {
        const rtnArr = [];
        const gen = AddToCache(rtnArr);
        gen.next(null);
        gen.next({id: 1});
        gen.next({id: 2});
        gen.next({id: 3});
        const returnOfRtnArr = gen.return();

        it("expect 3 items in rtnArr", () => { expect(rtnArr.length).toBe(3)});
    });

})