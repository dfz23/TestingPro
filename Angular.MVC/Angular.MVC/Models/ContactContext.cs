using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Web;

namespace Angular.MVC.Models
{
    public class ContactContext  : DbContext 
    {
        public DbSet<Contact> Contacts { get; set; }
    }
}