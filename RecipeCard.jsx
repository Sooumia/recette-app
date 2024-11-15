import React from "react";

const RecipeCard = ({ recipe }) => {
  return (
    <div className="w-full max-w-xs bg-white border border-gray-200 rounded-lg shadow-lg hover:shadow-2xl transform hover:scale-105 transition duration-300">
      {/* Section Image */}
      <div className="relative">
        <img
          className="w-full h-48 object-cover rounded-t-lg"
          src={recipe.strMealThumb}
          alt={recipe.strMeal}
        />
        <span className="absolute top-2 left-2 bg-blue-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow-md">
          {recipe.strCategory}
        </span>
      </div>

      {/* Section Contenu */}
      <div className="p-4">
        {/* Titre de la recette */}
        <h2 className="text-lg font-bold text-gray-800 truncate">{recipe.strMeal}</h2>
        
        {/* Détails de la recette */}
        <p className="text-sm text-gray-500 mt-2">
          Origine : <span className="font-medium">{recipe.strArea}</span>
        </p>
        <p className="text-sm text-gray-500 mt-2">
          Calories : <span className="font-medium">{recipe.calories}</span>
        </p>
        <p className="text-sm text-gray-500 mt-2">
          Temps : <span className="font-medium">{recipe.prepTime} min</span>
        </p>

        {/* Bouton Voir la recette */}
        <a
          href={recipe.strSource || "#"}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block w-full text-center bg-gradient-to-r from-blue-500 to-blue-600 text-white font-bold py-2 rounded-lg mt-4 hover:from-blue-600 hover:to-blue-700 hover:shadow-lg transition duration-200"
        >
          Voir la Recette
        </a>
      </div>
    </div>
  );
};

export default RecipeCard;
