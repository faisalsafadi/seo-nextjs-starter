---
title: "Loto Project"
description: "A web-based application exploring lottery mechanics, built with a focus on clean architecture and interactive UI."
date: "2026-11-16"
category: "Full-Stack"
technologies: ["Python", "Streamlit", "SQLite", "Data Science"]
featured: true
order: 2
githubURL: "https://github.com/faisalsafadi/loto"
coverImage: "/images/open-source/loto-cover.png"
---

## The Context

This project was built as a technical exploration into creating an interactive, state-driven web application. It serves as both a portfolio piece demonstrating statistical rigor and a research tool for auditing lottery mechanics without making false promises of prediction.

## Features

- **Interactive User Interface:** A Streamlit-based dashboard allowing users to visualize draw frequencies, gaps, and temporal patterns in real-time.
- **Clean, Maintainable Code Structure:** Modular Python backend with strict separation between data ingestion, analysis logic, and visualization components.
- **Responsive Design:** Optimized for desktop and tablet use, ensuring accessibility across different devices.

## What I Learned

This project deepened my understanding of building robust statistical engines where data integrity is paramount, specifically managing state-driven analysis pipelines that separate hypothesis testing from visualization. I learned how to architect a clean separation between heavy computational logic (Python/SQLite) and interactive frontend layers (Streamlit), ensuring that the core algorithmic integrity remains untouched by UI interactions.

## Technical Highlights & Architecture

- **Data Integrity:** Implemented an append-only data structure to prevent tampering with historical draw records, adhering to strict scientific standards.
- **Statistical Guardrails:** Integrated multiple-testing corrections (FDR) and Monte-Carlo simulations to validate uniformity assumptions against pure chance.
- **Hypothesis Registry:** Built a system for pre-registering hypotheses before analysis begins, preventing p-hacking and ensuring reproducibility in the research engine.

## Results & Impact

The project demonstrates a commitment to scientific honesty in software development:
*   **No Predictive Power:** Confirmed that no statistical model (uniform random, smoothed frequency, logistic regression) outperformed chance on 3,155+ draws.
*   **Audit Tool:** Provides a transparent environment for others to audit lottery mechanics without bias or data leakage.
*   **Open Source:** Fully MIT-licensed and available for community review and contribution.

---

