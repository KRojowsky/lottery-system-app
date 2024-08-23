from django.contrib import admin
from .models import Member, ContactMessage

@admin.register(Member)
class MemberAdmin(admin.ModelAdmin):
    list_display = ('phone', 'email', 'receipt')
    search_fields = ('phone', 'email', 'receipt')

@admin.register(ContactMessage)
class ContactMessageAdmin(admin.ModelAdmin):
    list_display = ('name', 'email', 'created_at')
    search_fields = ('name', 'email', 'message')
    readonly_fields = ('created_at',)
