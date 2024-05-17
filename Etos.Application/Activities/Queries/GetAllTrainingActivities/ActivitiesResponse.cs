using Etos.Domain.Primitives;

namespace Etos.Application.Activities.Queries.GetAllTrainingActivities;

public sealed record ActivitiesResponse(IEnumerable<IActivity> Activities);
