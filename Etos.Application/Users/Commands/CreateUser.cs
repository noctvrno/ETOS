using Etos.Application.Abstractions;
using Etos.Domain.Entities;
using Etos.Domain.Repositories;

namespace Etos.Application.Users.Commands;

public static class CreateUser
{
    public sealed record Request(string FirstName, string LastName, string Email) : ICommand<UserId>;

    public sealed class Handler : ICommandHandler<Request, UserId>
    {
        private readonly IUserRepository _userRepository;
        private readonly IUnitOfWork _unitOfWork;

        public Handler(IUserRepository userRepository, IUnitOfWork unitOfWork)
        {
            _userRepository = userRepository;
            _unitOfWork = unitOfWork;
        }

        public Task<UserId> Handle(Request request, CancellationToken cancellationToken)
        {
            var user = User.Create(request.FirstName, request.LastName, request.Email);

            _userRepository.Add(user);

            _unitOfWork.SaveChangesAsync(cancellationToken);

            return Task.FromResult(user.Id);
        }
    }
}
