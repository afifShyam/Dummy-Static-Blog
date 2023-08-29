const commentInput = document.getElementById('commentInput');
const usernameInput = document.getElementById('usernameInput');
const addCommentButton = document.getElementById('addComment');
const commentsContainer = document.getElementById('comments');

addCommentButton.addEventListener('click', addComment);
window.addEventListener('load', loadComments);

function addComment() {
    const commentText = commentInput.value.trim();
    const username = usernameInput.value.trim();

    if (commentText !== '' && username !== '') {
        const comment = {
            username,
            comment: commentText
        };
        saveComment(comment);

        renderComment(comment);
        commentInput.value = '';
    }
}

function saveComment(comment) {
    const comments = getSavedComments();
    comments.push(comment);
    localStorage.setItem('comments', JSON.stringify(comments));
}

function getSavedComments() {
    const commentsJSON = localStorage.getItem('comments');
    return commentsJSON ? JSON.parse(commentsJSON) : [];
}

function loadComments() {
    const comments = getSavedComments();
    comments.forEach(comment => {
        renderComment(comment);
    });
}

function renderComment(comment) {
    const commentElement = document.createElement('div');
    commentElement.className = 'comment';
    commentElement.innerHTML = `<strong>${comment.username}:</strong> ${comment.comment}`;

    commentsContainer.appendChild(commentElement);
}