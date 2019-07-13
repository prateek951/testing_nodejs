const { addNumbers, additionCB, pr } = require('./addNumbers');

describe('addNumbers', () => {
  describe('addition of two numbers', () => {
    it('should return 9 for 4 + 5', () => {
      expect(addNumbers(4, 5)).toEqual(9);
    });
    it('should throw an error if arguments are of invalid type', () => {
      expect(addNumbers('prateek', 4)).toThrow('Invalid arguments');
    });
  });

  // Addition of numbers with callback
  describe('additionCB', () => {
    it('should return 20 for 11+9', done => {
      additionCB(11, 9, (error, sum) => {
        expect(error).toEqual(null);
        expect(sum).toEqual(20);
        done();
      });
    });
  });

  // Promise based addition
  describe('addition promise', () => {
    describe('Using then and catch', () => {
      it('should return 89 for 72 + 17', done => {
        pr(72, 17).then(sum => {
          expect(sum).toEqual(89);
          done(); //To prevent Jest from throwing timeout exception
        });
      });
      // Error case
      it('should catch an error if any of arguments are of invalid type', done => {
        pr(2, '3')
          .then(sum => {
            expect(sum).toEqual(5);
            done();
          })
          .catch(error => {
            expect(error).toEqual('Invalid arguments');
            done();
          });
      });
    });

    // Using async and awaits
    describe('Using async await', () => {
      // No need to use done in case of async await
      // Async await works on the concept of generators, it knows when to pause and complete
      it('should return 3 for 1 + 2', async () => {
        const sum = await pr(1, 2);
        expect(sum).toEqual(9); //Deliberately breaking the test here
      });

      // Lets work on an error case also
      it('should catch an error if arguments are invalid', async () => {
        try {
          const sum = await pr(1, '2');
          expect(sum).toEqual(3);
        } catch (error) {
          console.error(error);
          expect(error).toEqual('Invalid arguments');
        }
      });
    });
  });
});
