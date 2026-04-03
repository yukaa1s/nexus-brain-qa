# 🤖 Nexus Brain - QA Automation Framework

This repository contains a professional **End-to-End (E2E) Testing Framework** designed to validate the stability and user experience of the **Nexus Brain RAG Application**.

## 🚀 Project Overview
- **Target Application:** [Nexus Brain](https://vercel.app)
- **Core Functionality:** AI-powered document chat and knowledge management.
- **Goal:** To automate critical user paths (Authentication, Navigation, and AI Retrieval) across multiple browser engines.

## 🛠 Tech Stack
- **Framework:** [Playwright](https://playwright.dev) (TypeScript)
- **CI/CD:** GitHub Actions (Workflow configured in `.github/workflows/playwright.yml`)
- **Reporting:** Playwright HTML Reports
- **Browsers:** Chromium (Chrome), Firefox, and WebKit (Safari)

## 🧪 Testing Strategy
- **Cross-Browser Validation:** Every test is executed on three major browser engines to ensure UI compatibility.
- **Fuzzy Selectors:** Used Regex-based matching to handle dynamic React components and high-latency AI responses.
- **CI/CD Integration:** Automated triggers on every code push to ensure continuous quality.

## ⚙️ How to Run Locally

1. Clone this repository:
   ```bash
   git clone https://github.com/your-org/nexus-brain-qa.git
   cd nexus-brain-qa
   ```

2. Install dependencies:
   ```bash
   npm ci
   ```

3. Install Playwright browsers:
   ```bash
   npx playwright install
   ```

4. Run tests:
   ```bash
   npx playwright test
   ```

## 📊 Viewing Reports

After running tests, view the HTML report:
```bash
npx playwright show-report
```

## 📝 Test Coverage

Current test suites include:
- **Landing Page:** Validates page load and navigation elements
- **Authentication:** Tests login flow and form visibility
- **Cross-browser:** Runs on Chromium, Firefox, and WebKit

## 🔧 Configuration

- **Base URL:** Configured in `playwright.config.ts`
- **CI/CD:** GitHub Actions workflow triggers on push/PR to main/master
- **Test Files:** Located in `/tests` directory

## 📁 Project Structure

```
nexus-brain-qa-automation/
├── .github/workflows/     # CI/CD configuration
├── tests/                 # Test specifications
├── playwright.config.ts   # Playwright configuration
├── package.json           # Dependencies
└── README.md             # This file
```

---

*Built with Playwright for reliable, fast, and cross-browser testing.*
