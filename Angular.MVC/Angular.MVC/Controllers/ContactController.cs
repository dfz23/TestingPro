using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using Angular.MVC.Helpers;
using Angular.MVC.Models;
using System.Net;

namespace Angular.MVC.Controllers
{
    public class ContactController : JsonController
    {
        private ContactContext ContactsDB = new ContactContext();

        public ActionResult GetContacts()
        {
            var Contacts = ContactsDB.Contacts;

            return Json(Contacts, JsonRequestBehavior.AllowGet);
        }

        public ActionResult AddContact(Contact _Contact)
        {
            try
            {
                ContactsDB.Contacts.Add(_Contact);
                ContactsDB.SaveChanges();

                return new HttpStatusCodeResult(HttpStatusCode.Created);
            }
            catch
            {

                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
        }

        public ActionResult UpdateContact(Contact _Contact)
        {
            try
            {
                ContactsDB.Entry(_Contact).State = System.Data.Entity.EntityState.Modified;
                ContactsDB.SaveChanges();

                return new HttpStatusCodeResult(HttpStatusCode.Accepted);
            }
            catch
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);               
            }
        }

        public ActionResult DeleteContact(int id)
        {
            var _Contact = ContactsDB.Contacts.First(r => r.Id == id);

            try
            {
                ContactsDB.Contacts.Remove(_Contact);
                ContactsDB.SaveChanges();

                return new HttpStatusCodeResult(HttpStatusCode.OK);
            }
            catch
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);               
            }
        }
    }
}