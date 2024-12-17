using AutoMapper;

public class AutoMapperProfile : Profile
{
    public AutoMapperProfile()
    {
        CreateMap<CarBrand, CarBrandDTO>()
            .ForMember(dest => dest.ModelCount, opt => opt.MapFrom(src => src.Cars.Count));

        CreateMap<CarBrandDTO, CarBrand>();
        CreateMap<Car, CarDTO>();
        CreateMap<CarDTO, Car>();
    }
}