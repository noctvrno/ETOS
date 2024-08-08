using Etos.Application.Abstractions;
using Etos.Domain.Entities;

namespace Etos.Application.Users.Commands.CreateTraining;

public sealed record CreateTrainingCommand : ICommand
{
    public CreateTrainingCommand(string Title, UserId AssigneeId)
    {
        this.Title = Title;
        this.AssigneeId = AssigneeId;
    }

    public string Title { get; init; }
    public UserId AssigneeId { get; init; }

    public void Deconstruct(out string Title, out UserId AssigneeId)
    {
        Title = this.Title;
        AssigneeId = this.AssigneeId;
    }
}
