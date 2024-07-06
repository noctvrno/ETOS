using Etos.Application.Abstractions;
using Etos.Domain.Entities;
using Etos.Domain.Repositories;

namespace Etos.Application.Users.Commands.CreateUser;

public sealed class CreateUserCommandHandler(
        IUserRepository userRepository,
        IUnitOfWork unitOfWork) : ICommandHandler<CreateUserCommand, UserId>
{
    private readonly IUserRepository _userRepository = userRepository;
    private readonly IUnitOfWork _unitOfWork = unitOfWork;

    public Task<UserId> Handle(CreateUserCommand request, CancellationToken cancellationToken)
    {
        var user = User.Create(request.FirstName, request.LastName, request.Email);

        _userRepository.Add(user);

        _unitOfWork.SaveChangesAsync(cancellationToken);

        return Task.FromResult(user.Id);
    }
}
