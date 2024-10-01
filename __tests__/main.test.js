
const changeText = require('../main');

describe("Mina test", () => {

test("Change text to uppercase 1", () => {
    
    expect(changeText("välkommen")).toBe("VÄLKOMMEN");
});
test("Change text to uppercase 2", () => {
    
    expect(changeText("det var så lite")).toBe("det var så LITE");
});
});