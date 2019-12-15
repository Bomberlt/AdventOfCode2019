describe('day2', () => {
  describe('opcode1', () => {
    it('true', () => {
      expect(true).toBe(true);
    });
    // it.each`
    //   input1 | input2 | output | arr             | expectedOutput
    //   ${1}   | ${2}   | ${3}   | ${[0, 0, 0, 0]} | ${0}
    //   ${1}   | ${2}   | ${3}   | ${[1, 1, 1, 1]} | ${2}
    //   ${1}   | ${2}   | ${3}   | ${[1, 0, 1, 1]} | ${1}
    //   ${1}   | ${2}   | ${3}   | ${[1, 2, 3, 1]} | ${5}
    // `(
    //   '$input1 | $input2 | $output | $arr changes $output `rd to $expectedOutput',
    //   ({ input1, input2, output, arr, expectedOutput }) => {
    //     const result = opcode1(input1, input2, output, arr);

    //     expect(result[output]).toBe(expectedOutput);
    //   }
    // );
  });
});
