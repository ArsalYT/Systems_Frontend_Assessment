export const COMMENTS = [
  {
    id: 0,
    img: "user1.png",
    user_name: "Maria",
    comment:
      "I was very glad to have you after such a long time. Can you plan a meetup? Maybe this weekend?",
    liked: false,
    like_count: 2,
    replies: [],
  },
  {
    id: 1,
    img: "user2.png",
    user_name: "Alex Benjamin",
    comment:
      "Home sweet home! I'm glad you are back. It's been two year and miss the football matches we have together. A lot has been changed since you left. Let's meet at the ground tomorrow evening?",
    liked: false,
    like_count: 1,
    replies: [
      {
        id: 0,
        img: "user4.png",
        user_name: "John Doe",
        comment: "Old rivalry! Consider me in ;-)",
        liked: false,
        like_count: 0,
      },
    ],
  },
  {
    id: 2,
    img: "user3.png",
    user_name: "Tania",
    comment:
      "Hey bud, welcome back to home. It's so long to see you back again. Would love to hear the travelling stories of yours. Your or my place?",
    liked: false,
    like_count: 0,
    replies: [],
  },
  {
    id: 0,
    img: "user4.png",
    user_name: "John Doe",
    comment: "Thank You All",
    liked: false,
    like_count: 0,
    replies: [],
  },
];
