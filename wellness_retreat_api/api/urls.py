from django.urls import path
from . import views

urlpatterns = [
    path('api/retreats/', views.ListRetreat.as_view() ),
    path('api/retreats/<int:pk>/', views.RetreatDetail.as_view() ),
    path('api/bookings/', views.ListBooking.as_view() ),
    path('api/bookings/<int:pk>/', views.BookingDetail.as_view() ),
]