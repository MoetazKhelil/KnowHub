from rest_framework import filters
from rest_framework import status
from rest_framework.response import Response
from rest_framework.decorators import api_view 
from django_filters.rest_framework import DjangoFilterBackend
from django.shortcuts import get_object_or_404

from .models import KnowledgeEntry
from .serializers import KnowledgeEntrySerializer

@api_view(['POST'])
def create_knowledge_entry(request):
    if request.method == 'POST':
        serializer = KnowledgeEntrySerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(['GET'])
def get_all_knowledge_entries(request):
    if request.method == 'GET':
        entries = KnowledgeEntry.objects.all()
        serializer = KnowledgeEntrySerializer(entries, many=True)
        return Response(serializer.data)
    
@api_view(['GET'])
def get_knowledge_by_id(request, pk):
    if request.method == 'GET':
        entry = get_object_or_404(KnowledgeEntry, pk=pk)     
        serializer = KnowledgeEntrySerializer(entry)
        return Response(serializer.data)

@api_view(['PUT', 'PATCH'])
def update_knowledge_entry(request, pk):
    entry = get_object_or_404(KnowledgeEntry, pk=pk)
    if request.method in ['PUT', 'PATCH']:
        serializer = KnowledgeEntrySerializer(entry, data=request.data, partial=True)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    
@api_view(['DELETE'])
def delete_knowledge_entry(request, pk):
    entry = get_object_or_404(KnowledgeEntry, pk=pk)
    entry.delete()
    return Response(status=status.HTTP_204_NO_CONTENT)