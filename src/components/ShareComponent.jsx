import React from "react";
import ShareIcon from "@mui/icons-material/Share";
import { Button } from "@mui/material";

function Share({ label, text, title }) {
    const canonical = document.querySelector("link[rel=canonical]");
    let url = canonical ? canonical.href : document.location.href;
    const shareDetails = { url, title, text };
  
    const handleSharing = async () => {
      if (navigator.share) {
        try {
          await navigator
            .share(shareDetails)
            .then(() =>
              console.log("Hooray! Your content was shared to tha world")
            );
        } catch (error) {
          console.log(`Oops! I couldn't share to the world because: ${error}`);
        }
      } else {
        // fallback code
        console.log(
            "Web share is currently not supported on this browser. Please provide a callback"
        );
      }
    };
    return (
        <>        
            <Button size="small" color="primary" onClick={handleSharing}>
               <ShareIcon />
            </Button>
        </>

    );
}

export default Share;