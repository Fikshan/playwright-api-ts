import {test,expect, request,BrowserContext } from '@playwright/test';
//import { assertThat, hasProperty, hasSize } from 'jest-hamcrest';

test('Get all repositories', async()=>{

    const apiContext = await request.newContext()
    const getAllRepos = await apiContext.get('https://api.github.com/orgs/orgsuraj/repos')
    console.log(await getAllRepos.json());
})

test.only('Get all repositories with Path Param and querry Param', async()=>{

    const orgName = "orgsuraj";  // Path Parameter
    const queryParams = new URLSearchParams({ per_page: "1" }); // Query Parameter
    
    // Make API request
    const apiContext = await request.newContext()
    const getAllRepos = await apiContext.get(`https://api.github.com/orgs/${orgName}/repos?${queryParams.toString()}`)
    // Verify the response
    const responseBody = await getAllRepos.json();
    console.log(responseBody);
    expect(responseBody.length).toBeLessThanOrEqual(1);
})

test.only('Get specific repositories with Org Name and Repo name ', async()=>{

    const orgName = "orgsuraj";  // Path Parameter
    const repoName = "repo_18_June_06" //Path Parameter
    const queryParams = new URLSearchParams({ per_page: "1" }); // Query Parameter
    
    // Make API request
    const apiContext = await request.newContext()
    const getAllRepos = await apiContext.get(`https://api.github.com/repos/${orgName}/${repoName}?${queryParams.toString()}`)
    // Verify the response
    const responseBody = await getAllRepos.json();
    console.log(responseBody);
    // Verify the response status
    expect(getAllRepos.status()).toBe(200);
    //Check if the response contains the correct repository name
    expect(responseBody.name).toBe(repoName);

    // assertThat(response.status(), 200);
    // assertThat(responseBody, hasSize(1));
    // assertThat(responseBody[0], hasProperty("name"));
})