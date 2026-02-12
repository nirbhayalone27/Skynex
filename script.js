function typeLine(box, text, delay) {
  setTimeout(() => {
    box.innerHTML += "<br>" + text;
  }, delay);
}

function startAnalysis() {
  const name = document.getElementById("name").value || "Rohan";
  const bio = document.getElementById("bio").value.toLowerCase();

  let personality = "structured thinker";
  let strategy = "formal message";
  let emotion = "stability";

  if (bio.includes("fast") || bio.includes("build")) {
    personality = "fast decision maker";
    strategy = "short direct message";
    emotion = "innovation";
  }

  const agentsBox = document.getElementById("agents");
  const messageBox = document.getElementById("message");

  agentsBox.innerHTML = "Initializing AI council...";
  messageBox.innerHTML = "";

  typeLine(agentsBox, "Personality Agent: Scanning behavior...", 800);
  typeLine(agentsBox, `Personality: ${personality}`, 1600);
  typeLine(agentsBox, `Emotion: ${emotion}`, 2400);
  typeLine(agentsBox, `Strategy: ${strategy}`, 3200);

  setTimeout(() => {
    const msg = `Hey ${name}, we noticed your mindset. We built something that could save your team hours every week.`;
    agentsBox.innerHTML += "<br>Message Agent: Generating outreach...";
    messageBox.innerHTML = `<b>Generated Message:</b><br>${msg}`;

    const speech = new SpeechSynthesisUtterance(
      "Analysis complete. Message ready."
    );
    speechSynthesis.speak(speech);
  }, 4000);
}

function automation() {
  const box = document.getElementById("automation");
  box.innerHTML = "Connecting to automation engine...";

  typeLine(box, "Lead stored", 800);
  typeLine(box, "Message queued", 1600);
  typeLine(box, "Email scheduled", 2400);
}
