from .models import Retreat, Booking
from rest_framework import serializers


class RetreatSerializer(serializers.ModelSerializer):
    class Meta:
        model = Retreat
        fields = '__all__'

class BookingSerializer(serializers.ModelSerializer):
    retreat = RetreatSerializer(source='retreat_id')
    class Meta:
        model = Booking
        fields = ['user_id', 'user_name', 'user_email', 'user_phone', 'retreat', 'payment_details', 'booking_date']

    