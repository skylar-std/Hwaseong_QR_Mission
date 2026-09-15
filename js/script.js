/**
* 아래 clues 만 수정하세요.
* - 숫자 키: 현장에서 입력할 비밀번호
* - placement: 시작 행/열, 방향, 칸 수 (행과 열은 1부터 시작)
* - question: 문제 텍스트 (줄바꿈 그대로 표시됩니다)
  */
const clues = {
  /* ── 가로 ㄱ ~ ㅇ (8문제) ── */
  "1997": {
    direction: "가로",
    label: "[가로 ㄱ]",
    placement: { row: 1, column: 1, direction: "가로", length: 3 },
    question: "[가로 ㄱ] 정조 대왕이 어머니 혜경궁 홍씨를 모시고 수원화성으로 행차를 떠날 때 출발했던 한양의 궁궐",
  },
  "1796": {
    direction: "가로",
    label: "[가로 ㄴ]",
    placement: { row: 3, column: 3, direction: "가로", length: 4 },
    question: "[가로 ㄴ] 수원화성을 축조하고 규장각과 장용영을 설치한 조선시대 22대 국왕",
  },
  "1752": {
    direction: "가로",
    label: "[가로 ㄷ]",
    placement: { row: 5, column: 2, direction: "가로", length: 3 },
    question: "[가로 ㄷ] 정조 대왕이 창설한 국왕 직속 친위부대의 이름 - 000 부대",
  },
  "1795": {
    direction: "가로",
    label: "[가로 ㄹ]",
    placement: { row: 6, column: 5, direction: "가로", length: 6 },
    question: "[가로 ㄹ] 수원화성 공사의 모든 과정이 상세히 기록되어 있는 유네스코 세계기록유산 서책의 이름",
  },
  "1709": {
    direction: "가로",
    label: "[가로 ㅁ]",
    placement: { row: 8, column: 4, direction: "가로", length: 4 },
    question: "[가로 ㅁ] 정조 대왕의 어머니 회갑연 잔치와 백성들을 위한 행사가 열렸던 임시 궁궐의 이름",
  },
  "0402": {
    direction: "가로",
    label: "[가로 ㅂ]",
    placement: { row: 10, column: 2, direction: "가로", length: 3 },
    question: "[가로 ㅂ] 수원화성의 남쪽 대문의 이름",
  },
  "1801": {
    direction: "가로",
    label: "[가로 ㅅ]",
    placement: { row: 1, column: 9, direction: "가로", length: 2 },
    question: "[가로 ㅅ]왕명으로 특별한 사명을 띠고 지방에 파견되던 임시 벼슬. 암행00",
  },
  "1004": {
    direction: "가로",
    label: "[가로 ㅇ]",
    placement: { row: 9, column: 9, direction: "가로", length: 2 },
    question: "[가로 ㅇ] 말이 끄는 수레.",
  },
  /* ── 세로 1 ~ 8 (8문제) ── */
  "0022": {
    direction: "세로",
    label: "[세로 1]",
    placement: { row: 1, column: 1, direction: "세로", length: 3 },
    question: "[세로 1] 수원화성의 동쪽 대문의 이름",
  },
  "5740": {
    direction: "세로",
    label: "[세로 2]",
    placement: { row: 1, column: 5, direction: "세로", length: 3 },
    question: "[세로 2] 팔달산 정상에 위치하여 정조 대왕이 황금 갑옷을 입고 군사 훈련을 직접 지휘하던 군사 지휘소의 이름",
  },
  "0004": {
    direction: "세로",
    label: "[세로 3]",
    placement: { row: 3, column: 3, direction: "세로", length: 3 },
    question: "[세로 3] 정조 대왕의 총애를 받은 실학자이자, 거중기를 발명하고 수원화성의 기본 설계를 담당한 학자의 이름",
  },
  "1762": {
    direction: "세로",
    label: "[세로 4]",
    placement: { row: 5, column: 2, direction: "세로", length: 3 },
    question: "[세로 4] 백성들의 안녕을 바라는 뜻을 담은 수원화성의 북쪽 정문의 이름",
  },
  "1776": {
    direction: "세로",
    label: "[세로 5]",
    placement: { row: 5, column: 6, direction: "세로", length: 5 },
    question: "[세로 5] 1795년 정조 대왕이 어머니 혜경궁 홍씨를 모시고 수원화성으로 행차했던 8일간의 여정을 8폭 병풍으로 생생하게 기록한 역사 그림",
  },
  "0032": {
    direction: "세로",
    label: "[세로 6]",
    placement: { row: 8, column: 4, direction: "세로", length: 3 },
    question: "[세로 6]수원화성의 서쪽 대문의 이름",
  },
  "3500": {
    direction: "세로",
    label: "[세로 7]",
    placement: { row: 1, column: 10, direction: "세로", length: 4 },
    question: "[세로 7]정조 대왕의 아버지로, 수원화성을 짓게 된 배경이 된 인물",
  },
  "3202": {
    direction: "세로",
    label: "[세로 8]",
    placement: { row: 9, column: 9, direction: "세로", length: 2 },
    question: "[세로 8] 벼슬아치가 지방에 나갈 때 역마를 징발하는 증표로 쓰던 둥근 구리 패",
  },
};

