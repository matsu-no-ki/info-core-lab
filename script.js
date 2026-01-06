/**
 * 【学習データ】（管理者ツールからの出力を貼り付け）
 */
const masterData = {
  "word": [
    {
      "chap": 3,
      "cat": "ネットワーク",
      "q": "この図が示す、世界共通の通信プロトコルの階層モデルは？<br><img src='https://placehold.jp/24/007aff/ffffff/200x150.png?text=Layer7-Layer1' style='width:100%;max-width:300px;margin-top:10px;'>",
      "a": "OSI参照モデル",
      "exp": "7つの階層で定義されています。",
      "options": [
        "OSI参照モデル",
        "TCP/IPモデル",
        "HTTP",
        "LAN"
      ]
    },
    {
      "chap": 5,
      "cat": "アルゴリズム",
      "q": "このフローチャートの処理結果として正しいものは？<br><img src='https://placehold.jp/24/007aff/ffffff/200x150.png?text=FlowChart_Sample' style='width:100%;max-width:300px;margin-top:10px;'>",
      "a": "15",
      "exp": "iが5になるまで足し算を繰り返します。",
      "options": [
        "5",
        "10",
        "15",
        "20"
      ]
    },
    {
      "chap": 1,
      "cat": "情報リテラシ",
      "q": "AIの正式名称は?",
      "a": "ArtificialInteligence",
      "exp": "Artificial(人口)Inteligence(知能)です。",
      "options": [
        "ArtInternet",
        "AttackInternet",
        "AirInterface",
        "ArtificialInteligence"
      ]
    },
    {
      "chap": 1,
      "cat": "情報リテラシ",
      "q": "AIの正式名称は?",
      "a": "ArtificialInteligence",
      "exp": "Artificial(人口)Inteligence(知能)です。",
      "options": [
        "ArtInternet",
        "AttackInternet",
        "AirInterface",
        "ArtificialInteligence"
      ]
    },
    {
      "chap": 6,
      "cat": "数値と文字列・算術演算",
      "q": "数値「123」を表示するプログラムを答えなさい。",
      "a": "表示する(123)",
      "exp": "数値や文字列を表示する場合には、「表示する()」を使います。文字列の場合は「\" \"(ダブルクォーテーション)」で囲みますが、数値の場合は囲みません。",
      "options": [
        "表示する(\"123\")",
        "表示する[\"123\"]",
        "表示する{123}",
        "表示する(123)"
      ]
    },
    {
      "chap": 6,
      "cat": "数値と文字列・算術演算",
      "q": "文字列「Hello World!」を表示するプログラムを答えなさい。",
      "a": "表示する(\"Hello World!\")",
      "exp": "数値や文字列を表示する場合には、「表示する()」を使います。文字列の場合は「\" \"(ダブルクォーテーション)」で囲みますが、数値の場合は囲みません。",
      "options": [
        "表示する(\"Hello World!\")",
        "表示する[\"Hello World!\"]",
        "表示する{Hello World}",
        "表示する(Hello World!)"
      ]
    },
    {
      "chap": 6,
      "cat": "数値と文字列・算術演算",
      "q": "文字列「私の年齢は」と数値「18」を組み合わせて、「私の年齢は18」と表示するプログラムを答えなさい。",
      "a": "表示する(\"私の年齢は\",18)",
      "exp": "文字列と数値を組み合わせたい場合、「表示する(\"私の年齢は\",18)」のように、文字列と数値の間に「, (カンマ)」を入れます。",
      "options": [
        "表示する(\"私の年齢は\",18)",
        "表示する(\"私の年齢は\".18)",
        "表示する(\"私の年齢は\"+18)",
        "表示する(\"私の年齢は\">18)"
      ]
    },
    {
      "chap": 6,
      "cat": "数値と文字列・算術演算",
      "q": "3×2の結果を表示するプログラムを答えなさい。",
      "a": "表示する(3*2)",
      "exp": "算術的な計算をするための記号を算術演算子と呼びます。加算の場合は「+」、減算の場合は「-」、乗算の場合は「*」、除算の場合は「/」で表します。",
      "options": [
        "表示する(3+2)",
        "表示する(3-2)",
        "表示する(3*2)",
        "表示する(3/2)"
      ]
    },
    {
      "chap": 6,
      "cat": "数値と文字列・算術演算",
      "q": "3÷2の余りを表示するプログラムを答えなさい。",
      "a": "表示する(3%2)",
      "exp": "算術的な計算をするための記号を算術演算子と呼びます。除算した余りを求める場合は「％」、べき乗は「**」で表します。",
      "options": [
        "表示する(3%2)",
        "表示する(3/2)",
        "表示する(3\\2)",
        "表示する(3**2)"
      ]
    }
  ],
  "test": [
    {
      "chap": 1,
      "cat": "情報セキュリティ",
      "q": "情報の3要素（CIA）のうち「認められた人だけがアクセスできること」を何というか？",
      "a": "機密性",
      "exp": "Confidentialityの訳語です。",
      "options": [
        "",
        "",
        "",
        ""
      ]
    },
    {
      "chap": 6,
      "cat": "数値と文字列・算術演算",
      "q": "次のプログラムの実行結果を答えなさい。<br>表示する(\"こんにちは\")",
      "a": "こんにちは",
      "exp": "「表示する()」で、括弧内の数値・文字列を表示します。文字列の場合は「表示する(\"こんにちは\")」のように、「\" \"(ダブルクォーテーション)」で表示したい文字列を囲みます。",
      "options": [
        "",
        "",
        "",
        ""
      ]
    },
    {
      "chap": 6,
      "cat": "数値と文字列・算術演算",
      "q": "次のプログラムのように、文字列と数値を組み合わせて表示させたい時、〇に当てはまる記号を答えなさい。<br>表示する(\"私は高校\"〇3〇\"年生です。\")",
      "a": ",",
      "exp": "文字列と数値を組み合わせたい場合、「表示する(\"私は高校\"〇3〇\"年生です。\")」のように、文字列と数値の間に「, (カンマ)」を入れます。",
      "options": [
        "",
        "",
        "",
        ""
      ]
    },
    {
      "chap": 6,
      "cat": "数値と文字列・算術演算",
      "q": "次のプログラムの実行結果を答えなさい。<br>表示する(4/2)",
      "a": "2",
      "exp": "算術演算子を使うことで四則演算をすることができます。加算の場合は「+」、減算の場合は「-」、乗算の場合は「*」、除算の場合は「/」で表します。今回の場合、「表示する(4/2)」のため4÷2の結果が表示されます。",
      "options": [
        "",
        "",
        "",
        ""
      ]
    },
    {
      "chap": 6,
      "cat": "数値と文字列・算術演算",
      "q": "次のプログラムの実行結果を答えなさい。<br>表示する(7-3)",
      "a": "4",
      "exp": "算術演算子を使うことで四則演算をすることができます。加算の場合は「+」、減算の場合は「-」、乗算の場合は「*」、除算の場合は「/」で表します。今回の場合、「表示する(7-3)」のため7-3の結果が表示されます。",
      "options": [
        "",
        "",
        "",
        ""
      ]
    },
    {
      "chap": 6,
      "cat": "数値と文字列・算術演算",
      "q": "次のプログラムの実行結果を答えなさい。<br>表示する(1+2*4)",
      "a": "9",
      "exp": "計算の優先順位に従って計算をします。<br>①括弧 ( ) の中の計算を最優先に行う。<br>②掛け算 × と 割り算 ÷ を、左から順番に行う。<br>③足し算 ＋ と 引き算 － を、左から順番に行う。<br>今回の場合、「表示する(1+2*4)」のため、2*4が先に計算され、最後に1を足します。",
      "options": [
        "",
        "",
        "",
        ""
      ]
    }
  ]
};

