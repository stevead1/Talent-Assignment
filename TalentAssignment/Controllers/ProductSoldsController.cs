using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Entity;
using System.Linq;
using System.Net;
using System.Web;
using System.Web.Mvc;
using TalentAssignment.Models;

namespace TalentAssignment.Controllers
{
    public class ProductSoldsController : Controller
    {
        private ProductSoldContext db = new ProductSoldContext();

        // GET: ProductSolds
        public ActionResult Index()
        {
            var productSolds = db.ProductSolds.Include(p => p.Customer).Include(p => p.Product).Include(p => p.Store);
            return View(productSolds.ToList());
        }

        // GET: ProductSolds/Details/5
        public ActionResult Details(int? id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            ProductSold productSold = db.ProductSolds.Find(id);
            if (productSold == null)
            {
                return HttpNotFound();
            }
            return View(productSold);
        }

        // GET: ProductSolds/Create
        public ActionResult Create()
        {
            ViewBag.CustomerId = new SelectList(db.Customers, "Id", "Name");
            ViewBag.ProductId = new SelectList(db.Products, "Id", "Name");
            ViewBag.StoreId = new SelectList(db.Stores, "Id", "Name");
            return View();
        }

        // POST: ProductSolds/Create
        // To protect from overposting attacks, please enable the specific properties you want to bind to, for 
        // more details see https://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Create([Bind(Include = "Id,ProductId,CustomerId,StoreId,DateSold")] ProductSold productSold)
        {
            if (ModelState.IsValid)
            {
                db.ProductSolds.Add(productSold);
                db.SaveChanges();
                return RedirectToAction("Index");
            }

            ViewBag.CustomerId = new SelectList(db.Customers, "Id", "Name", productSold.CustomerId);
            ViewBag.ProductId = new SelectList(db.Products, "Id", "Name", productSold.ProductId);
            ViewBag.StoreId = new SelectList(db.Stores, "Id", "Name", productSold.StoreId);
            return View(productSold);
        }

        // GET: ProductSolds/Edit/5
        public ActionResult Edit(int? id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            ProductSold productSold = db.ProductSolds.Find(id);
            if (productSold == null)
            {
                return HttpNotFound();
            }
            ViewBag.CustomerId = new SelectList(db.Customers, "Id", "Name", productSold.CustomerId);
            ViewBag.ProductId = new SelectList(db.Products, "Id", "Name", productSold.ProductId);
            ViewBag.StoreId = new SelectList(db.Stores, "Id", "Name", productSold.StoreId);
            return View(productSold);
        }

        // POST: ProductSolds/Edit/5
        // To protect from overposting attacks, please enable the specific properties you want to bind to, for 
        // more details see https://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Edit([Bind(Include = "Id,ProductId,CustomerId,StoreId,DateSold")] ProductSold productSold)
        {
            if (ModelState.IsValid)
            {
                db.Entry(productSold).State = EntityState.Modified;
                db.SaveChanges();
                return RedirectToAction("Index");
            }
            ViewBag.CustomerId = new SelectList(db.Customers, "Id", "Name", productSold.CustomerId);
            ViewBag.ProductId = new SelectList(db.Products, "Id", "Name", productSold.ProductId);
            ViewBag.StoreId = new SelectList(db.Stores, "Id", "Name", productSold.StoreId);
            return View(productSold);
        }

        // GET: ProductSolds/Delete/5
        public ActionResult Delete(int? id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            ProductSold productSold = db.ProductSolds.Find(id);
            if (productSold == null)
            {
                return HttpNotFound();
            }
            return View(productSold);
        }

        // POST: ProductSolds/Delete/5
        [HttpPost, ActionName("Delete")]
        [ValidateAntiForgeryToken]
        public ActionResult DeleteConfirmed(int id)
        {
            ProductSold productSold = db.ProductSolds.Find(id);
            db.ProductSolds.Remove(productSold);
            db.SaveChanges();
            return RedirectToAction("Index");
        }


        public ActionResult GetProductSoldList()
        {
            using (var db = new ProductSoldContext())
            {
                var productSolds = db.ProductSolds.Include(p => p.Customer).Include(p => p.Product).Include(p => p.Store);
                var CustList = db.ProductSolds.Select(x => new
                {
                    ProductSoldID = x.Id,
                    customerName = x.Customer.Name,
                    productName = x.Product.Name,
                    storeName = x.Store.Name,
                    dateSold = x.DateSold
                }).ToList();
                return Json(CustList, JsonRequestBehavior.AllowGet);
            }
        }

        public ActionResult GetCustomerName()
        {
            using (var db = new ProductSoldContext())
            {
                
                var customerNameList = db.Customers.Select(x => new
                {
                    customerID = x.Id,
                    customerName = x.Name,
                }).ToList();
             
                return Json(customerNameList, JsonRequestBehavior.AllowGet);
            }

        }
        public ActionResult GetProductName()
        {
            using (var db = new ProductSoldContext())
            {

                var ProductNameList = db.Products.Select(x => new
                {
                    productID = x.Id,
                    productName = x.Name,
                }).ToList();

                return Json(ProductNameList, JsonRequestBehavior.AllowGet);
            }

        }

        public ActionResult GetStoreName()
        {
            using (var db = new ProductSoldContext())
            {

                var StoreNameList = db.Stores.Select(x => new
                {
                    storeID = x.Id,
                    storeName = x.Name,
                }).ToList();

                return Json(StoreNameList, JsonRequestBehavior.AllowGet);
            }

        }

        public ActionResult AddNewSale([Bind(Include = "Id,ProductId,CustomerId,StoreId,DateSold")] ProductSold productSold)
        {
            //either pass productId from frontend,.. or change productName to productId in backend
            if (ModelState.IsValid)
            {
                
                db.ProductSolds.Add(productSold);
                db.SaveChanges();
                return RedirectToAction("Index");
            }

            ViewBag.CustomerId = new SelectList(db.Customers, "Id", "Name", productSold.CustomerId);
            ViewBag.ProductId = new SelectList(db.Products, "Id", "Name", productSold.ProductId);
            ViewBag.StoreId = new SelectList(db.Stores, "Id", "Name", productSold.StoreId);
            return View(productSold);
        }


        public ActionResult saleDelete(int? id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            ProductSold productSold = db.ProductSolds.Find(id);
            if (productSold == null)
            {
                return HttpNotFound();
            }
            return View(productSold);
        }

        // POST: ProductSolds/Delete/5
        [HttpPost, ActionName("saleDelete")]
        public ActionResult saleDeleteConfirmed(int id)
        {
            ProductSold productSold = db.ProductSolds.Find(id);
            db.ProductSolds.Remove(productSold);
            db.SaveChanges();
            return RedirectToAction("Index");
        }


     



        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult saleEdit([Bind(Include = "Id,ProductId,CustomerId,StoreId,DateSold")] ProductSold productSold)
        {
            if (ModelState.IsValid)
            {
                db.Entry(productSold).State = EntityState.Modified;
                db.SaveChanges();
                return RedirectToAction("Index");
            }
            ViewBag.CustomerId = new SelectList(db.Customers, "Id", "Name", productSold.CustomerId);
            ViewBag.ProductId = new SelectList(db.Products, "Id", "Name", productSold.ProductId);
            ViewBag.StoreId = new SelectList(db.Stores, "Id", "Name", productSold.StoreId);
            return View(productSold);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }
    }
}
