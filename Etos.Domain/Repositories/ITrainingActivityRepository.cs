using Etos.Domain.Entities;

namespace Etos.Domain.Repositories;

public interface ITrainingActivityRepository : IActivityRepository
{
    void Add(TrainingActivity activity);
    IEnumerable<TrainingActivity> GetAll();
}