// 【追加】章番号とタイトルの対応表
const chapterTitles = {
    1: "情報社会",
    2: "情報デザイン",
    3: "情報システム",
    4: "ネットワークとセキュリティ",
    5: "問題解決",
    6: "擬似言語プログラミング"
};

let currentMode = ''; 
let currentChapter = 0;
let currentQuestions = [];
let currentIdx = 0;
let userResults = [];

/**
 * ページ切り替え関数
 */
function showPage(pageId) {
    document.querySelectorAll('.content-section').forEach(s => s.classList.add('hidden'));
    const target = document.getElementById(`${pageId}-section`);
    if (target) target.classList.remove('hidden');
    window.scrollTo(0,0);
}

/**
 * 章選択画面の生成（タイトル付きに改良）
 */
/**
 * 章選択画面の生成（一行で横並びに表示）
 */
function showSection(mode) {
    if (!masterData[mode] || masterData[mode].length === 0) {
        alert("学習データが登録されていません。");
        return;
    }
    currentMode = mode;
    const list = document.getElementById('chapter-list');
    list.innerHTML = '';
    
    // データがある章のみ抽出
    const chaps = [...new Set(masterData[mode].map(d => d.chap))].sort((a,b) => a-b);
    
    chaps.forEach(num => {
        const div = document.createElement('div');
        div.className = 'chapter-card';
        
        // タイトル対応表から名前を取得
        const title = chapterTitles[num] || "未定義";
        
        // 【修正】一行で表示するために <br> を削除し、スペースで調整
        div.innerHTML = `
            <div class="chap-num">${num}</div>
            <div class="chap-text" style="text-align: left; padding-left: 10px;">
                <span style="font-weight: bold;">第${num}章</span>
                <span style="margin-left: 10px; color: #555;">${title}</span>
            </div>
        `;
        div.onclick = () => selectChapter(num);
        list.appendChild(div);
    });
    showPage('chapter-select');
}

