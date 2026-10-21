type Offering = {title: string; description: string; activities: string[]; availability: string; href: string; action: string};
export const programmes: Record<string, {introduction: string; clubs: Offering; camps: Offering}> = {
  "docode": {
    "introduction": "For children who love asking how things work and imagining what they could make next. Docode brings coding and creative technology into school clubs and the school holidays.",
    "clubs": {
      "title": "Small ideas. Brilliant creations.",
      "description": "After-school and lunchtime coding clubs give children time to experiment, build projects and develop digital confidence. Activities vary by school and age group.",
      "activities": [
        "Create games and animations",
        "Explore Minecraft Education",
        "Try Scratch, Python and creative technology",
        "Practise problem-solving through projects"
      ],
      "availability": "Programmes for ages 5–13. Check your school’s listing for year groups, dates and availability.",
      "href": "https://www.docode.co.uk/clubs",
      "action": "Explore Docode clubs"
    },
    "camps": {
      "title": "School’s out. Ideas are in.",
      "description": "Docode’s holiday Code Camps in Wimbledon bring together coding, Minecraft, game design, digital creativity and team challenges.",
      "activities": [
        "Coding and game design",
        "Minecraft projects",
        "Digital creativity",
        "Team challenges"
      ],
      "availability": "Holiday camps are advertised for Years 3–8. See Docode for current dates, venues, prices and booking information.",
      "href": "https://www.docode.co.uk/holiday-camps",
      "action": "Explore Docode camps"
    }
  },
  "dosport": {
    "introduction": "For the energetic, the curious and children still finding their feet. DoSport focuses on an encouraging start to sport, with variety, movement and the confidence to join in.",
    "clubs": {
      "title": "A little more play in their day.",
      "description": "DoSport is developing a playful multisport programme with schools, focused on Reception–Year 2. Activities and practical arrangements are agreed with each school.",
      "activities": [
        "Ball skills, throwing and catching",
        "Target games and movement challenges",
        "Introductory football",
        "Athletics-inspired activities"
      ],
      "availability": "School partnerships and first locations are being developed. Visit DoSport for current club information and parent-interest updates.",
      "href": "https://www.dosport.co.uk/clubs",
      "action": "Explore DoSport clubs"
    },
    "camps": {
      "title": "Looking for holiday sport?",
      "description": "This is where we’ll share DoSport holiday camp information when a programme is announced. Explore DoSport’s approach to active play on its specialist website.",
      "activities": [],
      "availability": "No DoSport holiday camp dates or booking places are currently published. Check the specialist website for updates.",
      "href": "https://www.dosport.co.uk",
      "action": "Check DoSport updates"
    }
  },
  "dochess": {
    "introduction": "For children who enjoy a puzzle, a challenge or a new game to share. DoChess introduces the chessboard as a place to explore ideas, think ahead and learn together.",
    "clubs": {
      "title": "Their next move starts here.",
      "description": "A welcoming introduction to chess for primary school pupils. Children get to know the pieces, try ideas and enjoy playing respectfully with others. Year groups and activities are agreed with each school.",
      "activities": [
        "Meet the pieces and learn the moves",
        "Try a chess puzzle",
        "Think a move ahead",
        "Play a friendly game and reflect"
      ],
      "availability": "Check DoChess for current school-club information. Its clubs page does not yet list confirmed sessions or booking places.",
      "href": "https://www.dochess.co.uk/clubs",
      "action": "Explore DoChess clubs"
    },
    "camps": {
      "title": "More time at the chessboard?",
      "description": "This is where we’ll share DoChess holiday camp information when a programme is announced. In the meantime, explore the brand’s approach to learning and playing chess.",
      "activities": [],
      "availability": "No DoChess holiday camp dates or booking places are currently published. Check the specialist website for updates.",
      "href": "https://www.dochess.co.uk",
      "action": "Check DoChess updates"
    }
  }
};
