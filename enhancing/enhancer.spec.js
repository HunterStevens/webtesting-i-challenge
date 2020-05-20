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
        test('if it will decrease the enhancement by 1 and durability by 10 if enhancement is 16 or more', () =>{
            const initial = {
                name:'sword',
                durability:80,
                enhancement:17
            };
            const shouldBE = {
                name:'sword',
                durability:70,
                enhancement:16
            };
            expect(enhancer.fail(initial)).toStrictEqual(shouldBE)
        })
        test('if it will only decrease durability by 10 if enhancement is 15', () =>{
            const initial = {
                name:'sword',
                durability:50,
                enhancement:15
            };
            const shouldBE = {
                name:'sword',
                durability:40,
                enhancement:15
            };
            expect(enhancer.fail(initial)).toStrictEqual(shouldBE)
        })
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
        test('if it will return the item untouched if it is already at max durability', () =>{
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
            expect(enhancer.repair(initial)).toStrictEqual(shouldBE)
        })
    })
})