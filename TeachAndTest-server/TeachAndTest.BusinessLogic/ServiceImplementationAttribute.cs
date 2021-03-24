using Microsoft.Extensions.DependencyInjection;
using System;
using System.Collections.Generic;
using System.Text;

namespace TeachAndTest.BusinessLogic
{
    public class ServiceImplementationAttribute : Attribute
    {
        public Type ServiceType { get; private set; }
        public ServiceLifetime Lifetime { get; private set; }
        public ServiceImplementationAttribute(
            Type serviceType,
            ServiceLifetime lifetime = ServiceLifetime.Transient)
        {
            ServiceType = serviceType;
            Lifetime = lifetime;
        }
    }
}
