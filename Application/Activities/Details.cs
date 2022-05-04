using Application.Core;
using Domin;
using MediatR;
using Persistent;

namespace Application.Activities
{
    public class Details
    {
        public class Query : IRequest<Result<Activity>>
        {
            public Guid Id { get; set; }
        }

        public class Handler : IRequestHandler<Query, Result<Activity>>
        {
            private readonly DataContext _context;
            public Handler(DataContext context)
            {
                _context = context;
            }

            public async Task<Result<Activity>> Handle(Query request, CancellationToken cancellationToken)
            {
                var activity = await _context.Activites.FindAsync(request.Id);
                if(activity == null) throw new Exception("فعالیت مورد نظر یافت نشد");
                return Result<Activity>.success(activity);
            }
        }
    }
}