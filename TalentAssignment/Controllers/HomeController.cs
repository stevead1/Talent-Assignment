using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace TalentAssignment.Controllers
{
    public class HomeController : Controller
    {
        // GET: Home
        public ActionResult Index()
        {
            return View();
        }

        public JsonResult GetMessage()
        {
            return Json(new { result = "Hello from controller" }, JsonRequestBehavior.AllowGet);
        }
    }
}