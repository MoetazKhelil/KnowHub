from rest_framework import serializers
from .models import KnowledgeEntry

class KnowledgeEntrySerializer(serializers.ModelSerializer):
    class Meta:
        model = KnowledgeEntry
        fields = '__all__'