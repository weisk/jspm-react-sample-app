function reposForUser(username) {
  const url = `https://api.github.com/users/${username}/repos`;

  const getPage = (page) => {
    if(page > 1) {
      return fetch(`${url}?page=${page}`);
    } else {
      return fetch(url);
    }
  }

  let times = 0;
  const getRepos = (acc, page) => {
    return getPage(page).then(response => {
      if(response.status >= 300) {
        throw new Error(`${response.status} ${response.statusText}`);
        return;
      }

      const repos = acc.concat(response.json());
      const link = response.headers.get('link');
      if(link && link.indexOf('rel="next"') > -1) {
        return getRepos(repos, ++page);
      } else {
        return repos;
      }
    });
  }

  return getRepos([], 1);
}

export { reposForUser };
