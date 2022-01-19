using Domin;

namespace Persistent
{
  public class Seed
    {
        public static async Task SeedData(DataContext context)
        {
            if (!context.Activites.Any())
            {

                var activities = new List<Activity>
                {
                    new Activity
                    {
                        Title = "پست 1",
                        Date = DateTime.Now.AddMonths(-2),
                        Description = "این پست برای تست ایجاد شده است",
                        Category = "نوشیدنی",
                        City = "شیراز",
                        Venue = "پل معالی آباد"
                    },
                    new Activity
                    {
                        Title = "پست 2",
                        Date = DateTime.Now.AddMonths(-1),
                        Description = "این پست برای تست ایجاد شده است",
                        Category = "فرهنگی",
                        City = "تبریز",
                        Venue = "مسجد کبود"
                    },
                    new Activity
                    {
                        Title = "پست 3",
                        Date = DateTime.Now.AddMonths(1),
                       Description = "این پست برای تست ایجاد شده است",
                        Category = "موسیقی",
                        City = "اصفهان",
                        Venue = "پل سی و سه پل"
                    },
                    new Activity
                    {
                        Title = "پست 4",
                        Date = DateTime.Now.AddMonths(2),
                        Description = "این پست برای تست ایجاد شده است",
                        Category = "غذا",
                        City = "اصفهان",
                        Venue = "پل خاجو"
                    },
                    new Activity
                    {
                        Title = "پست 5",
                        Date = DateTime.Now.AddMonths(3),
                        Description = "این پست برای تست ایجاد شده است",
                        Category = "نوشیدنی",
                        City = "شیراز",
                        Venue = "حافظیه"
                    },
                    new Activity
                    {
                        Title = "پست 6",
                        Date = DateTime.Now.AddMonths(4),
                        Description = "این پست برای تست ایجاد شده است",
                        Category = "فرهنگی",
                        City = "شیراز",
                        Venue = "سعدیه"
                    },
                    new Activity
                    {
                       Title = "پست 7",
                        Date = DateTime.Now.AddMonths(5),
                        Description = "این پست برای تست ایجاد شده است",
                        Category = "نوشیدنی",
                        City = "شیراز",
                        Venue = "زند"
                    },
                    new Activity
                    {
                       Title = "پست 8",
                        Date = DateTime.Now.AddMonths(6),
                        Description = "این پست برای تست ایجاد شده است",
                        Category = "موسیقی",
                        City = "شیراز",
                        Venue = "ملاصدرا"
                    },
                    new Activity
                    {
                       Title = "پست 9",
                        Date = DateTime.Now.AddMonths(7),
                        Description = "این پست برای تست ایجاد شده است",
                        Category = "سفر",
                        City = "تهران",
                        Venue = "تجریش"
                    },
                    new Activity
                    {
                        Title = "پست 10",
                        Date = DateTime.Now.AddMonths(8),
                       Description = "این پست برای تست ایجاد شده است",
                        Category = "نوشیدنی",
                        City = "شیراز",
                        Venue = "باغ ارم"
                    }
                };

                await context.Activites.AddRangeAsync(activities);
                await context.SaveChangesAsync();
            }
        }
    }
}