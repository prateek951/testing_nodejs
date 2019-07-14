// import { Permissions } from '@/lib/permissions';

class User {
  // no
  constructor(details, traits = {}) {
    const { firstname, lastname } = details;
    this.firstname = firstname;
    this.lastname = lastname;
    this.traits = traits;
    this.sessionStartedAt = Date.now();
  }
  // Yes
  get name() {
    return `${this.firstname} ${this.lastname}`;
  }
  // Yes
  get isAdmin() {
    return Permissions.granted(this, 'admin');
  }
  // Yes in combination
  get currentSessionIsValid() {
    const tenMinutesInMilliseconds = 600000;
    return this.sessionStartedAt + tenMinutesInMilliseconds <= Date.now();
  }

  extendSession() {
    this.sessionStartedAt = Date.now();
  }
}

// Tests here only
// Let us create a simple test without any testing library 

const nameTest = function() {
  const userDetails = {
    firstname: 'John',
    lastname: 'Doe'
  };
  const testUser = new User(userDetails);
  console.log('Username is correct : ', testUser.name === 'John Doe');
};

nameTest();
