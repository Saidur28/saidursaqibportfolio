$(document).ready(function () {
    $('.menu-icon').click(function () {
        $('.navigation').slideToggle(200);
    });

    $('#postForm').submit(function (event) {
        event.preventDefault();
        const postText = $('#postText').val().trim();
        if (!postText) {
            alert('Please enter some text before posting!');
            return;
        }
        const postElement = $('<div class="post"></div>');
        const postContent = $('<p></p>').text(postText);
        const likeButton = $('<button class="like-btn">Like</button>');
        const likeCounter = $('<span class="like-count">0 likes</span>');
        likeButton.click(function () {
            let likes = parseInt($(this).next('.like-count').text().split(' ')[0], 10);
            $(this).next('.like-count').text(`${++likes} likes`);
        });
        postElement.append(postContent, likeButton, likeCounter);
        $('#feed').prepend(postElement);
        $('#postText').val('');
        postElement.hide().fadeIn(400);
    });
});
