import { useEffect } from "react";

function ElevenLabsBot() {
  useEffect(() => {
    
    if (!document.getElementById("elevenlabs-widget-script")) {
      const script = document.createElement("script");
      script.src = "https://unpkg.com/@elevenlabs/convai-widget-embed";
      script.async = true;
      script.type = "text/javascript";
      script.id = "elevenlabs-widget-script"; 
      document.body.appendChild(script);
    }
  }, []);

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <elevenlabs-convai agent-id="XZHBFOXxOANHall5VVE1"></elevenlabs-convai>
    </div>
  );
}

export default ElevenLabsBot;



















// import { useEffect } from "react";

// function ElevenLabsBot() {
//   useEffect(() => {
//     const script = document.createElement("script");
//     script.src = "https://unpkg.com/@elevenlabs/convai-widget-embed";
//     script.async = true;
//     script.type = "text/javascript";
//     document.body.appendChild(script);

//     return () => {
//       document.body.removeChild(script);
//     };
//   }, []);

//   return (
//     <div className="fixed bottom-4 right-4 z-50">
//       <elevenlabs-convai agent-id="XZHBFOXxOANHall5VVE1"></elevenlabs-convai>
//     </div>
//   );
// }

// export default ElevenLabsBot;












// import { useEffect } from "react";

// export default function ElevenLabsBot() {
//   useEffect(() => {
//     const script = document.createElement("script");
//     script.src = "https://unpkg.com/@elevenlabs/convai-widget-embed";
//     script.async = true;
//     script.type = "text/javascript";
//     document.body.appendChild(script);

//     return () => {
//       document.body.removeChild(script);
//     };
//   }, []);

//   return (
//     <div className="fixed bottom-4 right-4 z-50">
//       <elevenlabs-convai agent-id="XZHBFOXxOANHall5VVE1"></elevenlabs-convai>
//     </div>
//   );
// }
