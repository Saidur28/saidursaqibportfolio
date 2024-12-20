$(document).ready(function () {
    
    $("#hamburger").click(function () {
        $("#nav-links").toggleClass("active"); // Toggles the active class
    });

    
    $("#addPostBtn").click(function () {
        const postContent = $("#postContent").val().trim();

        if (postContent) {
            
            const newPost = $(`
                <div class="post">
                    <h3>Anonymous User</h3>
                    <p>${postContent}</p>
                    <div class="post-actions">
                        <button class="like-btn">Like (<span class="like-count">0</span>)</button>
                    </div>
                </div>
            `);

            
            $("#feed").prepend(newPost.hide().fadeIn(600));

            
            $("#postContent").val("");
        } else {
            alert("Please enter content for your post!");
        }
    });

    
    $("#feed").on("click", ".like-btn", function () {
        const likeCount = $(this).find(".like-count");
        const currentCount = parseInt(likeCount.text());
        likeCount.text(currentCount + 1);
    });
});
