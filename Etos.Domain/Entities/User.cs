namespace Etos.Domain.Entities;

public class User
{
    public UserId Id { get; }
    public string FirstName { get;}
    public string LastName { get; }
    public string Email { get;}

    private User(
        UserId userId,
        string firstName,
        string lastName,
        string email)
    {
        Id = userId;
        FirstName = firstName;
        LastName = lastName;
        Email = email;
    }

    public User()
    {

    }

    public static User Create(
        string firstName,
        string lastName,
        string email)
    {
        return new User(
            new UserId(Guid.NewGuid()),
            firstName,
            lastName,
            email);
    }
}

public sealed record UserId(Guid Value);
