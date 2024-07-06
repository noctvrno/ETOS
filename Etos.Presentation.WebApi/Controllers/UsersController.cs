using Etos.Application.Users.Commands.CreateUser;
using Etos.Domain.Entities;
using MediatR;
using Microsoft.AspNetCore.Mvc;

namespace Etos.Presentation.WebApi.Controllers;

[ApiController]
[Route("/api/[controller]")]
public class UsersController(ISender Sender) : ControllerBase
{
    [HttpPost]
    public async Task<IActionResult> Create(
        [FromBody] CreateUserCommand command,
        CancellationToken cancellationToken)
    {
        UserId userId = await Sender.Send(command, cancellationToken);
        return Ok(userId);
    }
}
