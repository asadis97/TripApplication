namespace TripsWebsiteAPI.Exceptions
{
    public class NotFoundException : Exception
    {
        public NotFoundException(string Id) : base($"{Id} not found") { }
    }
}
