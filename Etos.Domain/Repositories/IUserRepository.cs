using Etos.Domain.Entities;

namespace Etos.Domain.Repositories;

public interface IUserRepository
{
    User GetById(UserId id);

    void Add(User user);
}
