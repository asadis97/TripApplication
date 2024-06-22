using TripsWebsiteAPI.Data.UserRepositories;
using TripsWebsiteAPI.Exceptions;
using TripsWebsiteAPI.Helpers;

namespace TripsWebsiteAPI.Services.UserService
{
    public class UserService : IUserService
    {
        private readonly IUserRepository _userRepository;

        public UserService(IUserRepository userRepository)
        {
            _userRepository = userRepository;
        }

        public async Task<User> AddUser(User newUser)
        {
            bool isSucsess = await _userRepository.AddUser(newUser);
            if (isSucsess == false)
            {
                throw new UserAlreadyExistsException(newUser.Login.Email);
                ;
            }
            return newUser;
        }

        public async Task DeleteUser(string id)
        {
            bool isSucsess = await _userRepository.DeleteUser(id);
            if (isSucsess == false)
            {
                throw new NotFoundException(id);
            }
        }

        public async Task<List<User>> GetAllUsers()
        {
            return await _userRepository.GetAllUsers();
        }

        public async Task<User> GetUser(string id)
        {
            var user = await _userRepository.GetUser(id);
            if (user == null)
            {
                throw new NotFoundException(id);
            }
            return user;
        }

        public async Task<User> Login(LoginModel loginModel)
        {
            var user = await _userRepository.GetUserByEmail(loginModel.Email);
            if (user == null || !PasswordHelper.VerifyPassword(user.Login.Password, loginModel.Password))
            {
                throw new AuthenticationException();
            }
            return user;
        }
    }
}
