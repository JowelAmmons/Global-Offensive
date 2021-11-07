var star = document.getElementsByClassName("far fa-star");
// var trash = document.getElementsByClassName("fa-trash");

Array.from(star).forEach(function(element) {
      element.addEventListener('click', function(){
        const postId = this.parentNode.parentNode.childNodes[4].innerText
        const pushStar = parseFloat(this.parentNode.parentNode.childNodes[6].innerText)
        fetch('star', {
          method: 'put',
          headers: {'Content-Type': 'application/json'},
          body: JSON.stringify({
            '_id': postId,
            'star': pushStar
          })
        })
        .then(response => {
          if (response.ok) return response.json()
        })
        .then(data => {
          console.log(data)
          window.location.reload(true)
        })
      });
});

// Array.from(trash).forEach(function(element) {
//       element.addEventListener('click', function(){
//         const name = this.parentNode.parentNode.childNodes[1].innerText
//         const msg = this.parentNode.parentNode.childNodes[3].innerText
//         fetch('messages', {
//           method: 'delete',
//           headers: {
//             'Content-Type': 'application/json'
//           },
//           body: JSON.stringify({
//             'name': name,
//             'msg': msg
//           })
//         }).then(function (response) {
//           window.location.reload()
//         })
//       });
// });