/* ─────────────────────────────────────────────────────────
  * 미션 지도(그리드) 관련 데이터
  * OPEN: 1이면 열린 칸(흰/베이지), 0이면 막힌 칸(빨강) — 1부터 시작하는 행,열 기준
  * NUMBERS: 칸 좌측 상단에 표시할 번호
  *
  * 지도는 메인 화면과 오버레이 안, 두 군데에 동일하게 표시됩니다.
  * (id 대신 class="mission-board" 를 사용해서, 화면에 몇 개가 있든
  *  전부 찾아서 똑같이 그리고 똑같이 반짝이도록 처리합니다.)
  * ───────────────────────────────────────────────────────── */
const OPEN = [
  [1, 1, 1, 0, 1, 0, 0, 0, 1, 1],
  [1, 0, 0, 0, 1, 0, 0, 0, 0, 1],
  [1, 0, 1, 1, 1, 1, 0, 0, 0, 1],
  [0, 0, 1, 0, 0, 0, 0, 0, 0, 1],
  [0, 1, 1, 1, 0, 1, 0, 0, 0, 0],
  [0, 1, 0, 0, 1, 1, 1, 1, 1, 1],
  [0, 1, 0, 0, 0, 1, 0, 0, 0, 0],
  [0, 0, 0, 1, 1, 1, 1, 0, 0, 0],
  [0, 0, 0, 1, 0, 1, 0, 0, 1, 1],
  [0, 1, 1, 1, 0, 0, 0, 0, 1, 0],
];
const NUMBERS = {
  "1,1": "ㄱ1", "1,5": "2", "1,9": "ㅅ", "1,10": "7",
  "3,3": "ㄴ3", "5,2": "ㄷ4", "5,6": "5", "6,5": "ㄹ",
  "8,4": "ㅁ6", "9,9": "ㅇ8", "10,2": "ㅂ",
};

const FOUND_KEY = "hwaseong-mission-found-v1";
let foundKeys = [];
try {
  foundKeys = JSON.parse(localStorage.getItem(FOUND_KEY)) || [];
} catch (e) {
  foundKeys = [];
}

// 화면에 있는 모든 지도(mission-board) 인스턴스를 찾아서 각각 독립적으로 관리
// data-mode="current" 인 지도는 "지금 열어본 문제" 하나만 빛나고,
// 그 외(메인 화면)는 지금까지 찾은 문제 전체가 누적으로 빛난다.
const boardInstances = Array.from(document.querySelectorAll(".mission-board")).map((el) => ({
  el,
  mode: el.dataset.mode === "current" ? "current" : "cumulative",
  cells: {}, // "r,c" (1-indexed) -> cell element (이 인스턴스 안에서)
}));

let currentKey = null; // 오버레이에 지금 열려 있는 문제의 key

function buildMainBoard() {
  boardInstances.forEach((instance) => {
    instance.el.innerHTML = "";
    instance.cells = {};
    for (let r = 1; r <= 10; r += 1) {
      for (let c = 1; c <= 10; c += 1) {
        const div = document.createElement("div");
        const isOpen = OPEN[r - 1][c - 1] === 1;
        div.className = "bcell " + (isOpen ? "open" : "blocked");
        if (isOpen) {
          const num = NUMBERS[`${r},${c}`];
          if (num) {
            const tag = document.createElement("span");
            tag.className = "bnum";
            // 1글자든("2","ㅅ") 2글자든("ㄱ1","8ㅇ") 항상 같은 방식(글자별 네모 박스, 세로로 쌓기)으로 렌더링해서
            // 서로 다르게 생기지 않고 지도 전체가 통일된 느낌이 나도록 처리
            num.split("").forEach((ch) => {
              const line = document.createElement("span");
              line.textContent = ch;
              tag.appendChild(line);
            });
            div.appendChild(tag);
          }
          instance.cells[`${r},${c}`] = div;
        }
        instance.el.appendChild(div);
      }
    }
  });
}

