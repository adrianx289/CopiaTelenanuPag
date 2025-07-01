using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using SitioWebChat.Models;


namespace SitioWebChat.Controllers
{
    public class HomeController : Controller
    {
        public IActionResult Index()
        {
         
            return View();
        }

        public IActionResult Chatbot()
        {
         
            return View();
        }

        public IActionResult Preguntas()
        {
         
            return View();
        }

        public IActionResult Admin()
        {
         
            return View();
        }

        public IActionResult Contacto()
        {
         
            return View();
        }

        public IActionResult Reportes()
        {
         
            return View();
        }

        public IActionResult Privacy()
        {
            return View();
        }

        [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
        public IActionResult Error()
        {
            return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
        }
    }

}
