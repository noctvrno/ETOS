using Etos.Application.Activities.Queries;
using Etos.Application.Users.Commands;
using MediatR;
using Microsoft.AspNetCore.Mvc;

namespace Etos.Presentation.WebApi.Controllers;

[ApiController]
[Route("/api/[controller]")]
public class TrainingController : ControllerBase
{
    private readonly ISender _sender;

    public TrainingController(ISender sender)
    {
        _sender = sender;
    }

    [HttpGet]
    public async Task<IActionResult> GetAllTrainings(CancellationToken cancellationToken)
    {
        GetTrainings.Request request = new();
        GetTrainings.Response response = await _sender.Send(request, cancellationToken);

        return Ok(response);
    }

    [HttpPost]
    public async Task<IActionResult> Create(
        [FromBody] CreateTraining.Request command,
        CancellationToken cancellationToken
    )
    {
        await _sender.Send(command, cancellationToken);

        return Ok();
    }
}
