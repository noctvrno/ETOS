using Etos.Application.Activities.Queries.GetAllTrainingActivities;
using Etos.Application.Users.Commands.CreateTraining;
using MediatR;
using Microsoft.AspNetCore.Mvc;

namespace Etos.Presentation.WebApi.Controllers;

[ApiController]
[Route("/api/[controller]")]
public class TrainingController : ControllerBase
{
    private readonly ISender _sender;

    public TrainingController(ISender Sender)
    {
        _sender = Sender;
    }

    [HttpGet]
    public async Task<IActionResult> GetAllTrainings(CancellationToken cancellationToken)
    {
        GetAllTrainingActivitiesQuery query = new();
        ActivitiesResponse response = await _sender.Send(query, cancellationToken);

        return Ok(response);
    }

    [HttpPost]
    public async Task<IActionResult> Create(
        [FromBody] CreateTrainingCommand command,
        CancellationToken cancellationToken
    )
    {
        await _sender.Send(command, cancellationToken);

        return Ok();
    }
}
