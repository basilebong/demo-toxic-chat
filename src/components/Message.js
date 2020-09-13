import React, { useState } from "react";
import { image } from "faker";

// Get a random avatar image
const avatar = image.avatar();

const isToxic = async (model, message) => {
  // Get predictions
  const predictions = await model.classify(message);
  // Check if there are toxic messages in the predictions
  // Match is true when the message is toxic
  const toxicPredictions = predictions.filter((p) => p.results[0].match);
  return toxicPredictions.length > 0;
};

const Message = ({ text, model }) => {
  const [toxic, setToxic] = useState();
  const [loading, setLoading] = useState(true);

  React.useEffect(() => {
    const getToxic = async () => {
      // Get toxicity of message
      const textToxicity = await isToxic(model, text);
      // Save toxicity into state
      setToxic(textToxicity);
      // Display toxicity
      setLoading(false);
    };
    getToxic();
  });

  return (
    <div className="chat__message">
      <img src={avatar} alt="avatar" className="chat__message__avatar" />
      <span className="chat__message__text">{text}</span>
      {loading ? (
        <span className="badge --loading">Loading toxicity..</span>
      ) : null}
      {!loading && toxic ? <span className="badge --toxic">Toxic</span> : null}
      {!loading && !toxic ? (
        <span className="badge --friendly">Not toxic :)</span>
      ) : null}
    </div>
  );
};

export default Message;
