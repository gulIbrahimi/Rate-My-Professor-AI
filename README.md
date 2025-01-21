# Rate My Professor AI 🎓

An AI-powered application built with Next.js that helps students make informed decisions about their professors through intelligent analysis of course reviews and ratings.

## Features

- **AI-Powered Analysis**: Leverage machine learning to analyze professor reviews and provide meaningful insights
- **Real-Time Sentiment Analysis**: Understand the overall sentiment of student reviews at a glance
- **Course Rating Visualization**: Interactive charts and graphs showing professor ratings across different metrics
- **Smart Search**: Find professors and courses quickly with intelligent search suggestions
- **Responsive Design**: Fully responsive interface that works seamlessly across all devices

## Tech Stack

- **Frontend**: Next.js 14, React
- **Styling**: Tailwind CSS
- **AI/ML**: TensorFlow.js for sentiment analysis
- **Data Visualization**: Recharts
- **UI Components**: shadcn/ui
- **Deployment**: Vercel

## Getting Started

### Prerequisites

- Node.js 18.0 or later
- npm or yarn package manager

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/rate-my-professor-ai.git
cd rate-my-professor-ai
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Set up environment variables:
```bash
cp .env.example .env.local
```
Fill in your environment variables in `.env.local`

4. Start the development server:
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

5. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Project Structure

```
rate-my-professor-ai/
├── app/                  # Next.js app directory
│   ├── api/             # API routes
│   ├── components/      # Reusable React components
│   ├── lib/            # Utility functions and helpers
│   └── page.js         # Main page component
├── public/              # Static files
└── styles/              # Global styles
```

## Development

- The application uses the Next.js App Router for routing
- Components are built using React Server Components where possible
- Styling is handled through Tailwind CSS classes
- AI models are loaded and run client-side using TensorFlow.js

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

## Acknowledgments

- Built with [Next.js](https://nextjs.org/)
- UI components from [shadcn/ui](https://ui.shadcn.com/)
- Deployed on [Vercel](https://vercel.com/)

## Support

For support, please open an issue in the GitHub repository or contact the maintainers.
