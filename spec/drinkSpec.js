describe("whatCanIDrink", function() {

        beforeEach(function() {
            drink = new whatCanIDrink;
        });

    describe("age check", function() {

        it("should exist", function() {
            expect(whatCanIDrink).toBeDefined();
        });

        it("Drink Toddy when whatCanIDrink(13)", function() {
            var result = whatCanIDrink(13)
            expect(result).toBe("Drink Toddy");
        });

        it("Drink Coke when whatCanIDrink(17)", function() {
            var result = whatCanIDrink(17)
            expect(result).toBe("Drink Coke");
        });
        
        it("Drink Beer when whatCanIDrink(18)", function() {
            var result = whatCanIDrink(18)
            expect(result).toBe("Drink Beer");
        });
        
        it("Drink Beer when whatCanIDrink(20)", function() {
            var result = whatCanIDrink(20)
            expect(result).toBe("Drink Beer");
        });

        it("Drink Whisky when whatCanIDrink(30)", function() {
            var result = whatCanIDrink(30)
            expect(result).toBe("Drink Whisky");
        });

        it("unable to return drink when whatCanIDrink(140)", function() {
            var result = whatCanIDrink(140)
            expect(result).toBe("Sorry. I can’t tell what drink because that age is incorrect!");
        });
        
        it("return drink when whatCanIDrink(17)", function() {
            var result = whatCanIDrink(10).indexOf("Drink");
            expect(result).not.toEqual(-1);

        });
    });
});