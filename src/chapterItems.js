const chapterItems = [
  {
    chapterId: 1,
    lessonId: 1,
    imgSrc:
      "https://alsallum.s3.eu-north-1.amazonaws.com/welcomeimage1661254149_256.jpg",
    mainText: "الترحيب بالاخرين",
    subText: "تعلم التحية عند مقابلة الأشخاص",
    url: "/test/1/chapter1",
  },
  {
    chapterId: 1,
    lessonId: 2,

    imgSrc:
      "https://alsallum.s3.eu-north-1.amazonaws.com/davidcover1661254508_256.jpg",
    mainText: "تقديم نفسك",
    subText: "قل اسمك",
    url: "/test/1/chapter2",
  },
  {
    chapterId: 1,
    lessonId: 3,

    imgSrc:
      "https://alsallum.s3.eu-north-1.amazonaws.com/sogreat1661259325_256.jpg",
    mainText: "توديع الغير",
    subText: "كيف تودع الاخرين",
    url: "/test/1/chapter3",
  },
  {
    chapterId: 1,
    lessonId: 4,

    imgSrc:
      "https://alsallum.s3.eu-north-1.amazonaws.com/european-man-woman-casual-wear-standing-back-back-with-arms-crossed-isolated-colorful-wall_171337-51292.jpg",
    mainText: "طلب القهوة",
    subText: "اطلب قهوتك ببساطة",
    url: "/test/1/chapter4",
  },
  {
    chapterId: 1,
    lessonId: 5,

    type: "checkpoint",
    imgSrc: "https://alsallum.s3.eu-north-1.amazonaws.com/Diamond.png",
    mainText: "نقطة التحقق",
    subText: "اختبر مهاراتك للوصول إلى الفصل التالي",
    url: "/test/1/chapter5",
  },
  {
    chapterId: 2,
    lessonId: 1,
    completed: false,
    imgSrc: "https://alsallum.s3.eu-north-1.amazonaws.com/jack.jpeg",
    mainText: "وصف الجنسية",
    subText: "  السؤال عن جنسية الآخرين والتعريف بجنسيتك",
    url: "/test/2/chapter6",
  },
  {
    imgSrc:
      "https://alsallum.s3.eu-north-1.amazonaws.com/davidcover1661254508_256.jpg",
    mainText: "قول أين تعيش",
    subText: "تحدث عن المكان الذي تعيش فيه",
    url: "/test/2/chapter7",
    chapterId: 2,
    lessonId: 2,
  },
  {
    imgSrc:
      "https://alsallum.s3.eu-north-1.amazonaws.com/sogreat1661259325_256.jpg",
    mainText: "إعطاء جنسيتك",
    subText: "تعلم كيفية القول من أي دولة أنت",
    url: "/test/2/chapter8",
    chapterId: 2,
    lessonId: 3,
  },
  {
    completed: false,
    imgSrc:
      "https://alsallum.s3.eu-north-1.amazonaws.com/european-man-woman-casual-wear-standing-back-back-with-arms-crossed-isolated-colorful-wall_171337-51292.jpg",
    mainText: "إنهاء المحادثة",
    subText: "تعلم كيفية إنهاء المحادثة",
    url: "/test/2/chapter9",
    chapterId: 2,
    lessonId: 4,
  },
  {
    type: "checkpoint",
    imgSrc: "https://alsallum.s3.eu-north-1.amazonaws.com/Diamond.png",
    mainText: "نقطة التحقق",
    subText: "اختبر مهاراتك للوصول إلى الفصل التالي",
    url: "/test/2/chapter10",
    chapterId: 2,
    lessonId: 5,
  },
  {
    imgSrc: "https://alsallum.s3.eu-north-1.amazonaws.com/jack.jpeg",
    mainText: "إنهاء المحادثة",
    subText: "تعلم كيفية إنهاء المحادثة",
    url: "/test/3/chapter6",
    chapterId: 3,
    lessonId: 1,
  },
  {
    imgSrc:
      "https://alsallum.s3.eu-north-1.amazonaws.com/davidcover1661254508_256.jpg",
    mainText: "إنهاء المحادثة",
    subText: "تعلم كيفية إنهاء المحادثة",
    url: "/test/3/chapter7",
    chapterId: 3,
    lessonId: 2,
  },
  {
    imgSrc:
      "https://alsallum.s3.eu-north-1.amazonaws.com/sogreat1661259325_256.jpg",
    mainText: "إنهاء المحادثة",
    subText: "تعلم كيفية إنهاء المحادثة",
    url: "/test/3/chapter8",
    chapterId: 3,
    lessonId: 3,
  },
  {
    imgSrc:
      "https://alsallum.s3.eu-north-1.amazonaws.com/european-man-woman-casual-wear-standing-back-back-with-arms-crossed-isolated-colorful-wall_171337-51292.jpg",
    mainText: "إنهاء المحادثة",
    subText: "تعلم كيفية إنهاء المحادثة",
    url: "/test/3/chapter9",
    chapterId: 3,
    lessonId: 4,
  },
  {
    type: "checkpoint",
    imgSrc: "https://alsallum.s3.eu-north-1.amazonaws.com/Diamond.png",
    mainText: "نقطة التحقق",
    subText: "اختبر مهاراتك للوصول إلى الفصل التالي",
    url: "/test/3/chapter10",
    chapterId: 3,
    lessonId: 5,
  },
  {
    imgSrc: "https://alsallum.s3.eu-north-1.amazonaws.com/jack.jpeg",
    mainText: "إنهاء المحادثة",
    subText: "تعلم كيفية إنهاء المحادثة",
    url: "/test/4/chapter6",
    chapterId: 4,
    lessonId: 1,
  },
  {
    imgSrc:
      "https://alsallum.s3.eu-north-1.amazonaws.com/davidcover1661254508_256.jpg",
    mainText: "إنهاء المحادثة",
    subText: "تعلم كيفية إنهاء المحادثة",
    url: "/test/4/chapter7",
    chapterId: 4,
    lessonId: 2,
  },
  {
    imgSrc:
      "https://alsallum.s3.eu-north-1.amazonaws.com/sogreat1661259325_256.jpg",
    mainText: "إنهاء المحادثة",
    subText: "تعلم كيفية إنهاء المحادثة",
    url: "/test/4/chapter8",
    chapterId: 4,
    lessonId: 3,
  },
  {
    imgSrc:
      "https://alsallum.s3.eu-north-1.amazonaws.com/european-man-woman-casual-wear-standing-back-back-with-arms-crossed-isolated-colorful-wall_171337-51292.jpg",
    mainText: "إنهاء المحادثة",
    subText: "تعلم كيفية إنهاء المحادثة",
    url: "/test/4/chapter9",
    chapterId: 4,
    lessonId: 4,
  },
  {
    type: "checkpoint",
    imgSrc: "https://alsallum.s3.eu-north-1.amazonaws.com/Diamond.png",
    mainText: "نقطة التحقق",
    subText: "اختبر مهاراتك للوصول إلى الفصل التالي",
    url: "/test/4/chapter10",
    chapterId: 4,
    lessonId: 5,
  },
];

export default chapterItems;