/**
 * 分野選択画面の生成
 */
function selectChapter(num) {
    currentChapter = num;
    const title = chapterTitles[num] || "";
    document.getElementById('chapter-title').innerText = `第${num}章 ${title}：分野を選択`;
    
    const grid = document.getElementById('category-grid');
    grid.innerHTML = '';
    
    const cats = [...new Set(masterData[currentMode].filter(d => d.chap === num).map(d => d.cat))];
    cats.forEach(cat => {
        const btn = document.createElement('div');
        btn.className = 'chapter-card';
        btn.style.justifyContent = "center";
        btn.innerText = cat;
        btn.onclick = () => startLearning(cat);
        grid.appendChild(btn);
    });
    showPage('category-select');
}

/**
 * 学習開始
 */
function startLearning(catName) {
    currentQuestions = masterData[currentMode].filter(d => d.chap === currentChapter && d.cat === catName);
    currentIdx = 0;
    userResults = [];
    
    if (currentMode === 'word') renderWordQuestion();
    else renderTestList();
    showPage('learning');
}

/**
 * 単語学習（4択）の描画
 */
function renderWordQuestion() {
    const q = currentQuestions[currentIdx];
    const container = document.getElementById('learning-content');
    
    container.innerHTML = `
        <h3 style="color:#666; font-size:0.9rem;">${q.cat} (${currentIdx+1}/${currentQuestions.length})</h3>
        <div class="question-text">${q.q}</div>
        <div class="options-grid" id="opt-grid"></div>
        <div id="exp-area" class="hidden feedback-box" style="margin-top:20px; padding:15px; background:#f0f7ff; border-radius:10px; border-left:5px solid #0070f3;">
            <p id="res-msg" style="font-weight:bold; font-size:1.1rem;"></p>
            <p style="margin:10px 0;">${q.exp}</p>
            <button class="nav-btn" onclick="nextWordQuestion()" style="width:100%; margin:0;">
                ${currentIdx + 1 < currentQuestions.length ? '次の問題へ' : '結果を確認する'}
            </button>
        </div>
    `;

    const optGrid = container.querySelector('#opt-grid');
    q.options.forEach(opt => {
        if(!opt) return;
        const b = document.createElement('button');
        b.innerText = opt;
        b.onclick = () => {
            const isCorrect = (opt === q.a);
            userResults.push({ q: q.q, userAns: opt, correctAns: q.a, isCorrect: isCorrect, exp: q.exp });
            document.getElementById('res-msg').innerText = isCorrect ? "✅ 正解！" : `❌ 不正解... (正解: ${q.a})`;
            document.getElementById('res-msg').style.color = isCorrect ? "#27ae60" : "#e74c3c";
            document.getElementById('exp-area').classList.remove('hidden');
            optGrid.style.pointerEvents = 'none';
        };
        optGrid.appendChild(b);
    });
}

