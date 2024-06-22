namespace TripsWebsiteAPI.Exceptions
{
    public class UserAlreadyExistsException : Exception
    {
        public UserAlreadyExistsException(string email) : base($"the email {email} already exists") { }
    }
}
