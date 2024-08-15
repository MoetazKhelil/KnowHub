from django import forms
from .models import KnowledgeEntry

class KnowledgeEntryForm(forms.ModelForm):
    class Meta:
        model = KnowledgeEntry
        fields = ['title', 'content', 'tags']
    
class KnowledgeSearchForm(forms.Form):
    query = forms.CharField(max_length=255, required=True)
    tags = forms.CharField(max_length=255, required=False)

class KnowledgeFilterForm(forms.Form):
    title = forms.CharField(max_length=255, required=False, label='Title')
    tags = forms.CharField(max_length=255, required=False, label='Tags')
    author = forms.ModelChoiceField(queryset=User.objects.all(), max_length=255, required=False, label='Author')
    startDate = forms.DateField(required=False, widget=forms.TextInput(attrs={'type': 'date'}), label='From Date')
    endDate = forms.DateField(required=False, widget=forms.TextInput(attrs={'type': 'date'}), label='To Date')
    