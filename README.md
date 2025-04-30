# Twitter Clone

A Twitter clone built with Next.js and Supabase.

## Features

- User authentication
- Tweet creation and deletion
- Real-time updates
- User profiles
- Follow/unfollow functionality
- Like/unlike tweets
- Responsive design

## Tech Stack

- Next.js 14
- TypeScript
- Supabase
- Tailwind CSS
- Heroicons

## Getting Started

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env.local` file in the root directory with the following variables:
   ```
   NEXT_PUBLIC_SUPABASE_URL=your-supabase-project-url
   NEXT_PUBLIC_SUPABASE_ANON_KEY=your-supabase-anon-key
   ```

4. Run the development server:
   ```bash
   npm run dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) in your browser

## Project Structure

```
src/
├── app/              # Next.js app directory
├── components/       # Reusable components
├── lib/             # Utility functions and configurations
└── types/           # TypeScript type definitions
```

## Contributing

Feel free to submit issues and enhancement requests.

## License

This project is licensed under the MIT License.
