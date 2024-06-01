using Etos.Domain.Entities;

namespace Etos.Domain.Repositories;

public interface IUserRepository
{
    void Add(User user);
}
