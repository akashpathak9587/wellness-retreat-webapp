from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.response import Response
from .models import Retreat, Booking
from .serializers import RetreatSerializer, BookingSerializer

# Create your views here.
class ListRetreat(APIView):
    def get_queryset(self):
        page = self.request.query_params.get('page')
        limit = self.request.query_params.get('limit')
        filter = self.request.query_params.get('filter')
        location = self.request.query_params.get('location')
        search = self.request.query_params.get('search')
        if page and limit:
            page = int(page)
            limit = int(limit)
            offset = (page - 1) * limit
            retreats = Retreat.objects.all()[offset:offset + limit]
        elif filter:
            retreats = Retreat.objects.filter(tag__icontains=filter)
        elif location:
            retreats = Retreat.objects.filter(location__icontains=location)
        elif search:
            retreats = Retreat.objects.filter(title__icontains=search)
        else:
            retreats = Retreat.objects.all()
        return retreats
    
    def get(self, request, *args, **kwargs):
        retreats = self.get_queryset()
        serializer = RetreatSerializer(retreats, many=True)
        return Response(serializer.data)
    
    def post(self, request, *args, **kwargs):
        serializer = RetreatSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors)
    
    def delete(self, request, *args, **kwargs):
        retreats = Retreat.objects.all()
        retreats.delete()
        return Response(status=204)
    

class RetreatDetail(APIView):
    def get_object(self, pk):
        try:
            return Retreat.objects.get(pk=pk)
        except Retreat.DoesNotExist:
            return Response(status=404)

    def get(self, request, pk, format=None):
        retreat = self.get_object(pk)
        serializer = RetreatSerializer(retreat)
        return Response(serializer.data)

    def put(self, request, pk, format=None):
        retreat = self.get_object(pk)
        serializer = RetreatSerializer(retreat, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors)

    def delete(self, request, pk, format=None):
        retreat = self.get_object(pk)
        retreat.delete()
        return Response(status=204)
    
    def patch(self, request, pk, format=None):
        retreat = self.get_object(pk)
        serializer = RetreatSerializer(retreat, data=request.data, partial=True)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors)
    

class ListBooking(APIView):
    def get(self, request, *args, **kwargs):
        bookings = Booking.objects.all()
        serializer = BookingSerializer(bookings, many=True)
        return Response(serializer.data)
    
    def post(self, request, *args, **kwargs):
        serializer = BookingSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors)
    
    def delete(self, request, *args, **kwargs):
        bookings = Booking.objects.all()
        bookings.delete()
        return Response(status=204)
    

class BookingDetail(APIView):
    def get_object(self, pk):
        try:
            return Booking.objects.get(pk=pk)
        except Booking.DoesNotExist:
            return Response(status=404)
        
    def get(self, request, pk, format=None):
        booking = self.get_object(pk)
        if isinstance(booking, Response):
            return booking
        serializer = BookingSerializer(booking)
        return Response(serializer.data)
    
    def put(self, request, pk, format=None):
        booking = self.get_object(pk)
        serializer = BookingSerializer(booking, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors)
    
    def delete(self, request, pk, format=None):
        booking = self.get_object(pk)
        booking.delete()
        return Response(status=204)
    
    def patch(self, request, pk, format=None):
        booking = self.get_object(pk)
        serializer = BookingSerializer(booking, data=request.data, partial=True)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors)