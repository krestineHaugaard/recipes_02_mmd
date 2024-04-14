import { getRecipe } from "@/utils/recipeAPI";
import { getSlugRecipe } from "@/utils/recipeAPI";

export async function generateStaticParams() {
  const pages = await getRecipe();

  return pages.map((page) => {
    return { slug: page.slug };
  });
}

export async function generateMetadata({ params }) {
  const slug = params;

  const data = await getSlugRecipe({ slug });

  return {
    title: data.name,
    description: `Here is ${data.name}`,
  };
}

export default async function RecipePage() {
  const data = await fetch(
    `https://yuisogjwvntfoxudooln.supabase.co/rest/v1/recipes?slug=eq.${slug}`,
    {
      method: "GET",
      headers: {
        apikey:
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inl1aXNvZ2p3dm50Zm94dWRvb2xuIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTA3NTE5NDUsImV4cCI6MjAyNjMyNzk0NX0.A4lJrT15zWBvm6Zm7nXbtq01CUOrjNct49-JgtQboeg",
      },
    }
  ).then((response) => response.json());

  return (
    <main>
      <h2>{data.name}</h2>
      <h3>Fremgangsmetode</h3>
      <p>{data.description}</p>
      <p>For {data.serves} pers.</p>
      <p>{data.diet}</p>
      {data.studentFriendly && <p>Denne ret er SU venlig</p>}
      <p>Den ret stammer fra {data.origin}</p>
    </main>
  );
}
