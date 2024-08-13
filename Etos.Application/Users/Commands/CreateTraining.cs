using Etos.Application.Abstractions;
using Etos.Domain.Entities;
using Etos.Domain.Repositories;

namespace Etos.Application.Users.Commands;

public static class CreateTraining
{
    public sealed record Request(string Title, UserId AssigneeId) : ICommand;

    public sealed class Handler : ICommandHandler<Request>
    {
        private readonly ITrainingActivityRepository _trainingRepository;
        private readonly IUserRepository _userRepository;
        private readonly IUnitOfWork _unitOfWork;

        public Handler(
            ITrainingActivityRepository trainingRepository,
            IUserRepository userRepository,
            IUnitOfWork unitOfWork
        )
        {
            _trainingRepository = trainingRepository;
            _userRepository = userRepository;
            _unitOfWork = unitOfWork;
        }

        public Task Handle(Request request, CancellationToken cancellationToken)
        {
            User user = _userRepository.GetById(request.AssigneeId);
            var trainingActivity = TrainingActivity.Create(request.Title, user); // TODO: Consider having multiple users which can be assigned after creation.

            _trainingRepository.Add(trainingActivity);

            _unitOfWork.SaveChangesAsync(cancellationToken);

            return Task.CompletedTask;
        }
    }
}
