namespace Etos.Presentation.WebApi.Extensions;

public static class StringExtensions
{
    public static string ToSwaggerCompliantSchemaName(this string? nonCompliantName)
    {
        return nonCompliantName?.Replace('+', '.') ?? Guid.NewGuid().ToString();
    }
}
