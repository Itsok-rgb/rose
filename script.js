// CONSTANT: loved one's name
const LOVED_ONE = "Jaan";

// Elements
const startJourneyBtn = document.getElementById("startJourneyBtn");
const secretHeart = document.getElementById("secretHeart");

const screenStart = document.getElementById("screen-start");
const screenGarden = document.getElementById("screen-garden");
const screenReasons = document.getElementById("screen-reasons");

const dynamicName = document.getElementById("dynamicName");
const roseGrid = document.getElementById("roseGrid");
const surpriseMessageEl = document.getElementById("surpriseMessage");
const progressFill = document.getElementById("progressFill");
const nextToReasonsBtn = document.getElementById("nextToReasonsBtn");

const reasonsGrid = document.getElementById("reasonsGrid");
const openLetterBtn = document.getElementById("openLetterBtn");

const letterOverlay = document.getElementById("letterOverlay");
const closeLetterBtn = document.getElementById("closeLetterBtn");
const letterNameLine = document.getElementById("letterNameLine");
const letterBody = document.getElementById("letterBody");
const confettiBtn = document.getElementById("confettiBtn");

const secretNoteOverlay = document.getElementById("secretNoteOverlay");
const closeSecretNoteBtn = document.getElementById("closeSecretNoteBtn");

const petalLayer = document.getElementById("petal-layer");

// Data – personalised to Jaan
const surpriseMessages = [
  "The roses can’t hug you. I can and that too unlimited times. Just saying.",
  "The roses smells nice but You smell like home, So come to my dhaure..hehe.",
  "Jaan, somewhere between our random talks and shared silences, you quietly became my favourite feeling.",
  "I was told that roses impress girlfriends. Kindly confirm the same.",
  "The roses have thorns. I don’t. I’m fully harmless and obsessed...Huehue",
  "You turn ordinary moments into memories I replay like my favourite song, Jaan.",
  "Are you French? Because Eiffel for you...Huehue lob u too"
];

const reasons = [
  "Because when you smile, Jaan, the whole world around me softens, and suddenly nothing feels that hard anymore.",
  "Because You listen – not just to my words, but to the quiet things I don’t know how to say, Jaan.",
  "Because you make me feel safe being exactly who I am and your smile fixes things you don’t even know are broken.",
  "You remember tiny things I mentioned once and bring them back like little surprises – that’s how carefully you hold me in your mind.",
  "Your laugh makes everything feel lighter. I could spend a lifetime trying to make you laugh again, Jaan.",
  "Because your presence calms my chaos and you see my flaws and choose to stay anyway every single day.",
  "Because I stopped looking once you walked in...Huehue...And even if I have to choose again, I wouldn’t even hesitate..",
  "You never think twice before spending on me, not because you have to, but because your heart chooses to, and that makes me feel so loved and cherished.",
  "Because every version of my future that makes me smile has you in it, standing right there with me, Jaan."
];

const letterParagraphs = [
  "Jaan, on this Rose Day, I didn’t want to just send you a picture of a flower and call it a wish. I wanted to build a tiny world for you – a little garden where every petal is a quiet confession of how much you mean to me.",
  "Somewhere between our random chats, shared jokes and facts,your late-night story tellings, and the way you say the simplest things – you became my comfort. My heart started saving moments with you like favourite photos, replaying them just to feel close to you again.",
  "You’ve carried your own storms, your own scars, your own battles, and still you choose to be kind with everyone. Watching you be strong without losing your softness is one of the most strongest and beautiful things I’ve ever seen, Jaan. You are proof that gentle doesn’t mean weak – it means unbelievably brave.",
  "With you, love doesn’t feel like a movie scene or some distant fantasy. It feels real. It feels like warm tea after a long day, like a message that arrives exactly when I need it, like the way my chest relaxes the moment I see your name on the screen. It feels like home, and that home is you.",
  "I know you never stop talking, and honestly, I sometimes pretend to get annoyed… but the truth is, your constant chatter is my favorite sound in the world. Every word, every laugh, every little story— it makes my day brighter",
  "So here is my quiet promise wrapped gently inside this digital rose garden, Jaan: I will keep choosing you. I will be there, learning how to love you better, one day at a time.",
  "Happy Rose Day to the girl who make my world colorful. You are not just a part of my life – you are my favourite part of it. And no matter how many roses this world has, you will always be the most beautiful one to me."
];

