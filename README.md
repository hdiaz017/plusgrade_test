# Tax Calculator App

Frontend application that calculates total income tax based on annual income and tax year,
using a provided dockerized API with marginal tax brackets.

This project was built as a take-home assignment focusing on clean architecture, error handling, testability, and production-ready patterns.

---

## 🛠 Tech Stack

- React
- TypeScript
- Vite
- pnpm
- Axios
- Testing Library
- Vitest
- Tailwind CSS
- Shadcn

---

## 📦 Package Manager

This project uses **pnpm** for faster installs and better dependency management.

# Run the FrontEnd

Please run this commands to run dev environment

- pnpm install
- pnpm run dev

# Run the API

Please run this commands tu run the api. Api will be available at http://localhost:5001/tax-calculator

- docker pull ptsdocker16/interview-test-server
- docker run --init -p 5001:5001 -it ptsdocker16/interview-test-server

# Run tests

Please run this command to run tests.

- pnpm run test
