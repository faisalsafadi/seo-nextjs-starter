---
title: "My Dev Notes"
description: "A handy tool for storing and managing your coding notes, built as a Chrome extension."
date: "2025-11-16"
category: "Developer Tools"
technologies: ["JavaScript", "CSS", "HTML", "Quill.js", "Prism.js"]
featured: true
order: 3
githubURL: "https://github.com/faisalsafadi/my-dev-notes"
coverImage: "/images/open-source/dev-notes-cover.jpg"
---

## The Context

Developers often struggle to keep track of code snippets, ideas, and resources while navigating the browser. My Dev Notes was created to solve this by providing a lightweight, distraction-free environment directly within Chrome. It aims to bridge the gap between browsing and coding, ensuring that valuable knowledge is captured instantly without leaving the workflow.

## Features

- **Effortless Note-Taking:** Quickly capture code snippets, text notes, links, and images directly within your browser.
- **Flexible Categorization:** Organize your notes using customizable categories with color-coding for easy visual identification.
- **Rich Text Editing:** Format your notes with a WYSIWYG editor (Quill) to create well-structured and readable content.
- **Code Highlighting:** Enjoy syntax highlighting for code snippets, making them easier to read and understand via Prism.js.
- **Pin Important Notes:** Pin your most frequently used notes to the top of the list for quick access.
- **Powerful Search:** Easily find the notes you need with keyword search and category filtering.
- **Copy to Clipboard:** Quickly copy note content to the clipboard with a single click.

## What I Learned

Building this Chrome extension deepened my understanding of Manifest V3 architecture, specifically managing background service workers versus popup logic for state persistence. I learned how to integrate complex third-party libraries like Quill.js and Prism.js into a constrained browser environment while maintaining performance and security through DOMPurify sanitization. It reinforced the importance of designing intuitive UI patterns that minimize clicks for high-frequency developer tasks.

## Technical Highlights & Architecture

- **Rich Text Integration:** Successfully integrated Quill.js within an extension popup, handling initialization and event listeners without memory leaks.
- **Security First:** Implemented DOMPurify to sanitize HTML content before rendering user-generated notes, preventing XSS vulnerabilities common in note-taking apps.
- **Syntax Highlighting Engine:** Utilized Prism.js to dynamically load language-specific themes for code snippets based on the selected type (Code, Text, Link).

## Results & Impact

The project serves as a productivity utility for the developer community:
*   **Knowledge Retention:** Provides a centralized location to store and retrieve coding resources without switching contexts.
*   **Developer Friendly:** Offers essential features like syntax highlighting and clipboard integration tailored specifically for code-heavy notes.
*   **Open Source:** Fully open-source under the MIT License, allowing developers to audit the code or extend functionality with their own plugins.

---

