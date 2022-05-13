using Application.Core;
using Domin;
using FluentValidation;
using MediatR;
using Persistent;

namespace Application.Activities
{
    public class Create
    {
        public class Command : IRequest<Result<Unit>>
        {
            public Activity Activity { get; set; }

        }

        public class CommandValidator : AbstractValidator<Command>{
            public CommandValidator()
            {
                RuleFor( x => x.Activity).SetValidator(new ActivityValidator());
            }
        }


        public class Handler : IRequestHandler<Command, Result<Unit>>
        {
            private readonly DataContext _context;
            public Handler(DataContext context)
            {
                _context = context;
            }

            public async Task<Result<Unit>> Handle(Command request, CancellationToken cancellationToken)
            {
                _context.Activites.Add(request.Activity);
                var result = await _context.SaveChangesAsync() > 0;
                if(!result) return Result<Unit>.Failure("فعالیت به درستی ایجاد نشد");

                return Result<Unit>.success(Unit.Value);
            }
        }
    }
}