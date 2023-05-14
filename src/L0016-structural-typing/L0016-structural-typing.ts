// Structural types
type VerifyUserFn = (user: User, receivedValue: User) => boolean;
type User = { username: string; password: string };

const verifyUser: VerifyUserFn = (user, receivedValue) => {
    return user.username === receivedValue.username && user.password === receivedValue.password;
};

const bdUser = { username: 'Jason', password: '89f739h4' };
const receivedValue = { username: 'Jason', password: '89f739h4', permissions: '' };

const loggedIn = verifyUser(bdUser, receivedValue);

console.log(loggedIn ? `${receivedValue.username} is logged in.` : `${receivedValue.username} is not logged in.`);
