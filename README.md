Movie App — Challenge 6 Bootcamp

A simple movie browsing application built with React, TypeScript, and React Query.  
This app displays trending movies, new releases, and detailed movie information with trailer support.

---

Features

- Hero section with featured trending movie  
- Trending Now & New Release sections  
- Load More pagination per section  
- Watch Trailer (YouTube integration)  
- Movie Detail page with full hero layout  
- Back navigation  
- Data fetching & caching using React Query  
- Responsive layout (mobile, tablet, desktop)

---

Tech Stack

- Frontend : React + TypeScript  
- Routing : React Router DOM  
- Data Fetching : TanStack React Query  
- Styling : Tailwind CSS  
- API : The Movie Database (TMDB) API  
- Build Tool : Vite  

---

Project Structure

src/
├── components/
│ ├── home/ # Hero component
│ ├── movie/ # MovieCard, MovieRow, MovieSection
│ ├── layout/ # AppLayout, Header
│ └── common/ # Loading component
│
├── pages/
│ ├── HomePage.tsx
│ └── MovieDetailPage.tsx
│
├── services/
│ └── movieApi.ts # API calls
│
├── types/
│ └── movie.ts # Type definitions


---

API Integration

This project uses The Movie Database (TMDB) API.

Endpoints used:

- Trending Movies  
- Now Playing / New Release  
- Movie Detail  
- Movie Videos (Trailer)

---

Setup & Installation

1. Clone the repository

```bash
git clone <repository-url>
cd movie-app

2. Install dependencies

    npm install

3. Create .env file

    VITE_TMDB_API_KEY=your_api_key_here

4. Run development server

    npm run dev

5. Open browser at:

   http://localhost:5173

Routing
| Path         | Description                       |
| ------------ | --------------------------------- |
| `/`          | Home page (Hero + Movie sections) |
| `/movie/:id` | Movie detail page                 |


Architecture Notes
  
  1. Data fetching handled by React Query with proper query keys per section

  2. Each section maintains its own pagination state

  3. Reusable components:

      a. MovieSection (section wrapper)

      b. MovieRow (data fetching & grid)

      c. MovieCard (UI item)

Future Improvements

    1. Skeleton loading animation

    2. Infinite scroll pagination

    3. Search feature

    4. Genre filtering

    5. Favorite / bookmark feature


Author

Purwita Musaffa