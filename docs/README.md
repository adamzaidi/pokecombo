PokéCombo
=========
ON VERCEL @ https://pokecombo-adamzaidis-projects.vercel.app


PokéCombo is a full-stack web application that allows users to build, analyze, and optimize Pokémon battle teams.
It provides real-time feedback on team composition, type coverage, and potential weaknesses using data from PokéAPI and persistent storage through Supabase.
The application is designed to support decision-making during team construction and to enhance strategic planning in competitive contexts.



Features
--------
- Team Builder: Add up to six Pokémon to form a complete team.
- Saved Teams: View previously stored teams retrieved from a Supabase database.
- Counter Checker: Input a type and return effective counter types for strategic planning.
- Battle Tips: Analyze a team’s type distribution and visualize it using a pie chart.

Target Platforms and Browsers
-----------------------------

- Google Chrome (desktop and mobile)
- Mozilla Firefox
- Safari (macOS and iOS)
- Microsoft Edge



[Developer Manual](#developer-manual)

### Installation Instructions

```
# Clone the repository
git clone https://github.com/your-username/pokecombo.git

# Navigate to the project directory
cd pokecombo

# Install dependencies (for backend)
npm install
```

### Running the Application Locally

```
# Start the Express server
node server.js
```

Then open the client/index.html file in your browser, or use a local server environment such as Live Server in VS Code.





API Documentation
-----------------

### GET /api/teams

Retrieves all saved teams from Supabase.

Example Response:
```
[
  {
    "id": 1,
    "team_name": "Balanced Squad",
    "members": ["charizard", "venusaur", "blastoise"]
  },
  ...
]
```

### POST /api/team

Saves a new team to the Supabase database.

Example Request Body:
```
{
  "teamName": "Elite Four Prep",
  "members": ["alakazam", "machamp", "gengar"]
}
```




Known Issues and Roadmap
-------------------------

### Current Limitations

- Pokémon with special forms or hyphenated names (e.g., "mr-mime", "nidoran-f") may not resolve correctly without exact spelling.
- The application does not currently support fuzzy search or autocomplete features.
- PokeAPI does not currently contain information about Pokemon with two or more forms

### Future Improvements

- Implement fuzzy search or predictive text for Pokémon entry.
- Integrate type icons for improved readability.
- Add the ability to delete or rename saved teams.
- Provide a sprite toggle between standard and shiny versions.

CREATED BY ADAM ZAIDI
