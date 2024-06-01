using Etos.Application.Users.Commands.CreateUser;
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
        await Sender.Send(command, cancellationToken); // TODO: Send the created UserId as a response.
        return Ok();
    }
}
