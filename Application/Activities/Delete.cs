using Application.Core;
using MediatR;
using Persistent;

namespace Application.Activities
{
    public class Delete
    {
        public class Command : IRequest<Result<Unit>>
        {
            public Guid Id { get; set; }


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
                var activity = await _context.Activites.FindAsync(request.Id);

                if (activity == null) return null;
                _context.Remove(activity);
                var result =  await _context.SaveChangesAsync() > 0;
                if(!result) return Result<Unit>.Failure("حذف فعالیت با خطا مواجه شد");
                return Result<Unit>.success(Unit.Value);
            }
        }
    }
}