import { test, expect } from '@playwright/test';
import dotenv from 'dotenv';

dotenv.config();

test('Update GitHub repository description using PUT', async ({ request }) => {
    const accessToken = process.env.GITHUB_TOKEN_UPDATE;
    if (!accessToken) throw new Error(" GitHub Token is missing!");

    const orgName = "orgsuraj";  
    const repoName = `playwright-repo-${Date.now()}`; 

    // Make Post request to update the repo description
    const response = await request.post(`https://api.github.com/orgs/${orgName}/repos`, {
        headers: {
            'Authorization': `Bearer ${accessToken}`,
            'Content-Type': 'application/json'
        },
        data: {
            name: repoName, 
            description: "Updated repository description using Playwright",
            private: false
        }
    });

    expect(response.status()).toBe(201); 
    const responseBody = await response.json();
    console.log("Updated Repo Details:", responseBody);
});
