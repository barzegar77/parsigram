using MediatR;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers;

[ApiController]
[Route("[controller]")]
public class BaseApiController : ControllerBase
{
     private  IMediator _mediator;
     protected IMediator Mediator => _mediator ??= HttpContext.RequestServices.GetService<IMediator>();
}
