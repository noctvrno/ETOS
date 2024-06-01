﻿using MediatR;

namespace Etos.Application.Abstractions;

internal interface ICommandHandler<in TCommand> : IRequestHandler<TCommand>
        where TCommand : ICommand
{

}
