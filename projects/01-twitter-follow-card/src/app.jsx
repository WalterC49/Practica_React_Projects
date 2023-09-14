import "./App.css"
import { TwitterFollowCard } from './TwitterFollowCard';

export function App(){
    const formatUserName = (userName)=> `@${userName}`

    const users = [{userName:"LoneWolf4991", name:"Walter Marcos Crespín", isFollowing:true},
      {userName:"midudev", name:"Walter Marcos Crespín", isFollowing:false},
      {userName:"casey1", name:"Casey", isFollowing:true},
      {userName:"Lunaqwe", name:"Luna", isFollowing:false}]


    return (
        <section className='App'>
          {
            users.map(({userName,name,isFollowing}) => (
                <TwitterFollowCard
                formatUserName={formatUserName}
                key={userName}
                userName={userName}
                initialIsFollowing={isFollowing}>
                  {name}
                </TwitterFollowCard>
              )
            )
          }
        </section>
    )
}