'use strict';

/* Util jasmine tests */


describe("Utils", function() {
    it("Removes item from array", function() {
        var array = [ '1', 'two', '3' , '4', 'five'];
        var expected = [ '1', '3', '4', 'five' ];

        array.remove('two');
        expect(array).toEqual(expected);

        expected = [ '3', '4', 'five' ];
        array.remove('1');
        expect(array).toEqual(expected);

        expected = [ '3', '4'];
        array.remove('five');
        expect(array).toEqual(expected);
    });
});