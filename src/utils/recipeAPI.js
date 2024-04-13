const recipeApiUrl = "https://yuisogjwvntfoxudooln.supabase.co/rest/v1/recipes";
const recipeApiKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inl1aXNvZ2p3dm50Zm94dWRvb2xuIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTA3NTE5NDUsImV4cCI6MjAyNjMyNzk0NX0.A4lJrT15zWBvm6Zm7nXbtq01CUOrjNct49-JgtQboeg";

// GET

export async function getRecipe() {
  let headersList = {
    Accept: "application/json",
    apikey: recipeApiKey,
  };

  let response = await fetch(recipeApiUrl, {
    method: "GET",
    headers: headersList,
  });

  let data = await response.json();

  return data;
}

console.log(getRecipe());
