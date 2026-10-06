/* Session 2 – JSX & ComponentsTopics to Cover:JSX syntax and rules.Function vs Class components.Demo:Render “Hello {username}” component.  */


import React from 'react'
import UserGreeting from './UserGreeting'
import UserGreetingClass from './UserGreetingClass'
import MiniProfile from './MiniProfile'

function Session2() {
  return (
    <div>
        <h3>This is functional component</h3>
        <UserGreeting username={"Komal"}/><br/>

        <h3>This is class component</h3>
        <UserGreetingClass username={"Komal"}/><br/>
        <MiniProfile imgUrl={"https://tamilnaducouncil.ac.in/wp-content/uploads/2020/04/dummy-avatar.jpg"} name="Komal" status={"Good vibes only"}/><br/>

    </div>
  )
}

export default Session2