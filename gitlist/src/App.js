import './App.css';
import Layout  from './components/layout';
import Profile from './components/profile';
import Filters from './components/filters';
import RepoList from './components/repoList';
import Search from './components/search';
import {useState, useEffect} from 'react'
import { getUser, getRepos } from './services/users';
import {useParams} from 'react-router-dom'


function App() {
  const params = useParams()
  let username = params.user
  if(!username){
    username = 'GabrielaDelPilarR'
  }
  const [user,setUser] = useState({})
  const [repos,setRepos] = useState([])

  useEffect(()=>{
    getUser(username).then(({data,isError})=>{
      if(isError){
        console.log('no hemos encontrado a este crack')
        return
      }
      setUser(data)
    })
    getRepos(username).then(({data,isError})=>{
      if(isError){
        console.log('no hemos encontrado a este crack')
        return
      }
      setRepos(data)
    })
  },[username])
  
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
