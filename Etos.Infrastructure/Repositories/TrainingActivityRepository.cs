using Etos.Domain.Entities;
using Etos.Domain.Repositories;

namespace Etos.Infrastructure.Repositories;

public class TrainingActivityRepository : ITrainingActivityRepository
{
    private readonly ApplicationDbContext _dbContext;

    public TrainingActivityRepository(ApplicationDbContext dbContext)
    {
        _dbContext = dbContext;
    }

    public void Add(TrainingActivity activity)
    {
        _dbContext.Set<TrainingActivity>().Add(activity);
    }

    public IEnumerable<TrainingActivity> GetAll()
    {
        return _dbContext.Set<TrainingActivity>();
    }
}
