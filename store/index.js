export const state = () => {
      return {
        posts: [
          {
            _id: 1,
            title: "Heya",
            subtitle: "Hello",
            author: "Prik S",
            date: new Date(),
            isRead: true
          },
          {
            _id: 2,
            title: "Heya 2",
            subtitle: "Hello Again 222",
            author: "Prik S",
            date: new Date(),
            isRead: false
          }
        ]
      };
};