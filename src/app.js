const starterQuests = [
  { id: "gather-herbs", title: "Gather moonlit herbs", xp: 25 },
  { id: "map-cave", title: "Map the crystal cave", xp: 40 },
  { id: "repair-bridge", title: "Repair the river bridge", xp: 35 },
  { id: "calm-sprite", title: "Calm the forest sprite", xp: 55 },
];

const questList = document.querySelector("#quest-list");
const totalXp = document.querySelector("#total-xp");
const progressLabel = document.querySelector("#progress-label");
const progressFill = document.querySelector("#progress-fill");
const rankLabel = document.querySelector("#rank-label");
const statusMessage = document.querySelector("#status-message");

init();

async function init() {
  const createQuestBoard = await loadQuestBoard();
  const board = createQuestBoard(starterQuests);

  questList.addEventListener("click", (event) => {
    const button = event.target.closest("[data-quest-id]");

    if (!button) {
      return;
    }

    try {
      const result = board.completeQuest(button.dataset.questId);
      const message =
        result.xpAwarded === 0
          ? `${result.quest.title} was already complete.`
          : `${result.quest.title} complete. +${result.xpAwarded} XP claimed.`;

      render(board, message);
    } catch (error) {
      render(board, error.message);
    }
  });

  render(board, "Choose a quest to claim its XP.");
}

async function loadQuestBoard() {
  if (window.location.protocol !== "file:") {
    const module = await import("./quest-board.js");
    return module.createQuestBoard;
  }

  return createQuestBoardForFileOpen;
}

function render(board, message) {
  const quests = board.listQuests();
  const completedCount = quests.filter((quest) => quest.completed).length;
  const completionPercent =
    quests.length === 0 ? 0 : Math.round((completedCount / quests.length) * 100);

  totalXp.textContent = board.getTotalXp();
  progressLabel.textContent = `${completedCount} of ${quests.length} quests complete`;
  progressFill.style.width = `${completionPercent}%`;
  rankLabel.textContent = `Rank: ${getRank(board.getTotalXp(), completedCount, quests.length)}`;
  statusMessage.textContent = message;

  questList.replaceChildren(...quests.map(createQuestElement));
}

function createQuestElement(quest) {
  const card = document.createElement("article");
  card.className = `quest-card${quest.completed ? " is-complete" : ""}`;

  const content = document.createElement("div");

  const title = document.createElement("h2");
  title.className = "quest-title";
  title.textContent = quest.title;

  const meta = document.createElement("p");
  meta.className = "quest-meta";
  meta.textContent = quest.completed
    ? `${quest.xp} XP earned`
    : `${quest.xp} XP reward`;

  const button = document.createElement("button");
  button.className = "quest-action";
  button.type = "button";
  button.dataset.questId = quest.id;
  button.disabled = quest.completed;
  button.textContent = quest.completed ? "Completed" : "Complete quest";

  content.append(title, meta);
  card.append(content, button);

  return card;
}

function getRank(xp, completedCount, totalCount) {
  if (totalCount > 0 && completedCount === totalCount) {
    return "Guild Hero";
  }

  if (xp >= 100) {
    return "Pathfinder";
  }

  if (xp >= 50) {
    return "Scout";
  }

  return "Novice";
}

function createQuestBoardForFileOpen(initialQuests = []) {
  // Chrome blocks local ES module imports under file://, so direct-open mode
  // mirrors the quest-board module behavior used when served over HTTP.
  const quests = initialQuests.map((quest) => ({
    id: quest.id,
    title: quest.title,
    xp: quest.xp,
    completed: Boolean(quest.completed),
  }));
  let totalXp = quests.reduce(
    (sum, quest) => sum + (quest.completed ? quest.xp : 0),
    0,
  );

  return {
    listQuests() {
      return quests.map(copyQuest);
    },

    getTotalXp() {
      return totalXp;
    },

    completeQuest(questId) {
      const quest = quests.find((candidate) => candidate.id === questId);

      if (!quest) {
        throw new Error(`Unknown quest: ${questId}`);
      }

      const xpAwarded = quest.completed ? 0 : quest.xp;
      quest.completed = true;
      totalXp += xpAwarded;

      return {
        quest: copyQuest(quest),
        xpAwarded,
        totalXp,
      };
    },
  };
}

function copyQuest(quest) {
  return {
    id: quest.id,
    title: quest.title,
    xp: quest.xp,
    completed: quest.completed,
  };
}
