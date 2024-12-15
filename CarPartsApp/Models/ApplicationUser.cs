using Microsoft.AspNetCore.Identity;

namespace YourNamespace.Models // Replace 'YourNamespace' with your project's namespace
{
    public class ApplicationUser : IdentityUser
    {
        public string FullName { get; set; }
    }
}