function placementCells(placement) {
  const isVertical = placement.direction === "세로";
  const cells = [];
  for (let offset = 0; offset < placement.length; offset += 1) {
    const row = placement.row + (isVertical ? offset : 0);
    const column = placement.column + (isVertical ? 0 : offset);
    if (row < 1 || row > 10 || column < 1 || column > 10) continue;
    cells.push(`${row},${column}`);
  }
  return cells;
}

function lightCells(instance, keysToLight) {
  Object.values(instance.cells).forEach((el) => el.classList.remove("lit"));
  keysToLight.forEach((key) => {
    const data = clues[key];
    if (!data || !data.placement) return;
    placementCells(data.placement).forEach((pos) => {
      const el = instance.cells[pos];
      if (el) el.classList.add("lit");
    });
  });
}

function refreshMainBoardLights() {
  boardInstances.forEach((instance) => {
    if (instance.mode === "current") {
      lightCells(instance, currentKey ? [currentKey] : []);
    } else {
      lightCells(instance, foundKeys);
    }
  });
  document.querySelectorAll(".found-count-num").forEach((el) => {
    el.textContent = foundKeys.length;
  });
  document.querySelectorAll(".total-count-num").forEach((el) => {
    el.textContent = Object.keys(clues).length;
  });
}

function markFound(key) {
  currentKey = key;
  if (foundKeys.includes(key)) {
    refreshMainBoardLights();
    return;
  }
  foundKeys.push(key);
  localStorage.setItem(FOUND_KEY, JSON.stringify(foundKeys));
  refreshMainBoardLights();
}

buildMainBoard();
refreshMainBoardLights();

/* ───────────────────────────────────────────────────────── */

function normalizeClue(raw) {
  return String(raw)
    .trim()
    .replace(/\s+/g, "")
    .toLowerCase();
}

function resolveClueKey(input) {
  const n = normalizeClue(input);
  for (const key of Object.keys(clues)) {
    if (normalizeClue(key) === n) return key;
  }
  return null;
}

const overlay = document.getElementById("overlay");
const form = document.getElementById("clue-form");
const input = document.getElementById("clue-input");
const toastEl = document.getElementById("toast");
const btnClose = document.getElementById("btn-close");

let toastTimer = null;

function showToast(message, isError) {
  toastEl.textContent = message;
  toastEl.classList.toggle("error", !!isError);
  toastEl.classList.add("show");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toastEl.classList.remove("show"), 2800);
}

function openQuiz(key) {
  const data = clues[key];
  if (!data) return;

  document.getElementById("quiz-tag").textContent = `${data.direction} 문제`;
  document.getElementById("quiz-title").textContent = data.label;

  const qText = (data.question || "").trim();
  document.getElementById("quiz-question").textContent =
    qText || "(question 칸에 문제를 붙여 넣어 주세요.)";

  markFound(key);

  overlay.hidden = false;
  requestAnimationFrame(() => overlay.classList.add("open"));
  document.body.style.overflow = "hidden";
  btnClose.focus();
}

function closeQuiz() {
  overlay.classList.remove("open");
  document.body.style.overflow = "";
  setTimeout(() => {
    overlay.hidden = true;
    input.focus();
  }, 280);
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const key = resolveClueKey(input.value);
  if (!key) {
    showToast("일치하는 단서 번호가 없어요. 현장 표지를 다시 확인해 주세요.", true);
    input.select();
    return;
  }
  openQuiz(key);
  input.value = "";
});

btnClose.addEventListener("click", closeQuiz);
overlay.addEventListener("click", (e) => {
  if (e.target === overlay) closeQuiz();
});
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && overlay.classList.contains("open")) closeQuiz();
});

/* URL ?clue=1997 또는 ?clue=1796 QR 딥링크 */
(function applyQueryClue() {
  const params = new URLSearchParams(window.location.search);
  const q = params.get("clue") || params.get("c");
  if (q) {
    const key = resolveClueKey(q);
    if (key) {
      input.value = key;
      openQuiz(key);
    }
  }
})();
