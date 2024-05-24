document.getElementById('like-button').addEventListener('click', function() {
    var likeCount = document.querySelector('.like-count');
    likeCount.textContent = parseInt(likeCount.textContent) + 1;
});

document.getElementById('post-comment').addEventListener('click', function() {
    var commentText = document.getElementById('comment-text').value;
    if (commentText.trim() !== "") {
        var commentsList = document.querySelector('.comments-list');
        var newComment = document.createElement('div');
        newComment.textContent = commentText;
        commentsList.appendChild(newComment);
        document.getElementById('comment-text').value = '';
    }
});
