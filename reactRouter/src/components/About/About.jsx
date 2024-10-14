import React, { useEffect, useState } from 'react'
import {useLoaderData} from 'react-router-dom'

function About() {

  const [data, setData] = useState({});

  
  useEffect(() => {
    fetch('https://api.github.com/users/subediDarshan')
    .then((res) => res.json())
    .then((res) => setData(res))
    
  }, [])
  
  
  const gitHubData = useLoaderData();

  return (
    <>
      <div>About Us</div>
      <div>GitHub Followers: {data.followers}</div>
      <div>GitHub username: {gitHubData.login}</div>
    </>
  )
}

export default About

export const usernameLoader = async () => {
  const res = await fetch('https://api.github.com/users/subediDarshan');
  return res.json();
}