import React, { useState } from "react";
import SearchBar from "./SearchBar";
import RecipeCard from "./RecipeCard";

const App = () => {
  const [recipes, setRecipes] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");
  const [sortOption, setSortOption] = useState("");

  // Récupérer les recettes
  const fetchRecipes = async (query) => {
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`;
    try {
      const response = await fetch(url);
      const data = await response.json();

      if (data.meals) {
        const enrichedRecipes = data.meals.map((recipe) => ({
          ...recipe,
          prepTime: Math.floor(Math.random() * 50) + 10,
          calories: Math.floor(Math.random() * 500) + 200,
        }));
        setRecipes(enrichedRecipes);
        setErrorMessage("");
      } else {
        setRecipes([]);
        setErrorMessage("Aucune recette trouvée. Essayez un autre mot-clé.");
      }
    } catch (error) {
      setErrorMessage("Une erreur s'est produite. Veuillez réessayer.");
    }
  };

  const sortRecipes = (option) => {
    setSortOption(option);
    const sortedRecipes = [...recipes];
    if (option === "calories") {
      sortedRecipes.sort((a, b) => a.calories - b.calories);
    } else if (option === "time") {
      sortedRecipes.sort((a, b) => a.prepTime - b.prepTime);
    }
    setRecipes(sortedRecipes);
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Header */}
      <header className="bg-gradient-to-r from-blue-800 to-blue-600 shadow-md text-white text-center py-6">
        <h1 className="text-4xl font-extrabold tracking-wide">
          <span className="text-yellow-400">Recette</span> Finder
        </h1>
      </header>

      {/* Contenu Principal */}
      <main className="container mx-auto p-6">
        <SearchBar onSearch={fetchRecipes} />
        {/* Dropdown de tri */}
        {recipes.length > 0 && (
          <div className="flex justify-end mt-4">
            <select
              className="border border-gray-300 p-3 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={sortOption}
              onChange={(e) => sortRecipes(e.target.value)}
            >
              <option value="">Trier par...</option>
              <option value="calories">Calories</option>
              <option value="time">Temps de préparation</option>
            </select>
          </div>
        )}
        {/* Cartes de recettes */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
          {recipes.map((recipe) => (
            <RecipeCard key={recipe.idMeal} recipe={recipe} />
          ))}
        </div>
        {/* Message d'erreur */}
        {errorMessage && (
          <p className="text-center text-red-600 text-lg mt-10">{errorMessage}</p>
        )}
      </main>

      {/* Footer */}
      <footer className="bg-blue-800 text-white text-center py-4 mt-6">
        <p>© 2024 Recette Finder. Tous droits réservés.</p>
      </footer>
    </div>
  );
};

export default App;
