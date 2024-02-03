const chapterItems = [
  {
    chapterId: 1,
    lessonId: 1,
    imgSrc:
      "https://alsallum.s3.eu-north-1.amazonaws.com/welcomeimage1661254149_256.jpg",
    mainText: "تقديم نفسك",
    subText: "تعلم التحية عند مقابلة الأشخاص",
    url: "/test/chapter1",
  },
  {
    chapterId: 1,
    lessonId: 2,

    imgSrc:
      "https://alsallum.s3.eu-north-1.amazonaws.com/davidcover1661254508_256.jpg",
    mainText: "تقديم نفسك",
    subText: "قل اسمك",
    url: "/test/chapter2",
  },
  {
    chapterId: 1,
    lessonId: 3,

    imgSrc:
      "https://alsallum.s3.eu-north-1.amazonaws.com/sogreat1661259325_256.jpg",
    mainText: "القول كيف أنت",
    subText: "تحدث عن كيف تشعر",
    url: "/test/chapter3",
  },
  {
    chapterId: 1,
    lessonId: 4,

    imgSrc:
      "https://alsallum.s3.eu-north-1.amazonaws.com/european-man-woman-casual-wear-standing-back-back-with-arms-crossed-isolated-colorful-wall_171337-51292.jpg",
    mainText: "تطوير الطلاقة",
    subText: "عرِّف عن نفسك",
    url: "/test/chapter4",
  },
  {
    chapterId: 1,
    lessonId: 5,

    type: "checkpoint",
    imgSrc: "https://alsallum.s3.eu-north-1.amazonaws.com/Diamond.png",
    mainText: "نقطة التحقق",
    subText: "اختبر مهاراتك للوصول إلى الفصل التالي",
    url: "/test/chapter5",
  },
  {
    chapterId: 2,
    lessonId: 1,
    completed: false,
    imgSrc: "https://alsallum.s3.eu-north-1.amazonaws.com/jack.jpeg",
    mainText: "السؤال عن الآخرين",
    subText: "تعلم كيفية السؤال عن مشاعر الأشخاص الآخرين",
    url: "/test/chapter6",
  },
  {
    imgSrc:
      "https://alsallum.s3.eu-north-1.amazonaws.com/davidcover1661254508_256.jpg",
    mainText: "قول أين تعيش",
    subText: "تحدث عن المكان الذي تعيش فيه",
    url: "/test/chapter7",
    chapterId: 2,
    lessonId: 2,
  },
  {
    imgSrc:
      "https://alsallum.s3.eu-north-1.amazonaws.com/sogreat1661259325_256.jpg",
    mainText: "إعطاء جنسيتك",
    subText: "تعلم كيفية القول من أي دولة أنت",
    url: "/test/chapter8",
    chapterId: 2,
    lessonId: 3,
  },
  {
    completed: false,
    imgSrc:
      "https://alsallum.s3.eu-north-1.amazonaws.com/european-man-woman-casual-wear-standing-back-back-with-arms-crossed-isolated-colorful-wall_171337-51292.jpg",
    mainText: "إنهاء المحادثة",
    subText: "تعلم كيفية إنهاء المحادثة",
    url: "/test/chapter9",
    chapterId: 2,
    lessonId: 4,
  },
  {
    type: "checkpoint",
    imgSrc: "https://alsallum.s3.eu-north-1.amazonaws.com/Diamond.png",
    mainText: "نقطة التحقق",
    subText: "اختبر مهاراتك للوصول إلى الفصل التالي",
    url: "/test/chapter10",
    chapterId: 2,
    lessonId: 5,
  },
  {
    imgSrc: "https://alsallum.s3.eu-north-1.amazonaws.com/jack.jpeg",
    mainText: "إنهاء المحادثة",
    subText: "تعلم كيفية إنهاء المحادثة",
    url: "/test/chapter6",
    chapterId: 3,
    lessonId: 1,
  },
  {
    imgSrc:
      "https://alsallum.s3.eu-north-1.amazonaws.com/davidcover1661254508_256.jpg",
    mainText: "إنهاء المحادثة",
    subText: "تعلم كيفية إنهاء المحادثة",
    url: "/test/chapter7",
    chapterId: 3,
    lessonId: 2,
  },
  {
    imgSrc:
      "https://alsallum.s3.eu-north-1.amazonaws.com/sogreat1661259325_256.jpg",
    mainText: "إنهاء المحادثة",
    subText: "تعلم كيفية إنهاء المحادثة",
    url: "/test/chapter8",
    chapterId: 3,
    lessonId: 3,
  },
  {
    imgSrc:
      "https://alsallum.s3.eu-north-1.amazonaws.com/european-man-woman-casual-wear-standing-back-back-with-arms-crossed-isolated-colorful-wall_171337-51292.jpg",
    mainText: "إنهاء المحادثة",
    subText: "تعلم كيفية إنهاء المحادثة",
    url: "/test/chapter9",
    chapterId: 3,
    lessonId: 4,
  },
  {
    type: "checkpoint",
    imgSrc: "https://alsallum.s3.eu-north-1.amazonaws.com/Diamond.png",
    mainText: "نقطة التحقق",
    subText: "اختبر مهاراتك للوصول إلى الفصل التالي",
    url: "/test/chapter10",
    chapterId: 3,
    lessonId: 5,
  },
  {
    imgSrc: "https://alsallum.s3.eu-north-1.amazonaws.com/jack.jpeg",
    mainText: "إنهاء المحادثة",
    subText: "تعلم كيفية إنهاء المحادثة",
    url: "/test/chapter6",
    chapterId: 4,
    lessonId: 1,
  },
  {
    imgSrc:
      "https://alsallum.s3.eu-north-1.amazonaws.com/davidcover1661254508_256.jpg",
    mainText: "إنهاء المحادثة",
    subText: "تعلم كيفية إنهاء المحادثة",
    url: "/test/chapter7",
    chapterId: 4,
    lessonId: 2,
  },
  {
    imgSrc:
      "https://alsallum.s3.eu-north-1.amazonaws.com/sogreat1661259325_256.jpg",
    mainText: "إنهاء المحادثة",
    subText: "تعلم كيفية إنهاء المحادثة",
    url: "/test/chapter8",
    chapterId: 4,
    lessonId: 3,
  },
  {
    imgSrc:
      "https://alsallum.s3.eu-north-1.amazonaws.com/european-man-woman-casual-wear-standing-back-back-with-arms-crossed-isolated-colorful-wall_171337-51292.jpg",
    mainText: "إنهاء المحادثة",
    subText: "تعلم كيفية إنهاء المحادثة",
    url: "/test/chapter9",
    chapterId: 4,
    lessonId: 4,
  },
  {
    type: "checkpoint",
    imgSrc: "https://alsallum.s3.eu-north-1.amazonaws.com/Diamond.png",
    mainText: "نقطة التحقق",
    subText: "اختبر مهاراتك للوصول إلى الفصل التالي",
    url: "/test/chapter10",
    chapterId: 4,
    lessonId: 5,
  },
];

export default chapterItems;
