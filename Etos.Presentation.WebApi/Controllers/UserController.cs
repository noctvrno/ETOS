using Etos.Application.Users.Commands;
using Etos.Application.Users.Queries;
using Etos.Domain.Entities;
using MediatR;
using Microsoft.AspNetCore.Mvc;

namespace Etos.Presentation.WebApi.Controllers;

[ApiController]
[Route("/api/[controller]")]
public class UserController : ControllerBase
{
    private readonly ISender _sender;

    public UserController(ISender sender)
    {
        _sender = sender;
    }

    [HttpPost]
    public async Task<IActionResult> Create(
        [FromBody] CreateUser.Request request,
        CancellationToken cancellationToken
    )
    {
        UserId userId = await _sender.Send(request, cancellationToken);
        return Ok(userId);
    }

    [HttpGet]
    public async Task<IActionResult> Get(CancellationToken cancellationToken)
    {
        GetUsers.Request request = new();
        IEnumerable<User> users = await _sender.Send(request, cancellationToken);

        return Ok(users);
    }
}
