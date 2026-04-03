import { test, expect } from '@playwright/test';

test.describe('Nexus Brain - Landing Page', () => {
  
  test('should load the landing page successfully', async ({ page }) => {
    // Goes to your Vercel URL
    await page.goto('/');

    // Check if the title "Nexus Brain" is visible
    await expect(page.getByText('Nexus Brain', { exact: true })).toBeVisible();
    
    // Verify the "Get Started" or "Login" button exists
    const loginBtn = page.getByRole('button', { name: /get started|login|sign in/i });
    await expect(loginBtn).toBeVisible();
  });

  test('should show login modal/page when clicking login', async ({ page }) => {
    await page.goto('/');
    
    // Click the login button
    const loginBtn = page.getByRole('button', { name: /get started|login|sign in/i });
    await loginBtn.first().click();

    // Verify we are on the auth page or the modal is open
    // Adjust 'Email' to whatever placeholder you use in your Supabase login
    await expect(page.locator('input[type="email"]')).toBeVisible();
  });
});