const enhancer = require('./enhancer.js');
// test away!
describe('enhancer', () =>{
    describe('succeed()', ()=>{
        test('if the enhancement will work with an item that has not maxed its enhancement', () =>{
            const initial = {
                name:'sword',
                durability:100,
                enhancement:10
            };
            const shouldBE = {
                name:'sword',
                durability:100,
                enhancement:11
            };
            expect(enhancer.succeed(initial)).toStrictEqual(shouldBE)
        })
        test('if it will return the item untouched if it is already at max enhancement', () =>{
            const initial = {
                name:'sword',
                durability:100,
                enhancement:20
            };
            const shouldBE = {
                name:'sword',
                durability:100,
                enhancement:20
            };
            expect(enhancer.succeed(initial)).toStrictEqual(shouldBE)
        })
    })
    describe('fail()', ()=>{

    })
    describe('get()', ()=>{

    })
    describe('repair()', ()=>{
        test('if it will restore durability to one hundred with item less than 100', () =>{
            const initial = {
                name:'sword',
                durability:50,
                enhancement:20
            };
            const shouldBE = {
                name:'sword',
                durability:100,
                enhancement:20
            }
            expect(enhancer.repair(initial)).toStrictEqual(shouldBE);

        })
    })
})