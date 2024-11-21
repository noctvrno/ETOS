using Etos.Application.Abstractions;
using Etos.Domain.Entities;
using Etos.Domain.Repositories;

namespace Etos.Application.Users.Queries;

public static class GetUsers
{
    public sealed record Request : IQuery<IEnumerable<User>>;

    public sealed class Handler : IQueryHandler<Request, IEnumerable<User>>
    {
        private readonly IUserRepository _userRepository;

        public Handler(IUserRepository userRepository)
        {
            _userRepository = userRepository;
        }

        public Task<IEnumerable<User>> Handle(Request request, CancellationToken cancellationToken)
        {
            IEnumerable<User> users = _userRepository.Get();

            return Task.FromResult(users);
        }
    }
}
