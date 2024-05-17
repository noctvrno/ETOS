using MediatR;

namespace Etos.Application.Abstractions;

internal interface IQuery<out TResponse> : IRequest<TResponse> { }
