using MediatR;

namespace Etos.Application.Abstractions;

internal interface ICommand : IRequest
{
}

internal interface ICommand<out TResponse> : IRequest<TResponse>
{
}
