// Importa a função de criação do client Supabase via CDN
import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm'

// Cria o client com a URL e a chave fornecidas
export const supabase = createClient(
  'https://zoftetvrrzgrnubynwmw.supabase.co',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InpvZnRldHZycnpncm51Ynlud213Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDg1NjE0OTQsImV4cCI6MjA2NDEzNzQ5NH0.cLPeXEAmONYa4BziGf967EBOTLz7sJ1nZEj0qzwsJLw'
)