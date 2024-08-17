from django.contrib import admin
from .models import KnowledgeEntry

@admin.register(KnowledgeEntry)
class KnowledgeEntryAdmin(admin.ModelAdmin):
    list_display = ('title', 'created_at', 'updated_at')
    search_fields = ('title', 'content', 'tags')
    list_filter = ( 'tags', 'created_at')