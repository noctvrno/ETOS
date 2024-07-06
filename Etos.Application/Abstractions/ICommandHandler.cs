using MediatR;

namespace Etos.Application.Abstractions;

internal interface ICommandHandler<in TCommand> : IRequestHandler<TCommand>
        where TCommand : ICommand
{

}

internal interface ICommandHandler<in TCommand, TResponse> : IRequestHandler<TCommand, TResponse>
        where TCommand : ICommand<TResponse>
{

}
