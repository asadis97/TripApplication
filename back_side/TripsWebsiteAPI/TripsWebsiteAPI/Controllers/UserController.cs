using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using TripsWebsiteAPI.Helpers;
using TripsWebsiteAPI.Services.UserService;


namespace TripsWebsiteAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UserController : ControllerBase
    {
        private IUserService _userService;

        public UserController(IUserService userService)
        {
            _userService = userService;
        }

        [HttpGet]
        [Authorize(Policy = "MustBeAdmin")]
        public async Task<ActionResult<List<User>>> GetAllUsers()
        {
            List<User> users = await _userService.GetAllUsers();
            return Ok(users);
        }

        [HttpGet("{id}")]
        [Authorize]
        public async Task<ActionResult<User>> GetUser(string id)
        {
            try
            {
                var user = await _userService.GetUser(id);
                return Ok(user);
            }
            catch (Exception e)
            {
                return NotFound(e.Message);
            }
        }

        [HttpPost]
        public async Task<ActionResult<List<User>>> AddUser([FromBody] User newUser)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }
            try
            {
                object user = await _userService.AddUser(newUser);
                return CreatedAtAction(nameof(GetUser), new { Id = newUser.Id }, user);
            }
            catch (Exception ex)
            {
                return Conflict(ex.Message);
            }
        }

        [HttpDelete("{id}")]
        [Authorize(Policy = "MustBeAdmin")]
        public async Task<ActionResult<List<User>>> DeleteUser(string id)
        {
            try
            {
                await _userService.DeleteUser(id);
            }
            catch (Exception e)
            {
                return NotFound(e.Message);
            }
            return NoContent();
        }

        [HttpPost("login")]
        public async Task<IActionResult> Login(LoginModel loginModel)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }
            try
            {
                User user = await _userService.Login(loginModel);
                string token = TokenHelper.GenerateAuthToken(user);
                return Ok(token);
            }
            catch (Exception ex)
            {
                return Unauthorized(ex.Message);
            }
        }
    }
}
