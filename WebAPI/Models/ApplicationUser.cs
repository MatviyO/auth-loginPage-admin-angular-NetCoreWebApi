﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.ComponentModel.DataAnnotations.Schema;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Identity;

namespace WebAPI.Models
{
    public class ApplicationUser: IdentityUser
    {
        [Column(TypeName = "varchar(150)")]
        public string FullName { get; set; }


    }
}
