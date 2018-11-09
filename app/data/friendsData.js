// ===============================================================================
// DATA
// Below data will hold all of the reserved tables.
// Initially we just set it equal to a "dummy" customer.
// But you could have it be an empty array as well.
// ===============================================================================

var friendsArray = [
  {
  "name": "Ahmed",
  "photo": "https://media.licdn.com/mpr/mpr/shrinknp_200_200/AAEAAQAAAAAAAAq7AAAAJDAwYzI4NTQ4LWYwZWUtNGFkYS1hNTYwLTZjYzkwY2ViZDA3OA.jpg",
  "scores": [
  "5",
  "1",
  "4",
  "4",
  "5",
  "1",
  "2",
  "5",
  "4",
  "1"
  ]
  },
  {
  "name": "Jacob Deming",
  "photo": "https://pbs.twimg.com/profile_images/691785039043022849/oWsy8LNR.jpg",
  "scores": [
  "4",
  "2",
  "5",
  "1",
  "3",
  "2",
  "2",
  "1",
  "3",
  "2"
  ]
  },
  {
  "name": "Jeremiah Scanlon",
  "photo": "https://avatars2.githubusercontent.com/u/8504998?v=3&s=460",
  "scores": [
  "5",
  "2",
  "2",
  "2",
  "4",
  "1",
  "3",
  "2",
  "5",
  "5"
  ]
  },
  {
  "name": "Louis T. Delia",
  "photo": "https://pbs.twimg.com/profile_images/639214960049000449/lNCRC-ub.jpg",
  "scores": [
  "3",
  "3",
  "4",
  "2",
  "2",
  "1",
  "3",
  "2",
  "2",
  "3"
  ]
  },
  {
  "name": "Lou Ritter",
  "photo": "https://media.licdn.com/mpr/mpr/shrinknp_400_400/AAEAAQAAAAAAAAkDAAAAJDhhZTI5NTk2LWQzZjUtNDJjZi1hMTM2LTQ3ZjNmYjE0YmY2NA.jpg",
  "scores": [
  "4",
  "3",
  "4",
  "1",
  "5",
  "2",
  "5",
  "3",
  "1",
  "4"
  ]
  },
  {
  "name": "Jordan Biason",
  "photo": "https://media.licdn.com/mpr/mpr/shrinknp_400_400/AAEAAQAAAAAAAAisAAAAJGUxYzc4YzA0LWQxMzUtNGI4NS04YTFiLTkwYzM0YTZkNzA2NA.jpg",
  "scores": [
  "4",
  "4",
  "2",
  "3",
  "2",
  "2",
  "3",
  "2",
  "4",
  "5"
  ]
  },
  {
  "name": "Kamran",
  "photo": "http://uglypic.com",
  "scores": [
  "5",
  "4",
  "1",
  "3",
  "1",
  "3",
  "4",
  "3",
  "3",
  "4"
  ]
  },
  {
  "name": "d",
  "photo": "d",
  "scores": [
  "2",
  "4",
  "4",
  "2",
  "3",
  "4",
  "3",
  "2",
  "4",
  "2"
  ]
  },
  {
  "name": "bob",
  "photo": "j.jpg",
  "scores": [
  "1",
  "1",
  "1",
  "3",
  "5",
  "2",
  "3",
  "3",
  "3",
  "3"
  ]
  },
  {
  "name": "Heyyyy",
  "photo": "hiiiii",
  "scores": [
  "3",
  "4",
  "1",
  "4",
  "2",
  "3",
  "1",
  "5",
  "3",
  "2"
  ]
  },
  {
  "name": "Kevin ",
  "photo": "https://cloud.netlifyusercontent.com/assets/344dbf88-fdf9-42bb-adb4-46f01eedd629/242ce817-97a3-48fe-9acd-b1bf97930b01/09-posterization-opt.jpg ",
  "scores": [
  "3",
  "3",
  "3",
  "3",
  "2",
  "3",
  "2",
  "3",
  "3",
  "3"
  ]
  },
  {
  "name": "Kevin ",
  "photo": "https://cloud.netlifyusercontent.com/assets/344dbf88-fdf9-42bb-adb4-46f01eedd629/242ce817-97a3-48fe-9acd-b1bf97930b01/09-posterization-opt.jpg ",
  "scores": [
  "3",
  "3",
  "3",
  "3",
  "2",
  "2",
  "2",
  "3",
  "3",
  "3"
  ]
  },
  {
  "name": "skhdk",
  "photo": "photo.pdf",
  "scores": [
  "3",
  "2",
  "2",
  "2",
  "2",
  "2",
  "3",
  "1",
  "3",
  "3"
  ]
  },
  {
  "name": "B-ri",
  "photo": "data:image/jpeg;base64,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",
  "scores": [
  "4",
  "4",
  "3",
  "1",
  "1",
  "1",
  "4",
  "2",
  "4",
  "3"
  ]
  },
  {
  "name": "haley",
  "photo": "url",
  "scores": [
  "1",
  "1",
  "1",
  "1",
  "1",
  "1",
  "1",
  "1",
  "1",
  "1"
  ]
  },
  {
  "name": "haley",
  "photo": "url",
  "scores": [
  "1",
  "1",
  "1",
  "1",
  "1",
  "1",
  "1",
  "1",
  "1",
  "1"
  ]
  },
  {
  "name": "Next Test",
  "photo": "Next Test",
  "scores": [
  "3",
  "3",
  "3",
  "3",
  "3",
  "3",
  "3",
  "3",
  "3",
  "3"
  ]
  },
  {
  "name": "Ben",
  "photo": "https://www.google.com/imgres?imgurl=https%3A%2F%2Fstatic.wikia.nocookie.net%2F2a6c845c-c6e9-472e-abed-24863817b795%2Ftop-crop%2Fwidth%2F360%2Fheight%2F360&imgrefurl=http%3A%2F%2Fozark.wikia.com%2Fwiki%2F4198778%2Fmarty-byrde&docid=69H0HZyiNdi3tM&tbnid=iP58P4uUzpawwM%3A&vet=10ahUKEwi6x6O-0sbeAhXRIDQIHd7-AckQMwg-KAAwAA..i&w=360&h=360&bih=796&biw=812&q=marty%20byrde&ved=0ahUKEwi6x6O-0sbeAhXRIDQIHd7-AckQMwg-KAAwAA&iact=mrc&uact=8",
  "scores": [
  "5",
  "1",
  "4",
  "1",
  "2",
  "1",
  "3",
  "1",
  "2",
  "4"
  ]
  },
  {
  "name": "Think1",
  "photo": "https://images-na.ssl-images-amazon.com/images/I/61z--4USQQL._SL500_AC_SS350_.jpg",
  "scores": [
  "3",
  "3",
  "3",
  "3",
  "3",
  "3",
  "3",
  "3",
  "3",
  "3"
  ]
  },
  {
  "name": "komalbatra",
  "photo": "https://vignette.wikia.nocookie.net/lana-lang/images/7/7c/MosClark_Kent.jpg/revision/latest/scale-to-width-down/250?cb=20131202020934",
  "scores": [
  "2",
  "3",
  "3",
  "3",
  "3",
  "4",
  "2",
  "3",
  "2",
  "4"
  ]
  },
  {
  "name": "aaa",
  "photo": "aaa.img",
  "scores": [
  "2",
  "2",
  "3",
  "2",
  "1",
  "4",
  "1",
  "2",
  "3",
  "2"
  ]
  }
  ];

// Note how we export the array. This makes it accessible to other files using require.
module.exports = friendsArray;
