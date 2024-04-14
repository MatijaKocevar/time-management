# Time Management Application

This application allows users to select a date and time for an informational interview, ensuring the selection excludes weekends and ensures the message has a correctly formatted date and time.

## Features

- **Date-Time Picker**: Utilizes Flatpickr to provide a user-friendly date-time selection.
- **Weekend Exclusion**: Automatically disables weekends (Saturday and Sunday) from being selectable.
- **24-Hour Format**: Configures Flatpickr to display time in a 24-hour format.
- **Today, tommorow messages**: If the user selects a date that is the next day, the message will be prepended with "tomorrow on". If the date is the same day, the message will be prepended with "today".

## Prerequisites

Before you begin, ensure you have met the following requirements:

- Node.js and npm installed (Node.js version 12.x or newer recommended).
- A modern web browser that supports ES Modules, as Vite leverages them for development.

## Installation

To install the necessary packages, follow these steps:

```bash
git clone https://github.com/MatijaKocevar/time-management
cd time-management
npm install
```

This will install all dependencies, including Flatpickr.

## Running the Application

Vite provides a fast development environment with Hot Module Replacement (HMR). To start the development server, run:

```bash
npm run dev
```

This command will start the server and open the application in your default web browser. By default, Vite serves at http://localhost:3000, but check your terminal for the exact URL.
