using Application.Core;
using Domin;
using MediatR;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Logging;
using Persistent;

namespace Application.Activities
{
    public class List
    {
        public class Query : IRequest<Result<List<Activity>>>
        {

        }

        public class Handler : IRequestHandler<Query, Result<List<Activity>>>
        {
            private readonly DataContext _context;
            public Handler(DataContext context)
            {
                _context = context;
            }
            public async Task<Result<List<Activity>>> Handle(Query request, CancellationToken cancellationToken)
            {
                return Result<List<Activity>>.success(await _context.Activites.ToListAsync(cancellationToken));
            }
        }
    }
}