import { test, expect } from '@playwright/test';
import dotenv from 'dotenv';
import { RepoRequest, RepoResponse } from './RepoModel';

dotenv.config();

test('Create a GitHub Repository using Serialization & Deserialization', async ({ request }) => {
    const accessToken = process.env.GITHUB_TOKEN_UPDATE;
    if (!accessToken) throw new Error(" GitHub Token is missing!");

    
    const orgName = "orgsuraj";  
    const repoName = `playwright-api-${Date.now()}`;
    const newRepo = new RepoRequest(repoName, "Repo created via Playwright latest", true);

    const response = await request.post(`https://api.github.com/orgs/${orgName}/repos`, {
        headers: {
            'Authorization': `Bearer ${accessToken}`,
            'Content-Type': 'application/json'
        },
        data: JSON.stringify({
            name: newRepo.name, 
            description: newRepo.description, 
            private: newRepo.isPrivate
        }) 
    });

    expect(response.status()).toBe(201); 

    const responseBody: RepoResponse = await response.json();

    console.log("Repo Created:", responseBody);


    expect(responseBody.name).toBe(newRepo.name);
    expect(responseBody.description).toBe(newRepo.description);
    expect(responseBody.private).toBe(newRepo.isPrivate);
});
