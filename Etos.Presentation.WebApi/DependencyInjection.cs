using Etos.Domain.Repositories;
using Etos.Infrastructure.Repositories;

namespace Etos.Presentation.WebApi;

public static class DependencyInjection
{
    public static IServiceCollection AddRepositories(this IServiceCollection services)
    {
        services.AddScoped<ITrainingActivityRepository, TrainingActivityRepository>();

        return services;
    }
}
