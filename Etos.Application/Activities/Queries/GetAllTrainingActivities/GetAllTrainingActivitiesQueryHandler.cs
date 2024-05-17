using Etos.Application.Abstractions;
using Etos.Domain.Repositories;

namespace Etos.Application.Activities.Queries.GetAllTrainingActivities;

public sealed class GetAllTrainingActivitiesQueryHandler : IQueryHandler<GetAllTrainingActivitiesQuery, ActivitiesResponse>
{
    private readonly ITrainingActivityRepository _trainingRepository;

    public GetAllTrainingActivitiesQueryHandler(ITrainingActivityRepository trainingRepository)
    {
        _trainingRepository = trainingRepository;
    }

    public Task<ActivitiesResponse> Handle(GetAllTrainingActivitiesQuery request, CancellationToken cancellationToken)
    {
        return Task.FromResult(new ActivitiesResponse(_trainingRepository.GetAll()));
    }
}
