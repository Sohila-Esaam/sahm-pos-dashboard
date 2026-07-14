# 🍔 Smart Restaurant POS Dashboard

A restaurant POS dashboard built with Angular 20 to simulate live order management, kitchen monitoring, AI recommendations, and product search.

## Features

- Live orders simulation
- Kitchen load monitor
- AI assistant recommendations
- Product search
- Dashboard statistics
- Filter orders by status
- Filter orders by channel
- Offline mode detection
- Responsive design

## Tech Stack

- Angular 20
- TypeScript
- Angular Signals
- RxJS
- Bootstrap 5
- SCSS

## Getting Started

Install dependencies:

```bash
npm install
```

Run the application:

```bash
npm start
```

or

```bash
ng serve
```

Open your browser at:

```
http://localhost:4200
```

## Project Structure

```
src/app
├── core
│   ├── mocks
│   ├── models
│   └── services
├── features
│   ├── dashboard
│   ├── orders
│   ├── kitchen
│   ├── ai-assistant
│   └── product-search
```

## Notes

- Orders are simulated using RxJS intervals.
- Kitchen workload is generated dynamically.
- AI recommendations are mock-based and change according to order data.
- Offline mode pauses the simulation until the connection is restored.

## Developed By

Sohila Essam