import './App.css';
import Layout  from './components/layout';
import Profile from './components/profile';
import Filters from './components/filters';
import RepoList from './components/repoList';
import Search from './components/search';
import repoData from './data/repo-data';


function App() {
  return (
    <Layout>
      <Profile>
      </Profile>
      <Filters></Filters>
      <RepoList repoList = {repoData}></RepoList>
      <Search></Search>
    </Layout>
  );
}

export default App;
