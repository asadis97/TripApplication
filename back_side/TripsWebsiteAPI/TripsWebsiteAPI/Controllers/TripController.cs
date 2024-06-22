using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using System.Security.Claims;
using TripsWebsiteAPI.Services.TripService;

namespace TripsWebsiteAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    [Authorize]
    public class TripController : ControllerBase
    {
        private ITripService _tripService;

        public TripController(ITripService tripService)
        {
            _tripService = tripService;
        }

        [HttpGet]
        public async Task<ActionResult<List<Trip>>> GetAllTrips()
        {
            List<Trip> Trips = await _tripService.GetAllTrips();
            return Ok(Trips);

        }

        [HttpGet("{id}")]
        public async Task<ActionResult<Trip>> GetTrip(string id)
        {
            try
            {
                Trip? trip = await _tripService.GetTrip(id);
                return Ok(trip);
            }
            catch (Exception e)
            {
                return NotFound(e.Message);
            }
        }

        [HttpPost]
         [Authorize(Policy = "MustBeAdmin")]
        public async Task<ActionResult> AddTrip([FromBody] Trip addedTrip)
        {
            var claims = HttpContext.User.Claims;

            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            Trip trip = await _tripService.AddTrip(addedTrip);

            return CreatedAtAction(nameof(GetTrip), new { id = trip.Id }, trip);
        }

        [HttpPut("{id}")]
        [Authorize(Policy = "MustBeAdmin")]
        public async Task<IActionResult> EditTrip(string id, [FromBody] Trip editedTrip)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            try
            {
                editedTrip.Id = id;
                await _tripService.EditTrip(editedTrip);
                return NoContent();
            }
            catch (Exception e)
            {
                return StatusCode(500, e.Message);
            }
        }

        [HttpDelete("{id}")]
         [Authorize(Policy = "MustBeAdmin")]
        public async Task<IActionResult> DeleteTrip(string id)
        {
            var claims = HttpContext.User.Claims;

            try
            {
                await _tripService.DeleteTrip(id);
                return NoContent();
            }
            catch (Exception e)
            {
                return NotFound(e.Message);
            }
        }

        [HttpPatch("{tripId}")]
        public async Task<IActionResult> LikeCard(string tripId)
        {
            string userId = HttpContext.User.FindFirstValue("id") ?? "";
            Console.WriteLine(userId);
            try
            {
                await _tripService.LikeTripAsync(tripId, userId);
                return NoContent();
            }
            catch (Exception e)
            {
                return NotFound(e.Message);
            }
        }

        [HttpGet("likes")]
        public async Task<ActionResult<List<Trip>>> GetUserLikes()
        {
            string userId = HttpContext.User.FindFirstValue("id") ?? "";
            try
            {
                List<Trip> likedTripIds = await _tripService.GetUserLikes(userId);
                return Ok(likedTripIds);
            }
            catch (Exception e)
            {
                return StatusCode(500, e.Message);
            }
        }

        [HttpGet("likesId")]
        public async Task<ActionResult<List<string>>> GetLikesUserId()
        {
            string userId = HttpContext.User.FindFirstValue("id") ?? "";
            try
            {
                List<string> likedIds = await _tripService.GetLikesUserId(userId);
                return Ok(likedIds);
            }
            catch (Exception e)
            {
                return StatusCode(500, e.Message);
            }
        }
    }
}
