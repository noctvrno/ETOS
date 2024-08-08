using Etos.Application.Abstractions;
using Etos.Domain.Entities;
using Etos.Domain.Repositories;

namespace Etos.Application.Users.Commands.CreateTraining;

internal sealed class CreateTrainingCommandHandler : ICommandHandler<CreateTrainingCommand>
{
    private readonly ITrainingActivityRepository _trainingRepository;
    private readonly IUserRepository _userRepository;
    private readonly IUnitOfWork _unitOfWork;

    public CreateTrainingCommandHandler(ITrainingActivityRepository trainingRepository,
        IUserRepository userRepository,
        IUnitOfWork unitOfWork)
    {
        _trainingRepository = trainingRepository;
        _userRepository = userRepository;
        _unitOfWork = unitOfWork;
    }

    public Task Handle(CreateTrainingCommand request, CancellationToken cancellationToken)
    {
        User user = _userRepository.GetById(request.AssigneeId);
        var trainingActivity = TrainingActivity.Create(request.Title, user);

        _trainingRepository.Add(trainingActivity);

        _unitOfWork.SaveChangesAsync(cancellationToken);

        return Task.CompletedTask;
    }
}
