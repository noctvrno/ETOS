using Etos.Application.Users.Commands;
using Etos.Domain.Entities;
using MediatR;
using Microsoft.AspNetCore.Mvc;

namespace Etos.Presentation.WebApi.Controllers;

[ApiController]
[Route("/api/[controller]")]
public class UsersController : ControllerBase
{
    private readonly ISender _sender;

    public UsersController(ISender sender)
    {
        _sender = sender;
    }

    [HttpPost]
    public async Task<IActionResult> Create(
        [FromBody] CreateUser.Request request,
        CancellationToken cancellationToken)
    {
        UserId userId = await _sender.Send(request, cancellationToken);
        return Ok(userId);
    }
}
