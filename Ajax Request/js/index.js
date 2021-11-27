const API_EXAMPLE = {
    "total_count": 5,
    "incomplete_results": false,
    "items": [
      {
        "id": 68744309,
        "node_id": "MDEwOlJlcG9zaXRvcnk2ODc0NDMwOQ==",
        "name": "dplyr-patch",
        "full_name": "MarcusWalz/dplyr-patch",
        "private": false,
        "owner": {
          "login": "MarcusWalz",
          "id": 903191,
          "node_id": "MDQ6VXNlcjkwMzE5MQ==",
          "avatar_url": "https://avatars.githubusercontent.com/u/903191?v=4",
          "gravatar_id": "",
          "url": "https://api.github.com/users/MarcusWalz",
          "html_url": "https://github.com/MarcusWalz",
          "followers_url": "https://api.github.com/users/MarcusWalz/followers",
          "following_url": "https://api.github.com/users/MarcusWalz/following{/other_user}",
          "gists_url": "https://api.github.com/users/MarcusWalz/gists{/gist_id}",
          "starred_url": "https://api.github.com/users/MarcusWalz/starred{/owner}{/repo}",
          "subscriptions_url": "https://api.github.com/users/MarcusWalz/subscriptions",
          "organizations_url": "https://api.github.com/users/MarcusWalz/orgs",
          "repos_url": "https://api.github.com/users/MarcusWalz/repos",
          "events_url": "https://api.github.com/users/MarcusWalz/events{/privacy}",
          "received_events_url": "https://api.github.com/users/MarcusWalz/received_events",
          "type": "User",
          "site_admin": false
        }
    }
    ]};

/* Practice a sample AJAX REQUEST from the GITHUB API https://api.github.com/search/repositories?q=dpylr&sort=forks

/* First define a function to do all AJAX REQUEST calls this SendRequest 

Send the request using the URL above. Then encode the json as a promise. 
 
Once the request was received. 

Catch the promise. Inside the prmoise chains rember to catch an error

that may happen inside the process of the AJAX requests. Log out the prmoise returned

you should see   */

let SendRequest = ()  =>{
    return(fetch("https://api.github.com/search/repositories?q=dpylr&sort=forks"))
    .then(promise =>{
        JSON.stringify(promise);
       return promise.json();
    })
    .then(promise => {
        console.log(promise.items.name);
        let p =  document.createElement('p');
        p.textContent = promise.items;
        let root =  document.querySelector('#records');
      root.appendChild(p);
      
      })
    .then(err =>{
        console.log(err);
    
})

}

SendRequest();