import './App.css';
import Layout  from './components/layout';
import Profile from './components/profile';
import Filters from './components/filters';
import RepoList from './components/repoList';
import Search from './components/search';
import repoData from './data/repo-data';
import {useState, useEffect} from 'react'
import { getUser, getRepos } from './services/users';


function App() {
  const [user,setUser] = useState({})
  const [repos,setRepos] = useState([])

  useEffect(()=>{
    getUser('GabrielaDelPilarR').then(({data,isError})=>{
      if(isError){
        console.log('no hemos encontrado a este crack')
        return
      }
      setUser(data)
    })
  },[])

  useEffect(()=>{
    getRepos('GabrielaDelPilarR').then(({data,isError})=>{
      if(isError){
        console.log('no hemos encontrado a este crack')
        return
      }
      setRepos(data)
    })
  },[])
  
  return (
    <Layout>
      <Profile {...user}>
      </Profile>
      <Filters></Filters>
      <RepoList repoList = {repos}></RepoList>
      <Search></Search>
    </Layout>
  );
}

export default App;
