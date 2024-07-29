from django.db import models

# Create your models here.
class Retreat(models.Model):
   title = models.CharField(max_length=255)
   description = models.TextField()
   date = models.DateTimeField()
   location = models.CharField(max_length=255)
   price = models.DecimalField(max_digits=10, decimal_places=2)
   type = models.CharField(max_length=50)
   condition = models.CharField(max_length=50)
   image = models.URLField()
   tag = models.JSONField()
   duration = models.IntegerField()


   def __str__(self):
       return self.title
   
class Booking(models.Model):
   user_id = models.IntegerField()
   user_name = models.CharField(max_length=255)
   user_email = models.EmailField()
   user_phone = models.CharField(max_length=15)
   retreat_id = models.ForeignKey(Retreat, on_delete=models.CASCADE)
   payment_details = models.JSONField()
   booking_date = models.DateTimeField()


   def __str__(self):
       return f"Booking by {self.user_name} for {self.retreat_title}"
