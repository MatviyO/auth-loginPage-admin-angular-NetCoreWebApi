﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace WebAPI.Models
{
    public class ApplicationsSettings
    {
        public string JWT_Secret { get; set; }
        public string Client_Url { get; set; }
    }
}
