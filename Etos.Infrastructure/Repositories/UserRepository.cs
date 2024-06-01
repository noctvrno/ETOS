using Etos.Domain.Entities;
using Etos.Domain.Repositories;

namespace Etos.Infrastructure.Repositories;

public sealed class UserRepository(ApplicationDbContext dbContext) : IUserRepository
{
    private readonly ApplicationDbContext _dbContext = dbContext;

    public void Add(User user)
    {
        _dbContext.Set<User>().Add(user);
    }
}
