var tipuesearch = {"pages": [{'title': 'About', 'text': '41123210 呂宗祐\xa0 \n 41123214 林辰祐 \n 41123224 張書維\xa0 \n 41123231 陳彥翰\xa0 \n 41123235 黃韋翰\xa0 \n 41123239 楊舜翔\xa0 \n 41123240 詹子逵\xa0 \n 41132222 林育安\xa0 \n 網頁:  https://mdecd2024.github.io/2b-midbg2/ \n 網誌: \xa0https://mdecd2024.github.io/2b-midbg2/blog/index.html \n 簡報:  https://mdecd2024.github.io/2b-midbg2/reveal/index.html \n 倉儲: https://github.com/mdecd2024/2b-midbg2 \n 本 cmsimde 網際內容管理系統的對應 Template 倉儲: \n https://github.com/mdecycu/cmsimde_site \n 此 Template 將 cmsimde 作為子目錄而非子模組, 使用者可以依照需求自行修改 \n 倉儲對應網站:  https://mde.tw/cmsimde_site \n 123?? \n', 'tags': '', 'url': 'About.html'}, {'title': 'cmsimde', 'text': "SMap  - SiteMap - 依照階次列出網站的所有頁面. \n EditA  - Edit All page - 將所有頁面放入編輯模式中, 主要用來處理頁面搬遷, 刪除或決定衝突頁面內容版本. \n Edit  - Edit page - 先選擇要編輯的單一頁面後, 再點選 Edit, 即可進入單一頁面的編輯模式. \n Config  - Configure Site - 編輯頁面標題與管理者密碼. \n Search  - 動態頁面內容的關鍵字搜尋. \n IUpload  - Image file Upload - 圖檔的上傳功能, 可以上傳 jpg, png 與 gif 檔案, 其中若在手機上傳圖檔, 系統會自動將圖片檔案縮小為 800x800 大小. \n IList  - Image file List - 列出可以直接在頁面編輯模式中引用的圖片檔案. \n FUpload  - File Upload - 一般檔案的上傳功能, 目前可以上傳的檔案副檔名包括 'jpg', 'png', 'gif', '7z', 'pdf', 'zip', 'ttt', 'stl', 'txt', 'html', 'mp4' 等, 使用者可以自行修改. \n FList  - File List - 列出可以直接在頁面編輯模式中引用的上傳檔案. \n Logout  - 登出頁面編輯模式. \n Convert  - 將動態網站中位於 config/content.htm 檔案, 透過分頁設定轉為 content 目錄中的靜態網頁. \n acp  - git add, git commit 與 git push, 通常只有在 localhost 或自架主機上利用網頁表單協助將倉儲改版內容推向 Github 倉儲. \n SStatic  - Start Static Site - 利用 Python 啟動網站伺服功能, 可以讓使用者檢查轉檔後的靜態網站內容. \n RStatic  - Replit Static Site URL - 僅用於 Replit 模式, 當使用者按下 SStatic 後, 可以按下 RStatic 進入當下尚未推向 Github Pages 的靜態網站. \n 80  - 由 init.py 中 static_port 所決定的連結字串, 一般不使用 80, 只有在 Replit 中為了與動態網站共用 port, 才特別設為 80. \n \n", 'tags': '', 'url': 'cmsimde.html'}, {'title': 'Replit', 'text': 'https://replit.com \n 利用 init_replit 指令安裝所需 Python 模組 chmod u+x init_replit ./init_replit \n On Replit: \n .replit: python3 main.py \n chmod u+x cms init_replit \n ./init_replit \n for cmsimde_site (not needed): git submodule update --init --recursive \n for cmsimde: pip install flask flask_cors bs4 lxml pelican markdown gevent \n password generator:\xa0 https://mde.tw/cmsite/content/Brython.html?src=https://gist.githubusercontent.com/mdecycu/b92b16621dd0246c352cf13d6463b333/raw/0bfa669750aba3abe48554509bbd43d65b6e5c82/hashlib_password_generator.py \xa0 \n \n for IPv6 only Ubuntu: .ssh 目錄中的 config, 將 SSH session 名稱設為 github.com: Host github.com User git Hostname github.com ProxyCommand /usr/bin/ncat --proxy p4.cycu.org:3128 --proxy-type http %h %p for Replit: .ssh 目錄中的 config, 將 SSH session 名稱設為 github.com: Host github.com User git Hostname github.co #since Replit works for IPv4, therefore no ProxyCommand setting needed #ProxyCommand /usr/bin/ncat --proxy p4.cycu.org:3128 --proxy-type http %h %p \n \n \n', 'tags': '', 'url': 'Replit.html'}, {'title': 'Brython', 'text': 'https://en.wikipedia.org/wiki/Python_(programming_language) \n Examples: \n https://gist.github.com/mdecycu/d9082d678096bd58378d6afe2c7fa05d \n https://www.geeksforgeeks.org/python-programming-examples/ \n https://www.programiz.com/python-programming/examples \n https://www.freecodecamp.org/news/python-code-examples-sample-script-coding-tutorial-for-beginners/ \n Python Tutorial: \n https://docs.python.org/3/tutorial/ \n An informal introduction to Python \n Indentation (Python 採 4 個 Spaces 縮排, 以界定執行範圍) \n Variables ( Python Keywords ) \n Comments (# 單行註解, 三個單引號或三個雙引號標註多行註解) \n Numbers  (整數 int(), 浮點數 float()) \n Strings  (字串) \n print (Python 內建函式,  print()  函式) \n Python control flow tools \n for \n if \n range \n open \n read \n lists \n tuples \n dictionaries \n functions \n try ... except \n break \n pass \n classes \n 這個頁面 demo 如何在同一頁面下納入多個線上 Ace 編輯器與執行按鈕 ( practice_html.txt  動態頁面超文件). \n practice_html.txt  動態頁面超文件應該可以在啟動 Brython 時, 設定將 .py 檔案放入 downloads/py 目錄中引用. \n 亦即將所有對應的 html 也使用 Brython 產生, 然後寫為  class  後, 在範例導入時透過  instance  引用. \n <!-- 啟動 Brython -->\n<script>\nwindow.onload=function(){\nbrython({debug:1, pythonpath:[\'./../cmsimde/static/\',\'./../downloads/py/\']});\n}\n</script> \n 從 1 累加到 100: \n 1 add to 100 \n 將 iterable 與 iterator  相關說明 , 利用 Brython 與 Ace Editor 整理在這個頁面. \n  導入 brython 程式庫  \n \n \n \n \n  啟動 Brython  \n \n \n \n  導入 FileSaver 與 filereader  \n \n \n \n \n  導入 ace  \n \n \n \n \n \n \n  導入 gearUtils-0.9.js Cango 齒輪繪圖程式庫  \n \n \n \n \n \n \n  請注意, 這裡使用 Javascript 將 localStorage["kw_py_src1"] 中存在近端瀏覽器的程式碼, 由使用者決定存檔名稱 \n \n \n \n \n \n \n  add 1 to 100 開始  \n \n \n  add 1 to 100 結束 \n  editor1 開始  \n  用來顯示程式碼的 editor 區域  \n \n  以下的表單與按鈕與前面的 Javascript doSave 函式以及 FileSaver.min.js 互相配合  \n  存擋表單開始  \n Filename:  .py   \n  存擋表單結束  \n \n  執行與清除按鈕開始  \n Run   Output   清除輸出區 清除繪圖區 Reload \n  執行與清除按鈕結束  \n \n  程式執行 ouput 區  \n \n  Brython 程式執行的結果, 都以 brython_div1 作為切入位置  \n \n  editor1 結束   ##########################################  \n 從 1 累加到 100 part2: \n 1 add to 100 cango_three_gears BSnake AI Tetris Rotating Block \n  請注意, 這裡使用 Javascript 將 localStorage["kw_py_src2"] 中存在近端瀏覽器的程式碼, 由使用者決定存檔名稱 \n \n \n \n  add 1 to 100 part2 開始  \n \n \n  add 1 to 100 part2 結束 \n  editor2 開始  \n  用來顯示程式碼的 editor 區域  \n \n  以下的表單與按鈕與前面的 Javascript doSave 函式以及 FileSaver.min.js 互相配合  \n  存擋表單開始  \n Filename:  .py   \n  存擋表單結束  \n \n  執行與清除按鈕開始  \n Run   Output   清除輸出區 清除繪圖區 Reload \n  執行與清除按鈕結束  \n \n  程式執行 ouput 區  \n \n  Brython 程式執行的結果, 都以 brython_div1 作為切入位置  \n', 'tags': '', 'url': 'Brython.html'}, {'title': '杜林理工翻譯文章', 'text': '文章連結 \n', 'tags': '', 'url': '杜林理工翻譯文章.html'}, {'title': 'LaTeX', 'text': '\\documentclass{article} \\usepackage[utf8]{inputenc} \n % 定义英文到中文的映射 \\def\\englishToChinese{  {"hello", "你好"},  {"world", "世界"},  {"programming", "编程"},  {"language", "语言"},  % 添加更多映射 } \n % 定义翻译函数 \\newcommand{\\translateToChinese}[1]{  \\foreach \\word/\\translation in \\englishToChinese {  \\ifx\\word#1  \\translation  \\break  \\fi  }  #1 } \n \\begin{document} \n % 输入英文句子 \\def\\englishSentence{hello world, programming language.} \\textbf{English sentence:} \\englishSentence \n % 翻译并输出结果 \\textbf{Translated sentence:}  \\translateToChinese{hello}  \\translateToChinese{world},  \\translateToChinese{programming}  \\translateToChinese{language}. \n \\end{document} \n', 'tags': '', 'url': 'LaTeX.html'}, {'title': 'c++翻譯程式', 'text': '#include <iostream> #include <map> #include <string> #include <sstream> #include <vector> \n using namespace std; \n // 定義英文到中文的映射 map<string, string> englishToChinese = {  {"hello", "你好"},  {"world", "世界"},  {"programming", "編程"},  {"language", "語言"},  // 添加更多映射 }; \n // 函數: 翻譯英文句子為中文 string translateToChinese(const string& sentence) {  stringstream ss(sentence);  string word;  vector<string> translatedWords; \n while (ss >> word) {  // 尋找該單詞在映射中的翻譯，如果找不到，則保留原單詞  auto it = englishToChinese.find(word);  if (it != englishToChinese.end()) {  translatedWords.push_back(it->second);  } else {  translatedWords.push_back(word);  }  } \n // 將翻譯後的單詞組合成句子  string translatedSentence;  for (const string& word : translatedWords) {  translatedSentence += word + " ";  } \n return translatedSentence; } \n int main() {  // 輸入英文句子  string englishSentence;  cout << "Enter an English sentence: ";  getline(cin, englishSentence); \n // 翻譯並輸出結果  string translatedSentence = translateToChinese(englishSentence);  cout << "Translated sentence: " << translatedSentence << endl; \n return 0; } \n', 'tags': '', 'url': 'c++翻譯程式.html'}, {'title': '分工表+組員名單', 'text': '翻譯頁數 \n 41123210 呂宗祐 1~10\xa0 \n 41123214 林辰祐 21~30 \n 41123224 張書維 11~21 \n 41123231 陳彥翰 41~50 \n 41123235 黃韋翰 51~60 \n 41123239 楊舜翔 61~70 \n 41123240 詹子逵 31~40/81~87 \n 41132222 林育安 71~80 \n', 'tags': '', 'url': '分工表+組員名單.html'}, {'title': '教學影片上字幕', 'text': '第一影片 \n \n 建立個人課程倉儲與網站 \n \xa0首先要先在github建立課程然後推上replit上建立個人網站來修改跟上傳個人網誌，之後再來寫每個禮拜的網誌內容。 \n github跟replite 登入與信任教學: \n \xa0 內容主要是在說明登入時有很多的選項可以進入,整合多元的信任跟登入方式。 \n 第二影片 \n \n 第三影片 \n 如何設定 Github 帳號的雙重認證\xa0 \n github 跟replit因為在登入需要認證所以需要綁定帳號避免資料不見,然而綁訂一個還不夠 安全 而且他在建立帳號後的45天沒有綁定的話就會被鎖起來導致不能用，所以我們要先學會建立雙重帳號認證。 \n 第四影片 \n 第五影片 \n 組長建立 Team 並設定分組倉儲\xa0 \n \xa0\xa0\xa0\xa0\xa0這堂課的用意是因為未來上課會需要分工合作跟看小組內每個人的貢獻度，藉由這個機會培養向心力。 \n 一開始要先建立網站、在建立鑰匙、然後拉組員跟建立小組網站、最後分配工作給每個組員 \n 第六影片 \n \n 第七影片 \n \n 第八影片 \n \n 第九影片 \n \n 第十影片 \n \n 第十一影片 \n 第十二影片 \n 第十三影片 \n \n 第 十四影片 \n', 'tags': '', 'url': '教學影片上字幕.html'}, {'title': '期中統整', 'text': '41123210 \n \n 41123214 \n \n 41123231 \n \n 41123235 \n \n 41123239 \n \n 41123240 \n \n \n \n', 'tags': '', 'url': '期中統整.html'}]};