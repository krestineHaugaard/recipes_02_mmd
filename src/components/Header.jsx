import Link from "next/link";
import { getRecipe } from "@/utils/recipeAPI";

export default async function Header() {
  const recipes = await getRecipe();

  return (
    <nav className="bg-black text-white p-2">
      <ul className="flex gap-2 ">
        <li>
          <Link href={"/"} prefetch={false}>
            Forside
          </Link>
        </li>

        {recipes.map((recipe) => {
          const { name, slug } = recipe;
          return (
            <li key={slug}>
              <Link href={`/${slug}`} prefetch={false}>
                {name}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
