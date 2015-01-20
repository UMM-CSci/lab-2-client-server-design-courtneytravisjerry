
describe('testing basic functions', function(){
    it('should return the correct string length', function(){
        expect(stringLength("kittens")).toEqual(7);
    });

    it('returnKittens should return kittens', function(){
        expect(returnKittens()).toBe("kittens");
    });

    it('this test should fail!', function(){
        expect(returnKittens()).toBe("Not Kittens!");
    });
});

