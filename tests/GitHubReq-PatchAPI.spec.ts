import {test,expect } from '@playwright/test';
import dotenv from 'dotenv';

dotenv.config();

test.only('Update repository description using PATCH request', async ({ request }) => {
        const orgName = "orgsuraj";  // Organization name (Path Parameter)
        const repoName = "repo_20_June_06"; // Repository name (Path Parameter)
        const newDescription = "Updated description via Playwright Test Second time"; 
        //const accessToken = "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";  
        if (!process.env.GITHUB_TOKEN_UPDATE) {
            throw new Error("❌ GitHub Token is missing! Set GITHUB_TOKEN in .env or terminal.");
        }
        console.log("GitHub Token:", process.env.GITHUB_TOKEN_UPDATE)
        const response = await request.patch(`https://api.github.com/repos/${orgName}/${repoName}`, {
            headers: {
                'Authorization': `Bearer ${process.env.GITHUB_TOKEN_UPDATE}`,
                'Content-Type': 'application/json'
            },
            data: {
                description: newDescription
            }
        });
    
        // Verify response status
        expect(response.status()).toBe(200);
    
        // Parse response JSON
        const responseBody = await response.json();
        console.log(responseBody);
    
        // Validate that the description was updated
        expect(responseBody.description).toBe(newDescription);
    });
