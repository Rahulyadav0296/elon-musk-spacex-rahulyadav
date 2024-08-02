import React from "react";
import ActiveLink from "./ActiveLink";
import "./Links.css";

function Links({ launch }) {
  return (
    <div className="links">
      <p className="label">LINKS</p>
      <div className="link-icons">
        <ActiveLink
          launch={launch.links.wikipedia}
          item="wikipedia-w"
          link={launch.links.wikipedia}
        />
        <ActiveLink
          launch={launch.links.youtube_id}
          item="youtube"
          link={`https://www.youtube.com/watch?v=${launch.links.youtube_id}`}
        />
        <ActiveLink
          launch={launch.links.reddit_campaign}
          item="reddit-alien"
          link={launch.links.reddit_campaign}
        />
      </div>
    </div>
  );
}

export default Links;
