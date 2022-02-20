using AutoMapper;
using Domin;

namespace Application.Core
{
    public class MappingProfiles : Profile
    {
        public MappingProfiles()
        {
            CreateMap<Activity , Activity>();
        }
    }
}