import {test,expect, request,BrowserContext } from '@playwright/test';


test.only('Delete specific repository with repo name', async ({ request }) => {
        const orgName = "orgsuraj";  // Organization name (Path Parameter)
        const repoName = "repo_20_May_15"; // Repository name (Path Parameter)
        const accessToken = "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";  // Replace with your actual GitHub token
    
        // Make PATCH request with headers passed directly
        const response = await request.delete(`https://api.github.com/repos/${orgName}/${repoName}`, {
            headers: {
                'Authorization': `Bearer ${accessToken}`,
                'Content-Type': 'application/json'
            },
        });
    
        // Verify response status
        expect(response.status()).toBe(204);
    
        // Parse response JSON
        // const responseBody = await response.json();
        // console.log(responseBody);   
    });
