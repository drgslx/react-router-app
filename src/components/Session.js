import { useParams } from "react-router";
import { getSession } from "../api";

export default function Session() {
  // For demonstration purposes, you can extract 'catId' and 'sessionId' from the URL
  const catId = "3d-printing-and-design";
  const sessionId = "3d-printing-metal";

  // Fetch session data based on 'catId' and 'sessionId'
  const { name, desc, speaker } = getSession({ catId, sessionId });

  return (
    <>
    
      {/* Display session details */}
      <h3>{name}</h3>
      <p>{desc}</p>

      <h4>{speaker.name}</h4>
      <span>
        {speaker.title} at {speaker.org}
      </span>
      <p>{speaker.bio}</p>
    </>
  );
}