// Helpers
function getDisplayName() {
  return LOVED_ONE;
}

function switchPanel(from, to) {
  if (!from || !to) return;
  from.classList.remove("panel-active");
  to.classList.add("panel-active");
}

function randomItem(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

/* Upward petal animation (background) */
function spawnPetal() {
  if (!petalLayer) return;

  const petal = document.createElement("div");
  petal.className = "petal";

  const startLeft = Math.random() * 100;
  const riseDuration = 7 + Math.random() * 6;
  const delay = Math.random() * 3;

  petal.style.left = startLeft + "vw";

  const drift = (Math.random() - 0.5) * 40;
  const rotate = (Math.random() - 0.5) * 80;

  // Start from bottom and rise upwards
  petal.animate(
    [
      { transform: "translate3d(0, 110vh, 0) rotate(0deg)", opacity: 0 },
      { opacity: 1 },
      {
        transform: `translate3d(${drift}vw, -10vh, 0) rotate(${rotate}deg)`,
        opacity: 0.1
      }
    ],
    {
      duration: riseDuration * 1000,
      delay: delay * 1000,
      easing: "linear",
      fill: "forwards"
    }
  );

  petalLayer.appendChild(petal);

  setTimeout(() => {
    petal.remove();
  }, (riseDuration + delay + 0.5) * 1000);
}

function startPetals(count = 18) {
  for (let i = 0; i < count; i++) {
    spawnPetal();
  }
  setInterval(() => spawnPetal(), 2000);
}

/* Rose burst from the sky (button) */
function launchRoseBurst() {
  const pieces = 60; // number of roses

  for (let i = 0; i < pieces; i++) {
    const rose = document.createElement("div");
    rose.className = "rose-burst";
    rose.textContent = "🌹";

    const left = Math.random() * 100;
    const delay = Math.random() * 0.6;
    const fallDuration = 2.5 + Math.random() * 1.5;
    const startScale = 0.7 + Math.random() * 0.4;
    const endScale = 0.6 + Math.random() * 0.3;

    rose.style.left = left + "vw";
    rose.style.top = "-10vh";

    document.body.appendChild(rose);

    rose.animate(
      [
        {
          transform: `translate3d(0,0,0) scale(${startScale})`,
          opacity: 0
        },
        {
          transform: `translate3d(${(Math.random() - 0.5) * 10}vw, 20vh, 0) scale(${startScale + 0.2})`,
          opacity: 1
        },
        {
          transform: `translate3d(${(Math.random() - 0.5) * 25}vw, 110vh, 0) scale(${endScale})`,
          opacity: 0
        }
      ],
      {
        duration: fallDuration * 1000,
        delay: delay * 1000,
        easing: "cubic-bezier(0.15, 0.6, 0.3, 1)",
        fill: "forwards"
      }
    );

    setTimeout(() => rose.remove(), (fallDuration + delay + 0.5) * 1000);
  }
}

/* Garden setup */
function buildGarden() {
  if (!roseGrid) return;

  const captions = [
    "Tap me, Jaan",
    "I’m hiding a whisper",
    "Hold me gently",
    "A secret for you",
    "Smell this moment",
    "Bloom with me, Jaan"
  ];

  for (let i = 0; i < 6; i++) {
    const card = document.createElement("div");
    card.className = "rose-card";

    const stem = document.createElement("div");
    stem.className = "rose-stem";

    const bud = document.createElement("div");
    bud.className = "rose-bud";

    const leafLeft = document.createElement("div");
    leafLeft.className = "leaf left";

    const leafRight = document.createElement("div");
    leafRight.className = "leaf right";

    const glow = document.createElement("div");
    glow.className = "rose-glow";

    const caption = document.createElement("div");
    caption.className = "rose-caption";
    caption.textContent = captions[i % captions.length];

    stem.appendChild(leafLeft);
    stem.appendChild(leafRight);

    card.appendChild(stem);
    card.appendChild(bud);
    card.appendChild(glow);
    card.appendChild(caption);

    card.addEventListener("click", () => {
      setSurpriseMessage(randomItem(surpriseMessages));
      highlightActiveRose(card);
    });

    roseGrid.appendChild(card);
  }
}

function highlightActiveRose(activeCard) {
  const all = Array.from(document.querySelectorAll(".rose-card"));
  all.forEach(card => card.classList.remove("active"));
  activeCard.classList.add("active");
}

/* Surprise message */
function setSurpriseMessage(text) {
  if (!surpriseMessageEl) return;
  surpriseMessageEl.textContent = text;
}

/* Reasons grid */
function buildReasons() {
  if (!reasonsGrid) return;

  reasonsGrid.innerHTML = "";
  reasons.forEach((reason, idx) => {
    const card = document.createElement("div");
    card.className = "reason-card locked";

    const label = document.createElement("div");
    label.className = "reason-label";
    label.textContent = `Reason ${idx + 1}`;

    const text = document.createElement("div");
    text.className = "reason-text";
    text.textContent = reason;

    card.appendChild(label);
    card.appendChild(text);

    card.addEventListener("click", () => {
      card.classList.remove("locked");
      card.classList.add("revealed");
      card.animate(
        [
          { transform: "scale(1)" },
          { transform: "scale(1.03)" },
          { transform: "scale(1)" }
        ],
        { duration: 180, easing: "ease-out" }
      );
    });

    reasonsGrid.appendChild(card);
  });
}

/* Journey buttons */
if (startJourneyBtn) {
  startJourneyBtn.addEventListener("click", () => {
    if (dynamicName) dynamicName.textContent = getDisplayName();
    switchPanel(screenStart, screenGarden);
    if (progressFill) progressFill.style.width = "40%";
  });
}

if (nextToReasonsBtn) {
  nextToReasonsBtn.addEventListener("click", () => {
    switchPanel(screenGarden, screenReasons);
    if (progressFill) progressFill.style.width = "75%";
  });
}

/* Letter overlay */
if (openLetterBtn) {
  openLetterBtn.addEventListener("click", () => {
    if (progressFill) progressFill.style.width = "100%";
    if (letterNameLine) {
      letterNameLine.textContent = `Dear ${LOVED_ONE},`;
    }
    if (letterBody) {
      letterBody.innerHTML = "";
      openOverlay(letterOverlay);
      typeLetter(letterBody, letterParagraphs, 36 * 1000);
    }
  });
}

if (closeLetterBtn) {
  closeLetterBtn.addEventListener("click", () => {
    closeOverlay(letterOverlay);
  });
}

/* Secret note overlay */
if (secretHeart) {
  secretHeart.addEventListener("click", () => {
    openOverlay(secretNoteOverlay);
  });
}

if (closeSecretNoteBtn) {
  closeSecretNoteBtn.addEventListener("click", () => {
    closeOverlay(secretNoteOverlay);
  });
}

function openOverlay(overlay) {
  if (!overlay) return;
  overlay.classList.add("open");
}

function closeOverlay(overlay) {
  if (!overlay) return;
  overlay.classList.remove("open");
}

/* Typewriter effect for letter */
function typeLetter(container, paragraphs, totalDurationMs) {
  const fullText = paragraphs.join("\n\n");
  const totalChars = fullText.length;
  const interval = Math.max(14, totalDurationMs / totalChars);

  let index = 0;
  container.textContent = "";

  function render() {
    const current = fullText.slice(0, index);
    const html = current
      .split("\n\n")
      .map(p => `<p>${p}</p>`)
      .join("");
    container.innerHTML = html;
  }

  function step() {
    if (!letterOverlay || !letterOverlay.classList.contains("open")) return;
    if (index <= totalChars) {
      index++;
      render();
      setTimeout(step, interval);
    }
  }

  step();
}

/* Roses burst trigger */
if (confettiBtn) {
  confettiBtn.addEventListener("click", () => {
    launchRoseBurst();
  });
}

/* Initialisation */
function init() {
  if (dynamicName) {
    dynamicName.textContent = getDisplayName();
  }

  buildGarden();
  buildReasons();
  setSurpriseMessage(randomItem(surpriseMessages));
  startPetals(22);
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", init);
} else {
  init();
}
