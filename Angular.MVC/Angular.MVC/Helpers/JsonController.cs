using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Net;
using System.Web.Mvc;
using Newtonsoft.Json;
using Newtonsoft.Json.Serialization;

namespace Angular.MVC.Helpers
{
    public class JsonController: Controller
    {
        public new ActionResult Json(object data, JsonRequestBehavior behavior)
        {
            var JsonSerializerSetting = new JsonSerializerSettings()
            {
                ContractResolver = new CamelCasePropertyNamesContractResolver()
            };

            if (Request.RequestType == WebRequestMethods.Http.Get && behavior == JsonRequestBehavior.DenyGet)
            {
                throw new InvalidOperationException("Get is not permitted for this request.");
            }

            var jsonResult = new ContentResult()
            {
                Content = JsonConvert.SerializeObject(data,JsonSerializerSetting),
                ContentType = "application/json"
            };

            return jsonResult;
        }
    }
}