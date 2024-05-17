using Etos.Domain.Entities;
using Etos.Domain.Primitives;
using Etos.Domain.Repositories;

namespace Etos.Infrastructure.Repositories;

public class TrainingActivityRepository : ITrainingActivityRepository
{
    public IEnumerable<TrainingActivity> GetAll()
    {
        const string title = "Demo";

        return new List<TrainingActivity>()
        {
            new(new ActivityId(Guid.NewGuid()), title),
            new(new ActivityId(Guid.NewGuid()), title),
            new(new ActivityId(Guid.NewGuid()), title),
        };
    }
}
