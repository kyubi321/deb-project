const greetingList = [
    "Hello world", // English
    "Hola mundo", // Spanish
    "Bonjour le monde", // French
    "Hallo Welt", // German
    "Ciao mondo", // Italian
    "Olá mundo", // Portuguese
    "Привет мир", // Russian
    "こんにちは世界", // Japanese
    "你好，世界", // Chinese (Simplified)
    "안녕하세요 세계", // Korean
    "مرحبا بالعالم", // Arabic
    "नमस्ते दुनिया", // Hindi
    "Olá mundo", // Bengali
    "வணக்கம் உலகம்", // Tamil
    "హలో ప్రపంచం", // Telugu
    "สวัสดีชาวโลก", // Thai
    "Selamat dunia", // Malay
    "ਸਤਿ ਸ੍ਰੀ ਅਕਾਲ ਦੁਨਿਆ", // Punjabi
    "হ্যালো পৃথিবী", // Bengali
    "สวัสดีชาวโลก", // Thai
    "Chào thế giới", // Vietnamese
    "Saluton mondo", // Esperanto
    "Hej världen", // Swedish
    "Hei maailma", // Finnish
    "Merhaba dünya", // Turkish
    "Bok svete", // Croatian
    "Terve maailma", // Estonian
    "Γειά σου κόσμε", // Greek
    "გამარჯობა მსოფლიო", // Georgian
    "שלום עולם", // Hebrew
    "سلام دنیا", // Persian
    "Habari dunia", // Swahili
    "Sawubona Mhlaba", // Zulu
    "Sawubona Mhlaba", // Xhosa
    "Kaixo mundua", // Basque
    "Hallo Welt", // Afrikaans
    "Hei verden", // Norwegian
    "Halo dunia", // Indonesian
];



function greetingChange() {
    const randomIndex = Math.floor(Math.random() * greetingList.length);
    const randomGreeting = greetingList[randomIndex];
    document.getElementById('greeting').textContent=randomGreeting.toString();
}
function getcount() {
    const randomIndex = Math.floor(Math.random() * 1000);
    document.getElementById('visitorcount').textContent= "Visitor context: " + randomIndex.toString();
}