function nextWordQuestion() {
    currentIdx++;
    if (currentIdx < currentQuestions.length) renderWordQuestion();
    else showResults();
}

/**
 * 記述テストの描画
 */
function renderTestList() {
    const container = document.getElementById('learning-content');
    let html = `<h2>${currentQuestions[0].cat} 記述テスト</h2>`;
    currentQuestions.forEach((q, i) => {
        html += `
            <div style="margin-bottom:25px; border-bottom:1px solid #eee; padding-bottom:15px;">
                <p><b>Q${i+1}.</b> ${q.q}</p>
                <input type="text" id="ans-${i}" class="category-btn" style="width:100%; text-align:left; background:white; border:1px solid #ddd; padding:10px;" placeholder="答えを入力">
            </div>`;
    });
    html += `<button class="nav-btn" onclick="scoreTest()" style="width:100%">採点して結果を見る</button>`;
    container.innerHTML = html;
}

/**
 * 記述テストの採点
 */
function scoreTest() {
    userResults = [];
    currentQuestions.forEach((q, i) => {
        const userVal = document.getElementById(`ans-${i}`).value.trim();
        const isCorrect = (userVal === q.a);
        userResults.push({ q: q.q, userAns: userVal, correctAns: q.a, isCorrect: isCorrect, exp: q.exp });
    });
    showResults();
}

/**
 * 結果確認ページ（リザルト）の生成
 */
function showResults() {
    const summary = document.getElementById('result-summary');
    const list = document.getElementById('result-list');
    const correctCount = userResults.filter(r => r.isCorrect).length;
    
    summary.innerHTML = `得点: ${correctCount} / ${userResults.length}`;
    summary.style.color = correctCount === userResults.length ? "#27ae60" : "#333";

    list.innerHTML = "";
    userResults.forEach((r, i) => {
        const item = document.createElement('div');
        item.className = "glass-card";
        item.style.marginBottom = "15px";
        item.style.padding = "15px";
        item.style.borderLeft = `5px solid ${r.isCorrect ? '#27ae60' : '#e74c3c'}`;
        item.style.background = r.isCorrect ? "#fafffa" : "#fffafa";
        
        item.innerHTML = `
            <p style="font-weight:bold; margin-bottom:5px;">Q${i+1}. ${r.q}</p>
            <p style="color: ${r.isCorrect ? '#27ae60' : '#e74c3c'}; font-weight:bold; margin-bottom:5px;">
                ${r.isCorrect ? "✅ 正解" : "❌ 不正解"} (あなたの回答: ${r.userAns || "未回答"})
            </p>
            ${!r.isCorrect ? `<p style="font-size:0.9rem; margin-bottom:5px;">正解: <b>${r.correctAns}</b></p>` : ""}
            <div style="font-size:0.85rem; color:#555; background:rgba(255,255,255,0.6); padding:10px; border-radius:5px;">
                <strong>解説:</strong> ${r.exp}
            </div>
        `;
        list.appendChild(item);
    });

    showPage('result');
}

