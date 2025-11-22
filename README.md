# Edward Alder - Personal Website

A unique, retro-inspired personal portfolio website that mimics the classic desktop operating systems of the 90s (Windows 95/98). Built with modern web technologies to deliver a nostalgic yet responsive experience.

## 🌟 Features

- **Retro Desktop Interface**: A fully functional desktop environment with a taskbar, start button, and clock.
- **Interactive Icons**: Double-click icons to open files, folders, or links.
- **Window Management**:
  - **Draggable Windows**: Move windows around the desktop.
  - **Taskbar Integration**: Minimized/Active windows appear in the taskbar.
  - **Multiple Windows**: Open multiple folders and text files simultaneously.
  - **Random Positioning**: Windows spawn at slightly random positions to prevent overlap.
- **File System Simulation**: A structured data approach to managing desktop items (files, folders, links).
- **Custom "About Me" Viewer**: A retro text editor style viewer for reading bio information.
- **Mobile Responsive**: Optimized for various screen sizes, ensuring the retro feel works on mobile devices.

## 🛠️ Tech Stack

- **Frontend Framework**: [React](https://reactjs.org/)
- **Build Tool**: [Vite](https://vitejs.dev/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Icons**: Custom SVG icons for a crisp, scalable retro look.

## 🚀 Getting Started

### Prerequisites

- Node.js (v16 or higher recommended)
- npm or yarn

### Installation

1.  Clone the repository:
    ```bash
    git clone https://github.com/eddyalder/edwardalder.dev.git
    ```
2.  Navigate to the project directory:
    ```bash
    cd edwardalder.dev
    ```
3.  Install dependencies:
    ```bash
    npm install
    ```

### Running Locally

Start the development server:

```bash
npm run dev
```

Open your browser and navigate to `http://localhost:5173` (or the port shown in your terminal).

### Building for Production

To create an optimized production build:

```bash
npm run build
```

The output will be in the `dist` directory.

## 📂 Project Structure

- `src/components`: React components (Desktop, Window, DesktopIcon, etc.)
- `src/data`: Static data files (fileSystem.js)
- `public`: Static assets (images, PDFs, favicons)

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

*Built with ❤️ and nostalgia by Edward Alder.*
