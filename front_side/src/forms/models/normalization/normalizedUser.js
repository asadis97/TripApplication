
const normalizedUser = (user) => ({
    name: {
        FirstName: user.FirstName,
        LastName: user.LastName,
    },
    Login: {
        Email: user.email,
        Password: user.password,
    },
    IsAdmin: false,
})

export default normalizedUser;