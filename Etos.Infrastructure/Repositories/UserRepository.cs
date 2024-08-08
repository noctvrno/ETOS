using Etos.Domain.Entities;
using Etos.Domain.Exceptions;
using Etos.Domain.Repositories;

namespace Etos.Infrastructure.Repositories;

public sealed class UserRepository : IUserRepository
{
    private readonly ApplicationDbContext _dbContext;

    public UserRepository(ApplicationDbContext dbContext)
    {
        _dbContext = dbContext;
    }

    public void Add(User user)
    {
        _dbContext.Set<User>().Add(user);
    }

    public User GetById(UserId id)
    {
        return _dbContext.Set<User>().FirstOrDefault(x => x.Id.Equals(id))
            ?? throw new UserNotFoundException($"Could not find user with Identifier {id}");
    }
}
