const words = ["吾輩は","猫","である。","名前は","まだ無い。","どこで","生れたか","とんと","見当がつかぬ。","何でも","薄暗い","じめじめした所で","ニャーニャー","泣いていた事","だけは","記憶している。","吾輩は","ここで","始めて","人間","というものを見た。","しかも","あとで聞くと","それは","書生","という","人間中で","一番獰悪な","種族であった","そうだ。","この","書生","というのは","時々","我々を","捕えて","煮て食う","という","話である。","しかし","その当時は","何という","考もなかったから","別段","恐しいとも","思わなかった。","ただ","彼の","掌に","載せられて","スーと","持ち上げられた時","何だかフワフワした感じ","があった","ばかりである。","掌の上で","少し落ちついて","書生の","顔を","見たのが","いわゆる","人間","という","ものの見始め","であろう。","この時","妙なものだと","思った","感じが","今でも","残っている。","第一","毛をもって","装飾されるべき","はずの","顔が","つるつるして","まるで","薬缶だ。","その後","猫にも","だいぶ逢ったが","こんな片輪には","一度も","出会わ","した事がない。","のみならず","顔の真中が","あまりに","突起している。","そうして","その","穴の中から","時々","ぷうぷうと","煙を","吹く。","どうも","咽せぽくて","実に","弱った。","これが","人間の","飲む","煙草","というものである","事は","ようやく","この頃","知った。"]

const shuffle = arr => {
  for (var i = arr.length - 1; i > 0; i--) {
    var r = Math.floor(Math.random() * (i + 1))
    var tmp = arr[i]
    arr[i] = arr[r]
    arr[r] = tmp
  }
  return arr
}

const cutUp = arr => shuffle(arr).join('')

document.getElementById("default").value = words.join("")

document.getElementById("ex").addEventListener("click", function() {
  document.getElementById("cutuped").textContent = cutUp(words)
})