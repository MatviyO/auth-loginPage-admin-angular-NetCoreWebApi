using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;

namespace WebAPI.Models
{
    public class AuthenticationContext: DbContext
    {

        public AuthenticationContext(DbContextOptions<AuthenticationContext> options): base (options)
        {

        }
        public DbSet<ApplicationUser> ApplicationUsers { get; set; }
    }
}
