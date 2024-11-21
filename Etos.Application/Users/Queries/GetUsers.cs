using Etos.Application.Abstractions;
using Etos.Domain.Entities;
using Etos.Domain.Repositories;

namespace Etos.Application.Users.Queries;

public class GetUsers
{
    public sealed record Request : IQuery<IEnumerable<User>>;

    public sealed class Handler : IQueryHandler<Request, IEnumerable<User>>
    {
        private readonly IUserRepository _userRepository;
        private readonly IUnitOfWork _unitOfWork;

        public Handler(IUserRepository userRepository, IUnitOfWork unitOfWork)
        {
            _userRepository = userRepository;
            _unitOfWork = unitOfWork;
        }

        public Task<IEnumerable<User>> Handle(Request request, CancellationToken cancellationToken)
        {
            IEnumerable<User> users = _userRepository.Get();

            return Task.FromResult(users);
        }
    }
}
