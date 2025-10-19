// قائمة الأسئلة عن القضايا المجتمعية
const socialIssuesQuestions = [
    "ما هي برأيك أفضل طريقة لمواجهة ظاهرة التنمر الإلكتروني في المدارس وبين الشباب؟",
    "كيف يمكن زيادة وعي الأهالي بأهمية مراقبة المحتوى الرقمي الذي يشاهده أطفالهم لحمايتهم من التحرش؟",
    "ما الدور الذي يجب أن تلعبه وسائل الإعلام في تسليط الضوء على قضايا الفقر والتهميش الاجتماعي؟",
    "ما هي الخطوة الأولى التي يجب اتخاذها لتشجيع المزيد من النساء على دخول مجالات العمل غير التقليدية؟",
    "كيف يمكن للمجتمع المحلي أن يدعم بشكل فعال الأفراد الذين يعانون من الوصم بسبب المرض العقلي؟",
    "ما هي الأسباب الجذرية لظاهرة أطفال الشوارع، وما هو الحل المستدام للحد منها؟",
    "هل تعتقد أن القوانين الحالية كافية لحماية ضحايا العنف الأسري، وما الذي تقترح إضافته؟",
    "كيف يمكن تحويل النفايات إلى مورد اقتصادي لخدمة المجتمع، وما هي التحديات التي تواجه ذلك؟"
];

// جلب العناصر من HTML
const startButton = document.getElementById('startButton');
const questionContainer = document.getElementById('questionContainer');
const randomQuestionElement = document.getElementById('randomQuestion');
const nextQuestionButton = document.getElementById('nextQuestionButton');

// دالة لاختيار وعرض سؤال عشوائي
function displayRandomQuestion() {
    // اختيار فهرس عشوائي من مصفوفة الأسئلة
    const randomIndex = Math.floor(Math.random() * socialIssuesQuestions.length);
    // جلب السؤال
    const question = socialIssuesQuestions[randomIndex];
    // عرض السؤال في العنصر المخصص له
    randomQuestionElement.textContent = question;
}

// معالج حدث عند النقر على زر "ابدأ التحدي"
startButton.addEventListener('click', () => {
    // إخفاء زر البدء
    startButton.style.display = 'none';
    // إظهار قسم السؤال
    questionContainer.style.display = 'block';
    // عرض السؤال الأول
    displayRandomQuestion();
});

// معالج حدث عند النقر على زر "سؤال آخر"
nextQuestionButton.addEventListener('click', () => {
    // عرض سؤال عشوائي جديد
    displayRandomQuestion();
});

// ملاحظة: يمكنك إضافة المزيد من الأسئلة إلى المصفوفة لزيادة التنوع