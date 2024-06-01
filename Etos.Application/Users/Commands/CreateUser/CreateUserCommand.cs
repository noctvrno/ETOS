using Etos.Application.Abstractions;

namespace Etos.Application.Users.Commands.CreateUser;

public sealed record CreateUserCommand(
    string FirstName,
    string LastName,
    string Email) : ICommand
{

}
