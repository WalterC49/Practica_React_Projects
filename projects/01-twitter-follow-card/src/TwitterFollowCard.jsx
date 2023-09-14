import {useState} from "react"

export function TwitterFollowCard({formatUserName, userName, children, initialIsFollowing}){
    const [isFollowing, setIsFollowing] = useState(initialIsFollowing); // el estado inicial solo se inicia una vez
    // Lo mismo que arriba
    /* const state = useState(false);
    const isFollowing = state[0];
    const setIsFollowing = state[1]; */


    const text = isFollowing ? "Siguiendo" : "Seguir";
    const buttonClassName = isFollowing 
        ? "tw-follow-card-button is-following" 
        : "tw-follow-card-button" 
    
    const handleClick = ()=>{
        setIsFollowing(!isFollowing)
    }

    return (
        <article className="tw-follow-card">
            <header className="tw-follow-card-header">
                <img 
                    className="tw-follow-card-avatar" 
                    src={`https://unavatar.io/youtube/${userName}`} 
                    alt={`El avatar de ${children}`} />
                <div className="tw-follow-card-info">
                    <strong>{children}</strong>
                    <span className="tw-follow-card-infoUserName">{formatUserName(userName)}</span>
                </div>
            </header>
            {/* comentario dentro del render */}
            <aside>
                <button className={buttonClassName} onClick={handleClick}>
                    <span className="tw-follow-card-text">{text}</span>
                    <span className="tw-follow-card-unfollow">Dejar de seguir</span>
                </button>
            </aside>
        </article>
    )
}