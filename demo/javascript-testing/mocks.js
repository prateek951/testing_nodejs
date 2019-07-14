// import Permissions from '@/libs/permissions';
let args = [];

// Mock the permissions to have our very own version of it 
// Mock means an alternative version of a dependency 

const Permissions = {
  granted(...params) {
    args.push([...params]);
  }
};

class User {}

const user = new User();

function isUserAdmin() {
  return Permissions.granted(user, 'admin');
}

const test = function() {
  isUserAdmin();
  return JSON.stringify(args[0]) === JSON.stringify([user, 'admin']);
};
console.log(test());
