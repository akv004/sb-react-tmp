2. Creating a React + TypeScript App with Vite

Here are the commands to create a new Vite-powered React + TypeScript project:

Initialize the project using Vite’s official starter:
# Using npm:
npm create vite@latest my-react-app -- --template react-ts

# Or using yarn:
yarn create vite my-react-app --template react-ts

# Or using pnpm:
pnpm create vite my-react-app --template react-ts
my-react-app is your project name; change it if needed.
The --template react-ts part indicates React + TypeScript.
Install dependencies:
cd my-react-app
npm install
(Use yarn install or pnpm install if you prefer another package manager.)
Run development server:
npm run dev
This starts the local development server, usually on http://localhost:5173/.
Build for production:
npm run build
Vite will produce optimized files in a dist folder, ready for deployment.



