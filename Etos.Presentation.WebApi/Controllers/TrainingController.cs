using Etos.Application.Activities.Queries.GetAllTrainingActivities;
using MediatR;
using Microsoft.AspNetCore.Mvc;

namespace Etos.Presentation.WebApi.Controllers;

[ApiController]
[Route("/api/[controller]")]
public class TrainingController(ISender Sender) : ControllerBase
{
    [HttpGet]
    public async Task<IActionResult> GetAllTrainings(CancellationToken cancellationToken)
    {
        GetAllTrainingActivitiesQuery query = new();
        ActivitiesResponse response = await Sender.Send(query, cancellationToken);

        return Ok(response);
    }
}
