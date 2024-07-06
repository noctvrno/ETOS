using Etos.Application.Abstractions;
using Etos.Domain.Entities;

namespace Etos.Application.Users.Commands.CreateUser;

public sealed record CreateUserCommand(
    string FirstName,
    string LastName,
    string Email) : ICommand<UserId>
{

}
