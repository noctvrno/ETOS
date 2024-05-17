using Etos.Domain.Entities;

namespace Etos.Domain.Repositories;

public interface ITrainingActivityRepository : IActivityRepository
{
    IEnumerable<TrainingActivity> GetAll();
}
