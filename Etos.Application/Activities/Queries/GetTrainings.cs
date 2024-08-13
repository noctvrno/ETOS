using Etos.Application.Abstractions;
using Etos.Domain.Primitives;
using Etos.Domain.Repositories;

namespace Etos.Application.Activities.Queries;

public static class GetTrainings
{
    public sealed record Request : IQuery<Response>;

    public sealed record Response(IEnumerable<IActivity> Activities);

    public sealed class Handler : IQueryHandler<Request, Response>
    {
        private readonly ITrainingActivityRepository _trainingRepository;

        public Handler(ITrainingActivityRepository trainingRepository)
        {
            _trainingRepository = trainingRepository;
        }

        public Task<Response> Handle(Request request, CancellationToken cancellationToken)
        {
            return Task.FromResult(new Response(_trainingRepository.GetAll()));
        }
    }
}
