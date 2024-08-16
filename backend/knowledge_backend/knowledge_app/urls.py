from django.urls import path
from . import views

urlpatterns = [
    path('knowledge/', views.get_all_knowledge_entries, name='get_all_knowledge_entries'),
    path('knowledge/<int:pk>/', views.get_knowledge_by_id, name='get_knowledge_by_id'),
    path('knowledge/create/', views.create_knowledge_entry, name='create_knowledge_entry'),
    path('knowledge/<int:pk>/update/', views.update_knowledge_entry, name='update_knowledge_entry'),
    path('knowledge/<int:pk>/delete/', views.delete_knowledge_entry, name='delete_knowledge_entry'),
    path('knowledge/search/', views.search_knowledge_entries, name='search_knowledge_entries'),
    path('knowledge/filter/', views.filter_knowledge_entries, name='filter_knowledge_entries'),
]
