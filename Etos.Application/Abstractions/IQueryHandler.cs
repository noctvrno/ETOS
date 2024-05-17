using MediatR;

namespace Etos.Application.Abstractions;

internal interface IQueryHandler<TQuery, TResponse> : IRequestHandler<TQuery, TResponse>
    where TQuery : IQuery<TResponse>
{

}
