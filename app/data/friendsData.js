// ===============================================================================
// DATA
// Below data will hold all of the reserved tables.
// Initially we just set it equal to a "dummy" customer.
// But you could have it be an empty array as well.
// ===============================================================================

var friendsArray = [{
    "name": "Shaniqua Tompson",
    "photo": "https://pbs.twimg.com/profile_images/3154610746/26e82df3284e8af3cfae4c62c5403639_400x400.jpeg",
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
    "name": "Kamran Bakir",
    "photo": "https://upload.wikimedia.org/wikipedia/commons/6/6c/Queen_Silvia_of_Sweden%2C_June_8%2C_2013_%28cropped%29.jpg",
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
    "name": "Diana Galvan",
    "photo": "https://3.bp.blogspot.com/-BmI2eKjKA3A/VsWhnyhrKuI/AAAAAAAA1gM/xnl-aAwgJCs/s1600/fotos-macarena-achaga.jpg",
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
    "name": "Madona O'Connor",
    "photo": "https://tse2.mm.bing.net/th?id=OIP.HmJgE-CKUwpf1l5mJd2B1gHaFS&pid=15.1&P=0&w=228&h=163",
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
    "name": "Macarena Del Rio",
    "photo": "https://tse2.mm.bing.net/th?id=OIP.QcNogwjIhlmYIbztY4UKDQHaE7&pid=15.1&P=0&w=235&h=157",
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
    "name": "Joe Ortega ",
    "photo": "http://s.newsweek.com/sites/www.newsweek.com/files/2017/07/10/jose-mourinho.jpg ",
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
    "name": "Jose Estrada",
    "photo": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ee/Jose_Pablo_Cantillo_2015.jpg/1200px-Jose_Pablo_Cantillo_2015.jpg",
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
    "name": "Lady Thoaley",
    "photo": "http://www.thefamouspeople.com/profiles/images/kathy-ireland-1.jpg",
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
    "name": "Kathy Haley",
    "photo": "https://upload.wikimedia.org/wikipedia/commons/8/8a/Kathy_Griffin_2015_TCA_Press_Tour_%28cropped%29.jpg",
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
    "name": "Carmen Electra",
    "photo": "http://2.bp.blogspot.com/-CmivIFbBasA/TwYcBKMa3WI/AAAAAAAAB-c/F-wC2UodVds/s1600/Carmen-Electra-74.JPG",
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
    "name": "komal batra",
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